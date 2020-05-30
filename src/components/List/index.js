import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { MdAdd, MdDelete } from 'react-icons/md';
import Card from '../Card';
import api from '../../services/api';
import { Container, AddTask, Button } from './styles';

export default function List({ data, index: listIndex, projectId, setLists }) {
  const [addInputTask, setAddInputTask] = useState('');

  function handleAddTaskInput(e) {
    setAddInputTask(e.target.value);
  }

  async function getTasks() {
    const response = await api.get(`/tasks/${projectId}`);
    setLists(response.data);
  }

  async function handleAddTaskSubmit() {
    await api.post('/tasks', {
      title: addInputTask,
      description: addInputTask,
      data_end: new Date(),
      project_id: projectId,
      employees: [],
      value: 10,
    });

    setAddInputTask('');
    getTasks();
  }

  async function handleStatusDelete(id) {
    confirmAlert({
      title: 'Quer realmente exclui-lo?',
      message: 'Você não pode reverter essa alteração',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            await api.delete(`/statuses/${id}`);
            getTasks();
          },
        },
        {
          label: 'Não',
        },
      ],
    });
  }

  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.title !== 'Created' && data.title !== 'Concluded' && (
          <MdDelete
            size={20}
            color="#999999"
            onClick={() => handleStatusDelete(data.id)}
          />
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card
            key={card.id}
            listIndex={listIndex}
            index={index}
            data={card}
            setLists={setLists}
            projectId={projectId}
          />
        ))}
        {listIndex === 0 && (
          <>
            <AddTask>
              <MdAdd color="#999999" size={20} />
              <input
                placeholder="Adicione uma tarefa"
                onChange={handleAddTaskInput}
                value={addInputTask}
              />
            </AddTask>
            {addInputTask.length > 0 && (
              <Button onClick={handleAddTaskSubmit}>Criar</Button>
            )}
          </>
        )}
      </ul>
    </Container>
  );
}

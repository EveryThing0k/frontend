/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { useSelector } from 'react-redux';
import produce from 'immer';
import semProjos from '../../assets/sprojetos.svg';
import BoardContext from './context';

import List from '../List';

import api from '../../services/api';

import { Container, AddList, AddListInput, Button } from './styles';

export default function Board({ projectId }) {
  const [lists, setLists] = useState([]);
  const [addList, setAddList] = useState('');
  const userType = useSelector(state => state.user.profile.type);

  async function getTasks() {
    const response = await api.get(`/tasks/${projectId}`);
    setLists(response.data);
  }

  useEffect(() => {
    if (projectId) {
      getTasks();
    }
  }, [projectId]);

  function move(fromList, toList, from, to) {
    setLists(
      produce(lists, draft => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  }

  async function handleCreatelist() {
    await api.post('/statuses', {
      name: addList,
      project_id: projectId,
    });
    getTasks();
    setAddList('');
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {projectId ? (
          <>
            {lists.map((list, index) => (
              <List
                key={list.title}
                index={index}
                data={list}
                projectId={projectId}
                setLists={setLists}
              />
            ))}
            {userType === 'company' && (
              <AddList>
                <AddListInput>
                  <MdAdd size={20} color="#999999" />
                  <input
                    placeholder="Adicionar nova lista"
                    value={addList}
                    onChange={e => setAddList(e.target.value)}
                  />
                </AddListInput>
                {addList.length > 0 && (
                  <Button onClick={handleCreatelist}>Criar</Button>
                )}
              </AddList>
            )}
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              placeContent: 'center',
              margin: '20px 20px',
            }}
          >
            <h1>
              Você ainda não possui tarefas nem projetos para chamar de seu.
            </h1>
            <img
              style={{ width: '80%', height: '80%', marginTop: '30px' }}
              src={semProjos}
              alt="Sem projetos"
            />
          </div>
        )}
      </Container>
    </BoardContext.Provider>
  );
}

import React, { useState, useEffect } from 'react';
import produce from 'immer';

import { loadLists } from '../../services/loadLists';

import BoardContext from './context';

import List from '../List';

import api from '../../services/api';

import { Container } from './styles';

const data = loadLists();

export default function Board({ projectsId }) {
  const [lists, setLists] = useState(data);

  useEffect(() => {
    async function getTasks() {
      const response = await api.get(`/tasks/${projectsId}`);
      setLists(response.data);
    }

    if (projectsId) {
      getTasks();
    }
  }, [projectsId]);

  function move(fromList, toList, from, to) {
    setLists(
      produce(lists, draft => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {projectsId ? (
          lists.map((list, index) => (
            <List key={list.title} index={index} data={list} />
          ))
        ) : (
          <h1>
            Você ainda não possui tarefas nem projetos para chamar de seu.
          </h1>
        )}
      </Container>
    </BoardContext.Provider>
  );
}

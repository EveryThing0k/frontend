import React, { useRef, useContext } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useDrag, useDrop } from 'react-dnd';
import { MdDelete } from 'react-icons/md';
import BoardContext from '../Board/context';
import api from '../../services/api';
import { Container } from './styles';

export default function Card({ data, index, listIndex, setLists, projectId }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  async function getTasks() {
    const response = await api.get(`/tasks/${projectId}`);
    setLists(response.data);
  }

  async function handleTaskDelete(id) {
    confirmAlert({
      title: 'Quer realmente exclui-lo?',
      message: 'Você não pode reverter essa alteração',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            await api.delete(`/tasks/${id}`);
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
    <Container ref={ref} isDragging={isDragging}>
      <header>
        <MdDelete
          size={20}
          color="white"
          onClick={() => handleTaskDelete(data.id)}
        />
      </header>
      <div>
        <p>{data.content}</p>
      </div>
    </Container>
  );
}

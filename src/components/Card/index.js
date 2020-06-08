import React, { useState, useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { MdDone } from 'react-icons/md';
import { useSelector } from 'react-redux';
import BoardContext from '../Board/context';
import api from '../../services/api';
import { Container } from './styles';
import MembersConcluded from '../MembersConluded';

export default function Card({ data, index, listIndex, setLists, projectId }) {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [employees, setEmployees] = useState([]);
  const { move } = useContext(BoardContext);
  const userType = useSelector(state => state.user.profile.type);

  async function getTasks() {
    const response = await api.get(`/tasks/${projectId}`);
    setLists(response.data);
  }

  function handleClose() {
    setOpen(false);
  }

  async function handleSubmit() {
    await api.put(`/tasks/${id}`, { emails: employees });
    getTasks();
  }

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

      if (draggedListIndex && targetListIndex && targetIndex && draggedIndex) {
        move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

        item.index = targetIndex;
        item.listIndex = targetListIndex;
      }
    },
  });

  dragRef(dropRef(ref));

  async function handleTaskConcluded(idTask) {
    setOpen(!open);
    setId(idTask);
  }

  return (
    <>
      {data && (
        <Container ref={ref} isDragging={isDragging}>
          <header>
            {userType === 'company' && (
              <MdDone
                size={20}
                color="white"
                onClick={() => handleTaskConcluded(data.id)}
              />
            )}
          </header>
          <div>
            <p>{data.content}</p>
          </div>
          <MembersConcluded
            open={open}
            handleClose={handleClose}
            employees={employees}
            setEmployees={setEmployees}
            handleSubmit={handleSubmit}
          />
        </Container>
      )}
    </>
  );
}

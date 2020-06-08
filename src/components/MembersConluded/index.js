import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { MdAdd, MdAccountCircle, MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Input, Button } from './styles';
import api from '../../services/api';

export default function MembersConcluded({
  handleClose,
  open,
  employees,
  setEmployees,
  handleSubmit,
}) {
  const [inputMode, setInputMode] = useState(false);
  const [newMember, setNewMember] = useState('');

  async function handleAddEmail(email) {
    setNewMember('');
    const emailExists = employees.find(employee => employee === email);
    if (emailExists) {
      return;
    }
    setEmployees([...employees, email]);
  }

  async function handleDelete(email) {
    setEmployees(employees.filter(employee => employee !== email));
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Adicione membros</DialogTitle>
      <List>
        {employees.map(email => (
          <ListItem onClick={() => {}} key={email}>
            <ListItemAvatar>
              <MdAccountCircle size={43} color="#999999" />
            </ListItemAvatar>
            <ListItemText primary={email} />
            <div style={{ marginLeft: 10, cursor: 'pointer' }}>
              <MdDelete
                size={20}
                color="#CC0000"
                onClick={() => handleDelete(email)}
              />
            </div>
          </ListItem>
        ))}

        <ListItem
          autoFocus
          onClick={() => setInputMode(true)}
          style={{ cursor: 'pointer' }}
        >
          <ListItemAvatar>
            <Avatar>
              <MdAdd size={20} />
            </Avatar>
          </ListItemAvatar>
          {inputMode ? (
            <Input
              onChange={e => setNewMember(e.target.value)}
              value={newMember}
              onKeyPress={e =>
                e.key === 'Enter' && handleAddEmail(e.target.value)
              }
            />
          ) : (
            <ListItemText primary="Adicionar membro" />
          )}
        </ListItem>
      </List>
      <Button onClick={handleSubmit}>Concluir</Button>
    </Dialog>
  );
}

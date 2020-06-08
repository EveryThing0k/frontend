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
import { Input } from './styles';
import api from '../../services/api';

export default function Members({ handleClose, open }) {
  const [inputMode, setInputMode] = useState(false);
  const [newMember, setNewMember] = useState('');
  const [employees, setEmployees] = useState([]);

  async function getEmployees() {
    const response = await api.get('/company_employees');
    setEmployees(response.data);
  }

  async function handleDelete(email) {
    await api.delete(`/company_employees/${email}`);
    toast.success('Membro excluido com sucesso');
    getEmployees();
  }

  async function handleSubmit() {
    const response = await api.post('/company_employees', {
      employees: [newMember],
    });
    if (response.data.length > 0) {
      toast.success('Adicionado com sucesso');
    } else {
      toast.error('E-mail não encontrado');
    }

    getEmployees();
  }

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Gerencie membros</DialogTitle>
      <List>
        {employees.map(email => (
          <ListItem onClick={() => {}} key={email}>
            <ListItemAvatar>
              <MdAccountCircle size={43} color="#999999" />
            </ListItemAvatar>
            <ListItemText primary={email} />
            <div style={{ marginLeft: 10, cursor: 'po  inter' }}>
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
              onKeyPress={e => e.key === 'Enter' && handleSubmit()}
            />
          ) : (
            <ListItemText primary="Adicionar membro" />
          )}
        </ListItem>
      </List>
    </Dialog>
  );
}

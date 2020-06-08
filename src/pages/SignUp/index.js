import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdLockOutline, MdFace, MdSupervisorAccount } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Container, Form, Input, Button } from './styles';
import api from '../../services/api';
import signUp from '../../assets/signup.png';
import history from '../../services/history';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [doc, setDoc] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (doc.length > 11) {
      history.push('/signupcompany', { name, email, password, cnpj: doc });
    } else {
      try {
        if (loading) {
          return;
        }
        setLoading(true);
        await api.post('/users/cpf', { name, email, password, cpf: doc });
        toast.success('Criado com sucesso, você pode logar na aplicação');
      } catch (err) {
        if (
          err &&
          err.response &&
          err.response.status &&
          Number(err.response.status) === 401
        ) {
          toast.error('Seu e-mail não está habilitado para registro');
          history.push('/');
          return;
        }
        toast.error('Erro ao criar o usuário');
      }
      history.push('/');
    }
    setLoading(false);
  }

  return (
    <Container>
      <Form>
        <h1>Seja um de nós</h1>
        <Input
          icon={<MdFace size={20} />}
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <Input
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <Input
          icon={<MdLockOutline size={20} />}
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <Input
          icon={<MdSupervisorAccount size={20} />}
          placeholder="CPF/CNPJ"
          onChange={e => setDoc(e.target.value)}
          value={doc}
        />
        <Button onClick={handleSubmit}>
          {loading ? 'Carregando' : 'Registrar'}
        </Button>
        <p>
          Já possui uma conta? <Link to="/">Entrar</Link>
        </p>
      </Form>
      <img src={signUp} alt="Evok" />
    </Container>
  );
}

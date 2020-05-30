import React, { useState } from 'react';
import { MdLockOutline, MdFace } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import profileImg from '../../assets/profile.svg';
import profileDataImg from '../../assets/profile_data.svg';
import { Container, Header, Content, Form, Input, Button } from './styles';
import { updateProfileRequest } from '../../store/modules/user/actions';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  async function handleSubmit() {
    if (password.length > 0) {
      if (password !== passwordConfirmation) {
        toast.error('Senha e sua devida confirmação deve ser  iguais');
        setPassword('');
        setPasswordConfirmation('');
      } else {
        dispatch(updateProfileRequest({ name, email, password }));
        setPassword('');
        setPasswordConfirmation('');
      }
    } else {
      dispatch(updateProfileRequest({ name, email }));
      setPassword('');
      setPasswordConfirmation('');
    }
  }

  return (
    <Container>
      <Header>
        <img src={profileImg} alt="Evok" />
        <div>
          <h3>{profile.name}</h3>
          <h4>Nível 09</h4>
        </div>
      </Header>
      <Content>
        <Form>
          <h1>Alterar informações de perfil</h1>
          <div>
            <h4>Nome</h4>
            <Input
              icon={<MdFace size={20} />}
              placeholder="Nome"
              onChange={e => setName(e.target.value)}
              value={name}
            />
            <h4>E-mail</h4>
            <Input
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <h4>Senha</h4>
            <Input
              icon={<MdLockOutline size={20} />}
              placeholder="Senha"
              onChange={e => setPassword(e.target.value)}
              value={password}
              type="password"
            />
            <h4>Repetir senha</h4>
            <Input
              icon={<MdLockOutline size={20} />}
              placeholder="Repetir senha"
              onChange={e => setPasswordConfirmation(e.target.value)}
              value={passwordConfirmation}
              type="password"
            />
          </div>
          <Button onClick={handleSubmit}>Salvar</Button>
        </Form>
        <img src={profileDataImg} alt="Evok" />
      </Content>
    </Container>
  );
}

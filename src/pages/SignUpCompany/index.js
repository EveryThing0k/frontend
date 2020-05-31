import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  MdTitle,
  MdLocationOn,
  MdDomain,
  MdLocationCity,
  MdMap,
  MdNaturePeople,
  MdMyLocation,
} from 'react-icons/md';
import { Container, Form, Input, Button } from './styles';
import signup_company from '../../assets/signup_company.png';
import api from '../../services/api';
import history from '../../services/history';

function SignUpCompany() {
  const [data, setData] = useState({});
  const [fantasyName, setFantasyName] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [neigh, setNeigh] = useState('');
  const [city, setCity] = useState('');
  const [UF, setUF] = useState('');
  const [number, setNumber] = useState('');

  async function handleSubmit() {
    const { name, email, password, cnpj } = data;
    await api.post('/users/cnpj', {
      fantasy_name: fantasyName,
      name,
      email,
      password,
      cnpj,
      address: {
        neighborhood: neigh,
        number,
        street,
        city,
        state: UF,
        cep,
      },
    });
    toast.success('Criado com sucesso, você pode logar na aplicação');
    history.push('/');
  }

  useEffect(() => {
    try {
      const { name, email, password, cnpj } = history.location.state;
      if (
        name.lenght === 0 ||
        email.lenght === 0 ||
        password.lenght === 0 ||
        cnpj.lenght === 0
      ) {
        history.push('/');
      }
      setData({ name, email, password, cnpj });
    } catch (err) {
      history.push('/');
    }
  }, []);

  return (
    <Container>
      <Form>
        <h1>Registar Empresa</h1>
        <Input
          icon={<MdTitle size={20} />}
          placeholder="Nome Fantasia"
          onChange={e => setFantasyName(e.target.value)}
          value={fantasyName}
        />
        <Input
          icon={<MdMap size={20} />}
          placeholder="CEP"
          onChange={e => setCep(e.target.value)}
          value={cep}
        />
        <Input
          icon={<MdNaturePeople size={20} />}
          placeholder="Rua"
          onChange={e => setStreet(e.target.value)}
          value={street}
        />
        <Input
          icon={<MdLocationCity size={20} />}
          placeholder="Bairro"
          onChange={e => setNeigh(e.target.value)}
          value={neigh}
        />
        <Input
          icon={<MdDomain size={20} />}
          placeholder="Cidade"
          onChange={e => setCity(e.target.value)}
          value={city}
        />
        <div>
          <Input
            icon={<MdLocationOn />}
            placeholder="UF"
            onChange={e => setUF(e.target.value)}
            value={UF}
          />
          <Input
            icon={<MdMyLocation size={20} />}
            placeholder="Número"
            onChange={e => setNumber(e.target.value)}
            value={number}
          />
        </div>
        <Button onClick={handleSubmit}>REGISTRAR</Button>
      </Form>
      <img src={signup_company} alt="evok" />
    </Container>
  );
}

export default SignUpCompany;

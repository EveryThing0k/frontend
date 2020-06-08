import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {
  MdTitle,
  MdLocationOn,
  MdDomain,
  MdLocationCity,
  MdMap,
  MdNaturePeople,
  MdMyLocation,
  MdSupervisorAccount,
} from 'react-icons/md';
import { Container, Content, Input, Button } from './styles';
import api from '../../services/api';
import { updateType } from '../../store/modules/user/actions';
import createCompanyImg from '../../assets/create_company.svg';

export default function CreateCompany() {
  const dispatch = useDispatch();
  const [fantasyName, setFantasyName] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [neigh, setNeigh] = useState('');
  const [city, setCity] = useState('');
  const [UF, setUF] = useState('');
  const [number, setNumber] = useState('');
  const [cnpj, setCnpj] = useState('');

  async function handleSubmit() {
    await api.post('/company', {
      fantasy_name: fantasyName,
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
    toast.success('Criado com sucesso!');
    dispatch(updateType('company'));
  }
  return (
    <Container>
      <Content>
        <h1>VOCÊ AINDA NÃO PERTENCE A NENHUMA EMPRESA</h1>
        <h2>Crie sua empresa agora mesmo!</h2>
        <Input
          icon={<MdTitle size={20} />}
          placeholder="Nome Fantasia"
          onChange={e => setFantasyName(e.target.value)}
          value={fantasyName}
        />
        <Input
          icon={<MdSupervisorAccount size={20} />}
          placeholder="CNPJ"
          onChange={e => setCnpj(e.target.value)}
          value={cnpj}
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
      </Content>
      <img src={createCompanyImg} alt="CreateCompany" />
    </Container>
  );
}

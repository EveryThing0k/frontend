import React from 'react';

import { MdFolder } from 'react-icons/md';
import { Container, Sidebar, Content } from './styles';

import colors from '../../styles/colors';
import Board from '../../components/Board';

export default function Dashboard() {
  return (
    <Container>
      <Sidebar>
        <h1>PROJETOS</h1>
        <div>
          <MdFolder size={25} color={colors.primary} />
          <h2>Banco do Brasil</h2>
        </div>
        <div>
          <MdFolder size={25} color="#555555" />
          <h2>Bradesco</h2>
        </div>
        <div>
          <MdFolder size={25} color="#555555" />
          <h2>Tarefas de casa</h2>
        </div>
      </Sidebar>
      <Content>
        <Board />
      </Content>
    </Container>
  );
}

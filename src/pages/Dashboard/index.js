import React from 'react';
import { Container, Sidebar, Content, FolderImg } from './styles';

import Board from '../../components/Board';
import CreateCompany from '../../components/CreateCompany';

export default function Dashboard() {
  return (
    <Container>
      <Sidebar>
        <h1>PROJETOS</h1>
        <div>
          <FolderImg />
          <h2>Projeto 01</h2>
        </div>
        <div>
          <FolderImg />
          <h2>Projeto 02</h2>
        </div>
        <div>
          <FolderImg />
          <h2>Projeto 03</h2>
        </div>
      </Sidebar>
      <Content>
        {/* <Board /> */}
        <CreateCompany />
      </Content>
    </Container>
  );
}

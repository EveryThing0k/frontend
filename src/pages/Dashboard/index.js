import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Sidebar, Projects, Content, FolderImg } from './styles';
import api from '../../services/api';
import Board from '../../components/Board';
import CreateCompany from '../../components/CreateCompany';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const userType = useSelector(state => state.user.profile.type);
  const [projectIdSelected, setProjectIdSelected] = useState(null);

  useEffect(() => {
    async function getProjects() {
      const response = await api.get('/projects');
      setProjects(response.data);

      if (response.data.length !== 0) {
        setProjectIdSelected(response.data[0].id);
      }
    }
    getProjects();
  }, [userType]);

  function handleChangeProject(id) {
    setProjectIdSelected(id);
  }

  return (
    <Container>
      <Sidebar>
        <h5>PROJETOS</h5>
        {projects.map(project => (
          <Projects onClick={() => handleChangeProject(project.id)}>
            <FolderImg active={project.id === projectIdSelected} />
            <h5>{project.title}</h5>
          </Projects>
        ))}
      </Sidebar>
      <Content>
        {userType === 'company' ? (
          <Board projectsId={projectIdSelected} />
        ) : (
          <CreateCompany />
        )}
      </Content>
    </Container>
  );
}

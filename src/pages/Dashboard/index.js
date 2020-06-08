import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MdAdd, MdDelete } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';
import {
  Container,
  Sidebar,
  AddProjects,
  Button,
  Projects,
  Content,
  FolderImg,
} from './styles';
import api from '../../services/api';
import Board from '../../components/Board';
import CreateCompany from '../../components/CreateCompany';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const userType = useSelector(state => state.user.profile.type);
  const [addProjectInput, setAddProjectInput] = useState('');
  const [projectIdSelected, setProjectIdSelected] = useState(null);

  async function getProjects() {
    const response = await api.get('/projects');

    if (response.data.length !== 0) {
      setProjectIdSelected(response.data[0].project_id);
    }

    setProjects(response.data);
  }

  useEffect(() => {
    getProjects();
  }, [userType]);

  function handleChangeProject(id) {
    setProjectIdSelected(id);
  }

  function handleAddProjectInput(e) {
    setAddProjectInput(e.target.value);
  }

  async function handleAddProjectSubmit() {
    await api.post('/projects', {
      title: addProjectInput,
      description: addProjectInput,
    });
    getProjects();
    setAddProjectInput('');
  }

  async function handleProjectDelete(id) {
    confirmAlert({
      title: 'Quer realmente exclui-lo?',
      message: 'Você não pode reverter essa alteração',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            await api.delete(`/projects/${id}`);
            getProjects();
          },
        },
        {
          label: 'Não',
        },
      ],
    });
  }
  return (
    <Container>
      <Sidebar>
        <h5>PROJETOS</h5>
        {projects.map(project => (
          <Projects onClick={() => handleChangeProject(project.project_id)}>
            <div>
              <FolderImg active={project.project_id === projectIdSelected} />
              <h5>{project.title}</h5>
            </div>
            {userType === 'company' && (
              <MdDelete
                size={17}
                color="#999999"
                onClick={() => handleProjectDelete(project.project_id)}
              />
            )}
          </Projects>
        ))}
        {userType === 'company' && (
          <>
            <AddProjects>
              <MdAdd size={20} color="#999999" />
              <input
                placeholder="Criar um novo projeto"
                onChange={handleAddProjectInput}
                value={addProjectInput}
              />
            </AddProjects>
            {addProjectInput.length > 0 && (
              <Button onClick={handleAddProjectSubmit}>Criar</Button>
            )}
          </>
        )}
      </Sidebar>
      <Content>
        {userType === 'registered' ? (
          <CreateCompany />
        ) : (
          <Board projectId={projectIdSelected} />
        )}
      </Content>
    </Container>
  );
}

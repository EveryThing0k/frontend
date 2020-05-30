import styled from 'styled-components';
import FolderComp from '../../components/Folder';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Sidebar = styled.div`
  background: #ffffff;
  width: 300px;
  height: 100%;
  box-shadow: 3px 3px 0px;
  justify-content: center;
  padding: 20px;

  h5 {
    font-size: 16px;
    color: #444444;
  }
`;

export const Projects = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;

  h5 {
    margin-left: 5px;
    font-weight: normal;
    color: #333333;
    font-size: 16px;
    cursor: pointer;
  }

  div {
    display: flex;
  }

  svg {
    cursor: pointer;
  }
`;

export const AddProjects = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  width: 100%;
  height: 30px;

  h5 {
    margin-left: 5px;
    font-weight: normal;
    color: #999999;
    font-size: 16px;
    cursor: pointer;
  }

  input {
    height: 100%;
    width: 100%;
    border: 0;
    color: #333333;
    font-size: 15px;

    ::placeholder {
      color: #999999;
    }
  }

  svg {
    margin-left: 5px;
    margin-right: 5px;
  }

  border: 1px dashed #999999;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  height: 30px;
  background: #33333333;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  overflow: auto;
`;

export const FolderImg = styled(FolderComp)``;

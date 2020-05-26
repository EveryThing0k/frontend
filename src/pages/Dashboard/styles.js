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
  margin: 15px 0;

  h5 {
    margin-left: 5px;
    font-weight: normal;
    color: #333333;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  overflow: auto;
`;

export const FolderImg = styled(FolderComp)``;

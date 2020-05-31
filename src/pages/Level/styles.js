import styled from 'styled-components';
import { Steps as StepsLib } from 'rsuite';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  h1 {
    margin-top: 30px;
    text-align: center;
    font-weight: 500;
    color: #444444;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 20px;

  align-items: center;
  justify-content: space-around;

  img {
    /* editar a imagem aqui */
    height: 450px;
  }
`;

export const CircularProgress = styled.div`
  width: 450px;
  height: 450px;
`;

export const Steps = styled(StepsLib)`
  margin: 60px;
`;

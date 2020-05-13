import styled from 'styled-components';
import InputComp from '../Input';
import ButtonComp from '../Button';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  img {
    max-width: 500px;
    max-height: 500px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 500;
    color: ${colors.primary};
    font-size: 25px;
    margin-bottom: 20px;
  }

  h2 {
    color: #444444;
    font-weight: 400;
    margin-bottom: 10px;
  }

  a {
    color: ${colors.primary};
  }

  div {
    display: flex;
    max-width: 400px;
  }
`;

export const Input = styled(InputComp).attrs({
  style: {
    margin: '10px 0',
    width: 400,
  },
})``;

export const Button = styled(ButtonComp).attrs({
  style: {
    margin: '10px 0',
    width: 400,
  },
})``;

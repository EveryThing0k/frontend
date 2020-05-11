import styled from 'styled-components';
import colors from '../../styles/colors';
import InputComp from '../../components/Input';
import ButtonComp from '../../components/Button';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding-top: 30px;
  justify-content: space-around;
  align-items: center;
  img {
    max-width: 40%;
    height: auto;
  }

  div {
    display: flex;
    max-width: 400px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: normal;
    color: ${colors.primary};
    font-size: 25px;
    margin-bottom: 20px;
  }

  a {
    color: ${colors.primary};
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
  },
})``;

import styled from 'styled-components';
import colors from '../../styles/colors';
import InputComp from '../../components/Input';
import ButtonComp from '../../components/Button';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    max-width: 40%;
    height: auto;
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
  },
})``;

export const Button = styled(ButtonComp).attrs({
  style: {
    margin: '10px 0',
  },
})``;

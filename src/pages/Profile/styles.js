import styled from 'styled-components';
import colors from '../../styles/colors';
import InputComp from '../../components/Input';
import ButtonComp from '../../components/Button';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background: ${colors.primary};

  img {
    width: 120px;
    height: 120px;
    margin-left: 150px;
    border: 1px solid #3333;
    border-radius: 60px;
  }

  div {
    margin-left: 20px;
  }

  h3 {
    font-weight: 500;
    color: #fff;
  }

  h4 {
    font-weight: 500;
    color: #ffffff;
  }
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;

  img {
    width: 500px;
  }

  div {
    margin: 10px 0;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 500;
    font-size: 21px;
    color: #444444;
  }

  h4 {
    font-size: 16px;
    font-weight: normal;
    margin-left: 20px;
  }
`;

export const Input = styled(InputComp).attrs({
  style: {
    margin: '10px 10px',
    width: 400,
  },
})``;

export const Button = styled(ButtonComp).attrs({
  style: {
    marginTop: 20,
    width: 400,
  },
})``;

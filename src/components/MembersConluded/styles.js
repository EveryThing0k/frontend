import styled from 'styled-components';
import ButtonComp from '../Button';

export const Input = styled.input`
  border: 1px solid #eeeeee;
  width: 100%;
  height: 30px;
  max-height: 30px;
  border-radius: 5px;
`;

export const Button = styled(ButtonComp).attrs({
  style: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 0,
  },
})``;

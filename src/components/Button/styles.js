import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => (props.color ? props.color : colors.primary)};
  height: 50px;
  width: 300px;
  padding: 8px;
  border: 0;
  border-radius: 20px;
  transition: background 0.2s;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;

  &:hover {
    background: ${props =>
      props.color ? darken(0.03, props.color) : darken(0.03, colors.primary)};
  }

  div {
    color: ${props => (props.colortext ? props.colortext : '#fff')};
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const Icon = styled.div`
  margin-right: 4px;
`;

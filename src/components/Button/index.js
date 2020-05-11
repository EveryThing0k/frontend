import React from 'react';

import { Container, Icon } from './styles';

export default function Button({
  style,
  styletext,
  color,
  colortext,
  icon,
  children,
  onClick,
  loading,
}) {
  return (
    <Container style={style} color={color} onClick={onClick}>
      <Icon>{icon}</Icon>
      <div style={styletext} colortext={colortext}>
        {loading ? 'Carregando...' : children}
      </div>
    </Container>
  );
}

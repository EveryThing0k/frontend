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
}) {
  return (
    <Container style={style} color={color} onClick={onClick}>
      <Icon>{icon}</Icon>
      <div style={styletext} colortext={colortext}>
        {children}
      </div>
    </Container>
  );
}

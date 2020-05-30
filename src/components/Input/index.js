import React from 'react';
import { MdMailOutline } from 'react-icons/md';

import { Container } from './styles';

export default function Input({
  style,
  icon = <MdMailOutline size={20} color="#404040" />,
  ...rest
}) {
  return (
    <Container style={style}>
      {icon}
      <input {...rest} />
    </Container>
  );
}

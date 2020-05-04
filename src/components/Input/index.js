import React from 'react';
import { MdMailOutline } from 'react-icons/md';

import { Container } from './styles';

export default function Input({
  style,
  icon = <MdMailOutline size={20} color="#404040" />,
  placeholder = 'Digite...',
  onChangeValue,
  value,
  type,
}) {
  return (
    <Container style={style}>
      {icon}
      <input
        placeholder={placeholder}
        value={value}
        onChange={e => onChangeValue(e.target.value)}
        type={type}
      />
    </Container>
  );
}

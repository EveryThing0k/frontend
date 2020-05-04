import React from 'react';
import PropTypes from 'prop-types';

import wave from '../../../assets/wave.svg';

import { Wrapper, Wave } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      {children}
      <Wave src={wave} alt="wave" />
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

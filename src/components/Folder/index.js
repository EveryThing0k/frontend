import React from 'react';
import { MdFolder } from 'react-icons/md';
import colors from '../../styles/colors';

export default function index({ active }) {
  return <MdFolder size={25} color={active ? colors.primary : '#555555'} />;
}

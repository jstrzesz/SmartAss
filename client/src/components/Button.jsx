import React from 'react';
import '../styles/Button.css';

const Button = ({ btnClass, handleClick, text }) => (
  <button type="submit" onClick={() => handleClick()} className={btnClass}>{text}</button>
);

export default Button;


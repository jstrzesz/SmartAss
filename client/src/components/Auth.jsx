import React from 'react';
import Button from './Button.jsx';

const Auth = () => {
  const initAuth = () => {
    console.log('clicked');
  }
  return (
    <Button handleClick={initAuth} btnClass="login" text="Sign-In with Google" />
  )
};

export default Auth;

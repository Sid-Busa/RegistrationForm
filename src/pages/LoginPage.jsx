import React from 'react';
import LoginForm from '../content/LoginForm';

const LoginPage = () => {
  const handleLogin = (values) => {
    console.log('Login :', values);
  };

  return (
    <LoginForm onSubmit={handleLogin} />
  );
};

export default LoginPage;

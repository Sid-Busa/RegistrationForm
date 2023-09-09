import React from 'react';
import RegistrationForm from '../content/RegistrationForm';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const navigate = useNavigate()
  const handleRegistration = (values) => {
    navigate('/login')
  };

  return (
    <RegistrationForm onSubmit={handleRegistration} />
  );
};

export default RegistrationPage;

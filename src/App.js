import './App.css';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import {  Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <RegistrationPage />} />
      <Route path="/login" element={ <LoginPage />} />
    </Routes>
    
  );
}

export default App;

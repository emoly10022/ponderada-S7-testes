import React from 'react';
import LoginForm from '../login/LoginForm';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../api/services/post-login';

const LoginPage: React.FC = () => {
  // const userType = localStorage.getItem('userType');
  const history = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      const credentials = { email, password };
      const user = await postLogin(credentials);

      if (user) {
        console.log('Usuário válido. Redirecionando...');
        localStorage.setItem('userType',user.userType);
        if (user.userType === 'partner') {
          history('/home-partner');
        } else {
          history('/home');
        }
      } else {
        console.log('Usuário com email inválido.');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;

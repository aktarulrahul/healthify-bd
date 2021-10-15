import React from 'react';
import Form from '../../components/Form/Form';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const { signInUsingGoogle, signInUsingGithub } = useAuth();
  return (
    <div className="login-bg py-12">
      <Form
        type="login"
        signInUsingGoogle={signInUsingGoogle}
        signInUsingGithub={signInUsingGithub}
      />
    </div>
  );
};

export default Login;

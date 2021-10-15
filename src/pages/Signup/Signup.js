import React from 'react';
import Form from '../../components/Form/Form';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
  const { signInUsingGoogle, signInUsingGithub } = useAuth();
  return (
    <div className="login-bg py-4">
      <Form
        type="signup"
        signInUsingGoogle={signInUsingGoogle}
        signInUsingGithub={signInUsingGithub}
      />
    </div>
  );
};

export default Signup;

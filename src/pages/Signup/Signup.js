import React from 'react';
import { useHistory, useLocation } from 'react-router';
import Form from '../../components/Form/Form';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
  const { signInUsingGoogle, signInUsingGithub, setIsLoading, setUser } =
    useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };
  const handleGithubLogin = () => {
    signInUsingGithub()
      .then((result) => {
        history.push(redirect_uri);
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="login-bg lg:py-4 md:py-1">
      <Form
        type="signup"
        signInUsingGoogle={handleGoogleLogin}
        signInUsingGithub={handleGithubLogin}
      />
    </div>
  );
};

export default Signup;

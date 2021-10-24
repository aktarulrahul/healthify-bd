import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Form from '../../components/Form/Form';
import useAuth from '../../hooks/useAuth';

const SignInUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [haveAccount, setHaveAccount] = useState(false);
  const {
    signInUsingGoogle,
    signInUsingGithub,
    setIsLoading,
    setUser,
    signUpUsingEmailPassowrd,
    signInUsingEmailPassowrd,
    verifyEmail,
    error,
    setError,
    restPassword,
    updateName,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';
  // console.log(redirect_uri);
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        setUser(result.user);
        setError('');
      })
      .finally(() => setIsLoading(false));
  };
  const handleGithubLogin = () => {
    signInUsingGithub()
      .then((result) => {
        history.push(redirect_uri);
        setUser(result.user);
        setError('');
      })
      .finally(() => setIsLoading(false));
  };

  const toggleLogin = (e) => {
    setHaveAccount(e.target.checked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }

    haveAccount
      ? signInUsingEmailPassowrd(email, password)
          .then((result) => {
            history.push(redirect_uri);
            setUser(result.user);
            setError('');
            setIsLoading('false');
          })
          .catch((error) => {
            setError(error.message);
          })
      : signUpUsingEmailPassowrd(email, password)
          .then((result) => {
            history.push(redirect_uri);
            setIsLoading(true);
            setUser(result.user);
            setError('');
            verifyEmail();
          })
          .then((res) => {
            updateName(name);
          })
          .catch((error) => {
            setError(error.message);
          });
  };

  const handleRestPassword = () => {
    restPassword(email);
    setError('Email Sent to', email);
  };

  return (
    <div className="login-bg lg:py-4 md:py-1">
      <Form
        type={haveAccount ? 'signin' : 'signup'}
        signInUsingGoogle={handleGoogleLogin}
        signInUsingGithub={handleGithubLogin}
        handleSubmission={handleSubmission}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleNameChange={handleNameChange}
        toggleLogin={toggleLogin}
        error={error}
        handleRestPassword={handleRestPassword}
      />
    </div>
  );
};

export default SignInUp;

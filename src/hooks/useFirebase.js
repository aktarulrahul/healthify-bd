import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import firebaseInitialize from '../firebase/initialize.firebase';

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, ssetIsLoading] = useState(false);
  const auth = getAuth();
  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) =>
      setUser(result.user)
    );
  };

  const signInUsingGithub = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider).then((result) =>
      setUser(result.user)
    );
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    signOut(auth).then(setUser({}));
  };

  return { user, isLoading, signInUsingGoogle, logOut, signInUsingGithub };
};

export default useFirebase;

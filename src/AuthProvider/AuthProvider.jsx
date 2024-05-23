import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import useAxiosPublice from '../Compment/Hooks/useAxiosPubice/useAxiosPublice';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const providerGoogle = new GoogleAuthProvider();
  const axiosPubice = useAxiosPublice();

  const handileCreateAccount = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handileUpdateProfile = (fullName, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photo,
    });
  };

  const handileClickGoogle = () => {
    setLoding(true);
    return signInWithPopup(auth, providerGoogle);
  };
  const handileClickSingin = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handileLogouts = () => {
    setLoding(true);
    setUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setLoding(false);
        setUser(currentUser);
        const userInfo = { email: currentUser?.email };
        axiosPubice.post(`/jwt`, userInfo).then(res => {
          console.log(res.data);

          if (res?.data?.token) {
            localStorage.setItem('token', userInfo);
          }
        });
      } else {
        setLoding(false);

        localStorage.removeItem('token');
      }
    });

    return () => unsubscribe;
  }, []);

  const info = {
    handileCreateAccount,
    handileClickSingin,
    handileLogouts,
    user,
    loding,
    handileUpdateProfile,
    handileClickGoogle,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

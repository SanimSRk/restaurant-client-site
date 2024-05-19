import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivtedRoute = ({ children }) => {
  const location = useLocation();
  const { user, loding } = useContext(AuthContext);
  if (loding) {
    return 'vahi loding hoytasi........';
  }
  if (!user) {
    return <Navigate to={'/login'} state={location?.pathname}></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivtedRoute;

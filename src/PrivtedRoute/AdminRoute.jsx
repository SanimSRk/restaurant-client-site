import { useContext } from 'react';
import useAdmin from '../Compment/Hooks/useAdmin/useAdmin';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const [isAdmin, isPending] = useAdmin();
  const { user, loding } = useContext(AuthContext);
  const location = useLocation();

  if (loding || isPending) {
    return 'vahi loding hoytesi .......';
  }

  if (!user && isAdmin) {
    return <Navigate to={'/'} state={location.pathname} replace></Navigate>;
  }
  return <div>{children} </div>;
};

export default AdminRoute;

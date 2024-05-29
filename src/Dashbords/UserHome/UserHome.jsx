import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-3xl font-semibold">
        {' '}
        <span>Hi,welcome</span> {user.displayName ? user.displayName : ' back'}
      </h2>
    </div>
  );
};

export default UserHome;

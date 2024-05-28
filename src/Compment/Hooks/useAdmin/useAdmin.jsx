import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isPending } = useQuery({
    queryKey: [user?.email, 'userAdmin'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/admin/${user?.email}`);

      return data?.admin;
    },
  });
  return [isAdmin, isPending];
};

export default useAdmin;

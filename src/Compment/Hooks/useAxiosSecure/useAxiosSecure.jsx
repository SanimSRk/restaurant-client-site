import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

export const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { handileLogouts } = useContext(AuthContext);

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('token');
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const status = error.response.status;
      console.log(status);
      if (status === 401 || status === 403) {
        handileLogouts()
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;

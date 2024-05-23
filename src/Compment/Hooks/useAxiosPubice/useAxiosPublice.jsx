import axios from 'axios';

const axiosPubice = axios.create({
  baseURL: 'http://localhost:5000',
});

const useAxiosPublice = () => {
  return axiosPubice;
};

export default useAxiosPublice;

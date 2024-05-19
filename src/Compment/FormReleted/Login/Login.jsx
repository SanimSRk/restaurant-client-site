import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from 'react-simple-captcha';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const [captchas, setCaptchas] = useState(null);
  const { handileClickSingin } = useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { email, password, captcha } = data;
    console.log(email, password, captcha);

    if (validateCaptcha(captcha) !== true) {
      setCaptchas('Captcha Does Not Match');
      return;
    } else {
      setCaptchas('');
    }

    handileClickSingin(email, password)
      .then(res => {
        console.log(res.user);
        if (res.user) {
          Swal.fire({
            title: 'Good job!',
            text: 'successfully login!',
            icon: 'success',
          });
        }
        navigate(location?.state || '/');
        setError(null);
      })
      .catch(error => {
        console.log(error);
        setError(' Your email and password invalid. Please try again');
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-[url(/authentication.png)]">
        <div className=" w-full md:flex items-center lg:flex justify-center gap-12">
          <div className=" lg:w-1/3 md:w-1/2">
            <img src="/authentication1.png" alt="" />
          </div>
          <div className="card shrink-0 md:w-2/3 lg:w-[40%] ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className="text-4xl font-bold text-center">Login Now</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered  border-[#D1A054B3]"
                  required
                  {...register('email', { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered border-[#D1A054B3]"
                  required
                  {...register('password', { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  placeholder="type the text above"
                  className="input input-bordered border-[#D1A054B3]"
                  required
                  {...register('captcha', { required: true })}
                />
                <p className="text-center  font-semibold text-red-500">
                  {captchas}
                </p>
              </div>
              <p className="text-center text-red-500">{error}</p>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054B3] text-white"
                  type="submit"
                  value="Login"
                />
              </div>

              <p className="text-xl font-bold text-[#D1A054] text-center">
                New here ?{' '}
                <Link to={'/singUp'}>
                  <span>Create a New Account</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

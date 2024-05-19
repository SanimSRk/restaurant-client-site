import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SingUp = () => {
  const { handileCreateAccount, handileLogouts, handileUpdateProfile } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { email, password, fullName, photo } = data;
    console.log(email, password, fullName, photo);
    handileCreateAccount(email, password)
      .then(res => {
        console.log(res.user);
        if (res.user) {
          handileLogouts();
          Swal.fire({
            title: 'Good job!',
            text: 'successfully account create!',
            icon: 'success',
          });
          handileUpdateProfile(fullName, photo).then(res => {
            console.log(res.user);
          });
        }
        navigate(location?.state || '/login');
      })
      .catch(error => {
        console.log(error);
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
              <h2 className="text-4xl font-bold text-center">Sing Up</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered  border-[#D1A054B3]"
                  required
                  {...register('fullName', { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered border-[#D1A054B3]"
                  required
                  {...register('email', { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered border-[#D1A054B3]"
                  required
                  {...register('photo', { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="Password"
                  placeholder="password"
                  className="input input-bordered border-[#D1A054B3]"
                  required
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[a-z]).*$/,
                  })}
                />{' '}
                {errors.password?.type === 'minLength' && (
                  <span className="text-red-500">
                    password must be 6 characters
                  </span>
                )}
                {errors.password?.type === 'pattern' && (
                  <span className="text-red-500">
                    password must be At least one upper case and one lower case
                    letter
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054B3] text-white"
                  type="submit"
                  value="Sing up"
                />
              </div>
              <p className="text-[#D1A054B3] text-xl mt-3 font-semibold text-center">
                Already registered ?{' '}
                <Link to={'/login'}>
                  <span> Go to log in</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;

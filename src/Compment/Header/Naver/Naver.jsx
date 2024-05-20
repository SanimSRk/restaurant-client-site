import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaCartPlus } from 'react-icons/fa';
import useCarts from '../../Hooks/useCart/useCarts';

const Naver = () => {
  const { user, handileLogouts } = useContext(AuthContext);
  const [cart] = useCarts();

  const navLinks = (
    <>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#EEFF25] text-xl font-extrabold'
            : 'font-extrabold px-4  py-2 text-xl lg:text-white'
        }
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#EEFF25] text-xl font-extrabold'
            : 'font-extrabold px-4  py-2 text-xl lg:text-white'
        }
      >
        CONTACT US
      </NavLink>
      <NavLink
        to={'dashborad'}
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#EEFF25] text-xl font-extrabold'
            : 'font-extrabold px-4  py-2 text-xl lg:text-white'
        }
      >
        DASHBOARD
      </NavLink>
      <NavLink
        to={'/menu'}
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#EEFF25] text-xl font-extrabold'
            : 'font-extrabold px-4  py-2 text-xl lg:text-white'
        }
      >
        Our Menu
      </NavLink>
      <NavLink
        to={'/order/salad'}
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#EEFF25] text-xl font-extrabold'
            : 'font-extrabold px-4  py-2 text-xl lg:text-white'
        }
      >
        Our Shop
      </NavLink>
      <Link to={'/dashborad/myCarts'}>
        <button className="flex">
          <FaCartPlus className="text-4xl" />
          <div className="badge badge-secondary">{cart.length}+</div>
        </button>
      </Link>
    </>
  );

  const handileClikLogout = () => {
    handileLogouts()
      .then(res => {
        console.log(res.user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar  fixed z-10 max-w-screen-xl bg-opacity-30 lg:text-white bg-[#15151599]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className=" text-2xl font-bold gap-0">
            Taste<span className="text-[#CD9003]">Mingle</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <p
              onClick={handileClikLogout}
              className="cursor-pointer text-xl font-semibold"
            >
              SIGN OUT
            </p>
          ) : (
            <Link to={'/login'}>
              <a className="btn">Login</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Naver;

import { NavLink } from 'react-router-dom';

const Naver = () => {
  const navLinks = (
    <>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#BB8506] font-semibold'
            : 'font-semibold px-4  py-2 rounded-lg bg-base-100'
        }
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#BB8506]  font-semibold'
            : 'font-semibold px-4  py-2 rounded-lg bg-base-100'
        }
      >
        CONTACT US
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#BB8506] font-semibold'
            : 'font-semibold px-4  py-2 rounded-lg bg-base-100'
        }
      >
        DASHBOARD
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#BB8506] font-semibold'
            : 'font-semibold px-4  py-2 rounded-lg bg-base-100'
        }
      >
        Our Menu
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'px-4  py-2  text-[#BB8506] font-semibold'
            : 'font-semibold px-4  py-2 rounded-lg bg-base-100'
        }
      >
        Our Shop
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar  fixed z-10 max-w-screen-xl bg-opacity-30 text-white bg-black">
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
          <a className=" text-2xl font-bold">TasteMingle</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Naver;

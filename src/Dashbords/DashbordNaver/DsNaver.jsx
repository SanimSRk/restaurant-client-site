import { BiCart, BiMenu } from 'react-icons/bi';
import {
  FaCalculator,
  FaCocktail,
  FaHome,
  FaRegAddressBook,
  FaShopify,
  FaUsers,
} from 'react-icons/fa';
import { LuBookmarkPlus } from 'react-icons/lu';
import {
  MdMessage,
  MdOutlineAddRoad,
  MdPayment,
  MdReviews,
} from 'react-icons/md';
import { TfiMenuAlt } from 'react-icons/tfi';
import { NavLink } from 'react-router-dom';

const DsNaver = () => {
  const isAdmin = true;
  return (
    <div className="uppercase font-medium w-[280px] h-full  min-h-[100vh] p-5 bg-[#D1A054]">
      <ul className="gap-6 grid">
        {isAdmin ? (
          <>
            <li className="flex gap-2 items-center">
              <FaHome className="text-2xl"></FaHome>
              <NavLink>Admin Home</NavLink>
            </li>
            <li className="flex gap-2 items-center">
              {' '}
              <MdOutlineAddRoad className="text-2xl" />
              <NavLink>add items</NavLink>
            </li>
            <li className="flex gap-2 items-center">
              {' '}
              <TfiMenuAlt className="text-2xl" />
              <NavLink>manage items</NavLink>
            </li>
            <li className="flex gap-2 items-center">
              {' '}
              <FaRegAddressBook className="text-2xl" />
              <NavLink>Manage bookings</NavLink>
            </li>
            <li className="flex gap-2 items-center">
              {' '}
              <FaUsers className="text-2xl" />
              <NavLink to={'allUsers'}>all users</NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="flex gap-2 items-center">
              {' '}
              <FaHome className="text-2xl"></FaHome>
              <NavLink>User Home</NavLink>
            </li>
            <li className="flex gap-2 items-center">
              <FaCalculator className="text-2xl"></FaCalculator>
              <NavLink>reservation</NavLink>
            </li>
            <li className="flex gap-2 items-center">
              <MdPayment className="text-2xl"></MdPayment>
              <NavLink>payment history</NavLink>
            </li>
            <li className="flex gap-2 items-center">
              <BiCart className="text-2xl"></BiCart>
              <NavLink to={'myCarts'}>my cart</NavLink>
            </li>
            <li className="flex gap-2 items-center">
              <MdReviews className="text-2xl"></MdReviews>
              <NavLink>add review</NavLink>
            </li>
            <li className="flex gap-2 items-center">
              <LuBookmarkPlus className="text-2xl" />
              <NavLink>my booking</NavLink>
            </li>
          </>
        )}

        {/* this is commn section all user and admin  */}
        <div className="border-b-2 pb-6 "></div>

        <li className="flex gap-2 items-center">
          <FaHome className="text-2xl"></FaHome>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className="flex gap-2 items-center">
          <BiMenu className="text-2xl"></BiMenu>
          <NavLink>Menu</NavLink>
        </li>
        <li className="flex gap-2 items-center">
          <FaShopify className="text-2xl" />
          <NavLink>Shop</NavLink>
        </li>
        <li className="flex gap-2 items-center">
          <MdMessage className="text-2xl" />
          <NavLink>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DsNaver;
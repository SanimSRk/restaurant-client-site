import { BiCart, BiMenu } from 'react-icons/bi';
import { FaCalculator, FaCocktail, FaHome, FaShopify } from 'react-icons/fa';
import { LuBookmarkPlus } from 'react-icons/lu';
import { MdMessage, MdPayment, MdReviews } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const DsNaver = () => {
  return (
    <div className="uppercase font-medium w-[280px] h-full min-h-[100vh] p-5 bg-[#D1A054]">
      <ul className="gap-6 grid">
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

import { useEffect, useState } from 'react';
import SectionTitle from '../../../Compment/SectionTitle/SectionTitle';
import MenuCart from './MenuCart';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => setMenu(data.slice(0, 6)));
  }, []);
  return (
    <div className="my-[120px]">
      <div className="mb-12">
        <SectionTitle
          sebHeading={'---Check it out---'}
          heading={'FROM OUR MENU'}
        ></SectionTitle>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
        {menu.map((men, index) => (
          <MenuCart key={index} men={men}></MenuCart>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="btn bg-[#BB8506] text-white">View Full Menu</button>
      </div>
    </div>
  );
};

export default Menu;

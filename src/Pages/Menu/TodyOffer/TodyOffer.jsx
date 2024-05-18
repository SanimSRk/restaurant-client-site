import { Link } from 'react-router-dom';
import useMenu from '../../../Compment/Hooks/useMenu';
import SectionTitle from '../../../Compment/SectionTitle/SectionTitle';
import MenuCategoryCart from '../MenuCategory/MenuCategoryCart';

const TodyOffer = () => {
  const [menus] = useMenu();
  const offers = menus.filter(off => off?.category === 'offered');
  return (
    <div className="my-[120px]">
      <SectionTitle
        heading={'TODAYS OFFER'}
        sebHeading={'---Dont miss---'}
      ></SectionTitle>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12">
        {offers.map((men, index) => (
          <MenuCategoryCart key={index} men={men}></MenuCategoryCart>
        ))}
      </div>

      <div className="justify-center grid">
        <Link to={'/order'}>
          <button className="mt-8 btn border-b-[#BB8506]  text-xl text-[#BB8506] border-b-2">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TodyOffer;

import { Link } from 'react-router-dom';
import MainMenuCart from './MainMenuCart';
import CoverSection from '../CoverSection/CoverSection';

const MainMenuCategory = ({ items, img, title, desoptions }) => {
  return (
    <div>
      <CoverSection
        img={img}
        titles={title}
        descoption={desoptions}
      ></CoverSection>

      <div className="grid mt-[100px] lg:grid-cols-2 grid-cols-1 gap-6">
        {items.map((main, index) => (
          <MainMenuCart key={index} main={main}></MainMenuCart>
        ))}
      </div>
      <div className="justify-center grid">
        <Link to={`/order/${title}`}>
          <button className="mt-8 btn border-b-[#BB8506]  text-xl text-[#BB8506] border-b-2">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainMenuCategory;

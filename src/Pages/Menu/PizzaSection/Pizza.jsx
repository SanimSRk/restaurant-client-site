import CoverSection from '../../../Compment/CoverSection/CoverSection';
import useMenu from '../../../Compment/Hooks/useMenu';
import MainMenuCategory from '../../../Compment/MainMenuCategory/MainMenuCategory';

import pizzaImg from '..//..//..//assets/menu/pizza-bg.jpg';
const Pizza = () => {
  const [menus] = useMenu();
  const pizza = menus.filter(me => me?.category === 'pizza');
  return (
    <div className="my-[120px]">
      <div>
        <MainMenuCategory
          img={pizzaImg}
          items={pizza}
          title={'pizza'}
          descoptions={
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
        ></MainMenuCategory>
      </div>
    </div>
  );
};

export default Pizza;

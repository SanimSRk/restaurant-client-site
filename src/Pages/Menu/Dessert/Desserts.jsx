import useMenu from '../../../Compment/Hooks/useMenu';
import MainMenuCategory from '../../../Compment/MainMenuCategory/MainMenuCategory';
import dessertImg from '..//..//..//assets/menu/dessert-bg.jpeg';

const Desserts = () => {
  const [menus] = useMenu();
  const desserts = menus.filter(dess => dess.category === 'dessert');
  return (
    <div className="">
      <MainMenuCategory
        items={desserts}
        img={dessertImg}
        title={'dessert'}
      ></MainMenuCategory>
    </div>
  );
};

export default Desserts;

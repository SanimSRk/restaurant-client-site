import useMenu from '../../../Compment/Hooks/useMenu';
import MainMenuCategory from '../../../Compment/MainMenuCategory/MainMenuCategory';
import soupImg from '..//..//..//assets/menu/soup-bg.jpg';
const Soups = () => {
  const [menus] = useMenu();
  const soups = menus.filter(sop => sop?.category === 'soup');
  return (
    <div className="my-[120px]">
      <div>
        <MainMenuCategory
          img={soupImg}
          items={soups}
          title={'soup'}
          desoptions={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'"
          }
        ></MainMenuCategory>
      </div>
    </div>
  );
};

export default Soups;

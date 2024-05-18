import CoverSection from '../../../Compment/CoverSection/CoverSection';
import useMenu from '../../../Compment/Hooks/useMenu';
import MainMenuCategory from '../../../Compment/MainMenuCategory/MainMenuCategory';
import salatImg from '..//..//..//assets/menu/salad-bg.jpg';
const Salat = () => {
  const [memus] = useMenu();
  const salat = memus.filter(mus => mus?.category === 'salad');
  return (
    <div>
      <div>
        <MainMenuCategory
          items={salat}
          img={salatImg}
          title={'salad'}
          desoptions={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'"
          }
        ></MainMenuCategory>
      </div>
    </div>
  );
};

export default Salat;

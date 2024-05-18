import { Helmet } from 'react-helmet-async';
import CoverSection from '../../../Compment/CoverSection/CoverSection';
import imagecv1 from '..//..//..//assets/menu/banner3.jpg';
import TodyOffer from '../TodyOffer/TodyOffer';
import Desserts from '../Dessert/Desserts';
import Pizza from '../PizzaSection/Pizza';
import Salat from '../Salat/Salat';
import Soups from '../Soups/Soups';
const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>TasteMingle-Menu </title>
      </Helmet>
      <CoverSection
        img={imagecv1}
        titles={' OUR MENU'}
        descoption={'Would you like to try a dish?'}
      ></CoverSection>
      <TodyOffer></TodyOffer>
      <Desserts></Desserts>
      <Pizza></Pizza>
      <Salat></Salat>
      <Soups></Soups>
    </div>
  );
};

export default OurMenu;

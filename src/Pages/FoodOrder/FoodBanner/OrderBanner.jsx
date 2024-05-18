import CoverSection from '../../../Compment/CoverSection/CoverSection';
import banners from '../..//../assets/shop/banner2.jpg';
const OrderBanner = () => {
  return (
    <div>
      <CoverSection
        img={banners}
        titles={'OUR SHOP'}
        descoption={'Would you like to try a dish?'}
      ></CoverSection>
    </div>
  );
};

export default OrderBanner;

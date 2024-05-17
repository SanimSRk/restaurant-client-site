import Banner from '../../../Compment/Header/Banner/Banner';
import Categroy from '../Categroy/Categroy';
import ChefRecomend from '../ChefRecomend/ChefRecomend';
import ContactNember from '../ContactNumber/ContactNember';
import Featured from '../Featured/Featured';
import HomeBanner from '../HomeBanner/HomeBanner';
import Menu from '../Menu/Menu';
import Testmonil from '../Testimonil/Testmonil';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categroy></Categroy>
      <HomeBanner></HomeBanner>
      <Menu></Menu>
      <ContactNember></ContactNember>
      <ChefRecomend></ChefRecomend>
      <Featured></Featured>
      <Testmonil></Testmonil>
    </div>
  );
};

export default Home;

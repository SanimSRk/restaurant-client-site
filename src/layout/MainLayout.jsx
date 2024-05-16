import { Outlet } from 'react-router-dom';
import Footer from '../Compment/Footer/Footer';
import Naver from '../Compment/Header/Naver/Naver';

const MainLayout = () => {
  return (
    <div>
      <Naver></Naver>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

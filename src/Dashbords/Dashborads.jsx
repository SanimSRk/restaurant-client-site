import { Outlet } from 'react-router-dom';
import DsNaver from './DashbordNaver/DsNaver';

const Dashborads = () => {
  return (
    <div className="flex gap-8 w-full h-full">
      <DsNaver></DsNaver>

      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashborads;

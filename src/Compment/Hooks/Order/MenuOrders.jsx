import MenuOrderCart from './MenuOrderCart';

const MenuOrders = ({ orderItmes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {orderItmes.map((order, index) => (
        <MenuOrderCart key={index} order={order}></MenuOrderCart>
      ))}
    </div>
  );
};

export default MenuOrders;

import MenuOrders from '../../../Compment/Hooks/Order/MenuOrders';
import useMenu from '../../../Compment/Hooks/useMenu';

const MenuPizza = () => {
  const [menus] = useMenu();
  const pizza = menus.filter(piz => piz?.category === 'pizza');
  return (
    <div>
      <MenuOrders orderItmes={pizza}></MenuOrders>
    </div>
  );
};

export default MenuPizza;

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import MenuPizza from './MenuPizza';
import useMenu from '../../../Compment/Hooks/useMenu';
import MenuOrders from '../../../Compment/Hooks/Order/MenuOrders';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const OrdersList = () => {
  const [menus] = useMenu();
  const categorys = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];

  const { category } = useParams();
  const initialIndex = categorys.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [colors, setColors] = useState(false);
  const salad = menus?.filter(sel => sel.category === 'salad');
  const soups = menus?.filter(sel => sel.category === 'soup');
  const desserts = menus?.filter(sel => sel.category === 'dessert');
  const drinks = menus?.filter(sel => sel.category === 'drinks');
  const handileClikColor = color => {
    setColors(color);
  };

  return (
    <div className="my-[120px]">
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList
          className={
            'flex gap-12 text-2xl font-medium uppercase justify-center mb-12 p-2 cursor-pointer'
          }
        >
          <Tab
            onClick={() => handileClikColor('solad')}
            className={colors === 'solad' ? 'text-[#BB8506]' : 'text-black'}
          >
            Salad
          </Tab>
          <Tab
            onClick={() => handileClikColor('pizza')}
            className={colors === 'pizza' ? 'text-[#BB8506]' : 'text-black'}
          >
            pizza
          </Tab>
          <Tab
            onClick={() => handileClikColor('soup')}
            className={colors === 'soup' ? 'text-[#BB8506]' : 'text-black'}
          >
            soups
          </Tab>
          <Tab
            onClick={() => handileClikColor('dessert')}
            className={colors === 'dessert' ? 'text-[#BB8506]' : 'text-black'}
          >
            desserts
          </Tab>
          <Tab
            onClick={() => handileClikColor('drink')}
            className={colors === 'drink' ? 'text-[#BB8506]' : 'text-black'}
          >
            drinks
          </Tab>
        </TabList>

        <TabPanel>
          <MenuOrders orderItmes={salad}></MenuOrders>
        </TabPanel>
        <TabPanel>
          <MenuPizza></MenuPizza>
        </TabPanel>
        <TabPanel>
          <MenuOrders orderItmes={soups}></MenuOrders>
        </TabPanel>
        <TabPanel>
          <MenuOrders orderItmes={desserts}></MenuOrders>
        </TabPanel>
        <TabPanel>
          <MenuOrders orderItmes={drinks}></MenuOrders>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrdersList;

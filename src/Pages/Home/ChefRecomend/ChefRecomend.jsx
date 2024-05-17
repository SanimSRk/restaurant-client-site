import { useEffect, useState } from 'react';
import SectionTitle from '../../../Compment/SectionTitle/SectionTitle';
import ChefCart from './ChefCart';

const ChefRecomend = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => setFoods(data.slice(10, 16)));
  }, []);
  return (
    <div className="my-[120px]">
      <div>
        <SectionTitle
          heading={'CHEF RECOMMENDS'}
          sebHeading={'---Should Try---'}
        ></SectionTitle>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((chef, index) => (
          <ChefCart key={index} chef={chef}></ChefCart>
        ))}
      </div>
    </div>
  );
};

export default ChefRecomend;

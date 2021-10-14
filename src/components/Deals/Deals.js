import React from 'react';
import useMeals from '../../hooks/useMeals';
import deals from '../../images/Image/chef-cook-food-33614.png';
import ProductCard from '../ProductCard/ProductCard';

const Deals = () => {
  const [meals] = useMeals();
  const mealDeal = meals.filter((meal) => meal.deals === true);
  return (
    <div className="my-4 mx-8">
      <div className="grid grid-cols-3 gap-4">
        <div className="relative">
          <img src={deals} alt="" className="opacity-50 h-full" />
          <h2 className="text-8xl font-medium absolute top-28 left-2 text-green-500">
            Deals
            <br />
            of the <br />
            Day
          </h2>
        </div>
        {mealDeal.map((meal) => (
          <ProductCard key={meal.key} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Deals;

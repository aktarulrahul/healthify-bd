import React from 'react';
import useMeals from '../../hooks/useMeals';
import deals from '../../images/Image/deals.jpg';
import ProductCard from '../ProductCard/ProductCard';

const Deals = () => {
  const [meals] = useMeals();
  const mealDeal = meals.filter((meal) => meal.deals === true);
  return (
    <div className="my-4 mx-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="relative overflow-hidden ">
          <img
            src={deals}
            alt=""
            className="opacity-75 h-full rounded transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-110"
          />
          <h2 className="text-8xl font-medium absolute top-10 left-2 text-gray-800">
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

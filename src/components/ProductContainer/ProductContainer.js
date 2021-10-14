import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import useMeals from '../../hooks/useMeals';

const ProductContainer = () => {
  const [meals] = useMeals();
  const breakfastMeal = meals.filter((meal) => meal.category === 'breakfast');
  const lunchMeal = meals.filter((meal) => meal.category === 'lunch');
  const dinnerMeal = meals.filter((meal) => meal.category === 'dinner');
  const [displayMeals, setDisplayMeals] = useState(breakfastMeal);
  const handleDisplayMeals = (category) => {
    if (category === 'dinner') {
      setDisplayMeals(dinnerMeal);
    } else if (category === 'lunch') {
      setDisplayMeals(lunchMeal);
    } else {
      setDisplayMeals(breakfastMeal);
    }
  };
  return (
    <div className="mx-12 my-8">
      <div className="mx-auto w-2/4 flex justify-around mb-8 border boder-greay-400 p-4 rounded">
        <button onClick={() => handleDisplayMeals('breakfast')}>
          Breakfast
        </button>
        <button onClick={() => handleDisplayMeals('lunch')}>Lunch</button>
        <button onClick={() => handleDisplayMeals('dinner')}>Dinner</button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {displayMeals.map((meal) => (
          <ProductCard key={meal.key} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;

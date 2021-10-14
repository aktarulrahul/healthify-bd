import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import useMeals from '../../hooks/useMeals';

const ProductContainer = () => {
  const [meals] = useMeals();
  const [displayMeals, setDisplayMeals] = useState([]);
  const breakfastMeal = meals.filter((meal) => meal.category === 'breakfast');
  const lunchMeal = meals.filter((meal) => meal.category === 'lunch');
  const dinnerMeal = meals.filter((meal) => meal.category === 'dinner');
  const handleDisplayMeals = (category = 'breakfast') => {
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
      <div className="mx-auto w-2/4 flex justify-around my-4">
        <button onClick={() => handleDisplayMeals('breakfast')}>
          Breakfast
        </button>
        <button onClick={() => handleDisplayMeals('lunch')}>Lunch</button>
        <button onClick={() => handleDisplayMeals('dinner')}>Dinner</button>
      </div>
      <div class="grid grid-cols-3 gap-4">
        {displayMeals.map((meal) => (
          <ProductCard key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;

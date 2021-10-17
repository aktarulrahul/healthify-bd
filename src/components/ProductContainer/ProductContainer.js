import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import useMeals from '../../hooks/useMeals';
import useCart from '../../hooks/useCart';

const ProductContainer = () => {
  const [meals] = useMeals();
  const [cartItems, setCartItems] = useCart();

  // console.log(meals);
  const breakfastMeal = meals.filter((meal) => meal.category === 'breakfast');
  const lunchMeal = meals.filter((meal) => meal.category === 'lunch');
  const dinnerMeal = meals.filter((meal) => meal.category === 'dinner');
  const [displayMeals, setDisplayMeals] = useState([]);
  const handleDisplayMeals = (category) => {
    if (category === 'dinner') {
      setDisplayMeals(dinnerMeal);
    } else if (category === 'lunch') {
      setDisplayMeals(lunchMeal);
    } else {
      setDisplayMeals(breakfastMeal);
    }
  };

  const handleAddToCart = (meal) => {
    const existMeal = cartItems.find((ml) => ml.key === meal.key);
    if (existMeal !== undefined) {
      console.log('update Quantity');
      const newQuantity = existMeal.quantity + 1;
      existMeal.quantity = newQuantity;
      const updatedQuantity = [...cartItems];
      setCartItems(updatedQuantity);
      console.log(setCartItems);
    } else {
      console.log('Add New Item to cartItems');
      setCartItems((preState) => [...cartItems, meal]);
    }
  };

  return (
    <div className="mx-12 my-8">
      <div className="mx-auto md:w-2/4 flex justify-around mb-8 border boder-greay-400 p-4 rounded">
        <button onClick={() => handleDisplayMeals('breakfast')}>
          Breakfast
        </button>
        <button onClick={() => handleDisplayMeals('lunch')}>Lunch</button>
        <button onClick={() => handleDisplayMeals('dinner')}>Dinner</button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {displayMeals.length === 0
          ? breakfastMeal.map((meal) => (
              <ProductCard
                key={meal.key}
                meal={meal}
                handleAddToCart={() => handleAddToCart(meal)}
              />
            ))
          : displayMeals.map((meal) => (
              <ProductCard
                key={meal.key}
                meal={meal}
                handleAddToCart={() => handleAddToCart(meal)}
              />
            ))}
      </div>
    </div>
  );
};

export default ProductContainer;

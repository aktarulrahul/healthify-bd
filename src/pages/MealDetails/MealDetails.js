import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { mealsContext } from '../../App';

const MealDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { mealID } = useParams();
  const meals = useContext(mealsContext);
  const mealDetail = meals.find((meal) => meal.key === mealID);
  const handleQuantity = (q) => {
    if (q === 'n' && quantity > 0) {
      setQuantity((quantity) => quantity - 1);
    } else {
      setQuantity((quantity) => quantity + 1);
    }
  };
  return (
    <div className="md:flex justify-around items-center shadow-lg m-2 p-4  ">
      <div>
        <h2 className="text-5xl">{mealDetail.name}</h2>
        <div className="flex mt-4 items-center">
          <p className="text-3xl mr-2">${mealDetail.newPrice}</p>
          <p className="text-2xl text-gray-400 line-through mr-2">
            ${mealDetail.oldPrice}
          </p>
          <span className="rounded-full border border-gray-400 px-4 py-2 mx-2">
            <button
              onClick={() => handleQuantity('n')}
              className="px-4 text-xl"
            >
              -
            </button>
            <span className="text-xl font-medium">{quantity}</span>
            <button
              onClick={() => handleQuantity('+')}
              className="px-4 text-red-500 text-xl"
            >
              +
            </button>
          </span>
        </div>
        <button className="py-3 px-8 bg-green-500 text-white rounded-full my-5">
          <i className="fas fa-shopping-cart px-2 "></i>Add
        </button>
      </div>
      <div>
        <img
          className="w-2/3 transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-110"
          src={mealDetail.img}
          alt=""
        />
      </div>
    </div>
  );
};

export default MealDetails;

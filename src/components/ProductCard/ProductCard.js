import React from 'react';
import './ProductCard.css';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const ProductCard = ({ meal }) => {
  const { category, name, oldPrice, newPrice, key, star, starCount, img } =
    meal;
  const [cartItems, setCartItems] = useCart();

  const handleAddToCart = (meal) => {
    let addedMealsToCart = [...cartItems];
    const existMeal = addedMealsToCart.find((ml) => ml.key === meal.key);
    // console.log('existMeal', existMeal);
    if (existMeal !== undefined) {
      console.log('update Quantity');
      const newQuantity = existMeal.quantity + 1;
      existMeal.quantity = newQuantity;
      setCartItems(addedMealsToCart);
    } else {
      console.log('Add New Item to cartItems');
      const updateCartItemWithUniqueItem = [...addedMealsToCart, meal];
      console.log('updateCartItemWithUniqueItem', updateCartItemWithUniqueItem);
      setCartItems(updateCartItemWithUniqueItem);
    }
  };
  return (
    <div className="p-3 rounded shadow-lg transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-105">
      <small className="bg-red-500 text-white p-3 rounded z-10">
        Save {parseInt(((oldPrice - newPrice) / 100) * 100)}%
      </small>
      <img src={img} alt="" className=" mb-2 z-0" />
      <div className="shadow-inner p-2">
        <small className="px-2 text-gray-500">{category}</small>
        <h2 className="px-2 font-medium mb-2">{name}</h2>
        <div className="px-2 mb-3">
          <Rating
            readonly
            initialRating={star}
            emptySymbol="far fa-star rating-color"
            fullSymbol="fas fa-star rating-color"
          />{' '}
          <small className="text-gray-400">({starCount})</small>
        </div>
        <div className="lg:flex justify-between px-4">
          <div className="flex justify-between">
            <p className="text-green-400 p-2">${newPrice}</p>
            <p className="text-gray-400 p-2 line-through">${oldPrice}</p>
          </div>
          <div className="flex justify-between">
            <Link to={`/meals/${key}`}>
              <button className="p-2 bg-green-100 text-green-500 rounded mr-2">
                Deatils
              </button>
            </Link>
            <button
              onClick={() => handleAddToCart(meal)}
              className="p-2 bg-green-100 text-green-500 rounded ml-2"
            >
              <i className="fas fa-shopping-cart px-2 "></i>Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useState } from 'react';

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (q) => {
    if (q === 'n' && quantity > 0) {
      setQuantity((quantity) => quantity - 1);
    } else {
      setQuantity((quantity) => quantity + 1);
    }
  };
  return (
    <div className="flex justify-around items-center my-5 bg-gray-50 rounded shadow-lg mx-10 p-2 transition duration-500 ease-in-out transform hover:scale-105">
      <img src={item.img} className="w-1/5" alt="" />
      <div>
        <h2>{item.name}</h2>
        <p className="text-green-500 text-xl font-medium">${item.newPrice}</p>
        <p className="text-gray-500 ">Delivery Charge $30</p>
      </div>
      <div className="py-2 px-4 rounded-full border border-gray-300">
        <button onClick={() => handleQuantity('n')} className="px-2 rounded ">
          -
        </button>
        {quantity}
        <button onClick={() => handleQuantity('+')} className="px-2 rounded ">
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
<h2>CartItem</h2>;

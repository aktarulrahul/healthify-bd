import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="flex justify-around items-center my-5 bg-gray-50 rounded shadow-lg mx-10 p-2 transition duration-500 ease-in-out transform hover:scale-105">
      <img src={item.img} className="w-1/5" alt="" />
      <div>
        <h2>{item.name}</h2>
        <p className="text-green-500 text-xl font-medium">${item.newPrice}</p>
        <p className="text-gray-500 ">Delivery Charge $30</p>
      </div>
      <div>
        <button>-</button>00<button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
<h2>CartItem</h2>;

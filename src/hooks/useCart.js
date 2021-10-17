import { useState } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  console.log('useCart', cartItems);
  localStorage.setItem('hbd-cart', JSON.stringify(cartItems));
  return [cartItems, setCartItems];
};

export default useCart;

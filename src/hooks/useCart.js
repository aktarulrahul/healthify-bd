import { useState } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  console.log('useCart', cartItems);
  return [cartItems, setCartItems];
};

export default useCart;

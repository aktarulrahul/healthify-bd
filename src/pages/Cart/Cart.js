import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { mealsContext } from '../../App';
// import { cartContext } from '../../App';
// import { mealsContext } from '../../App';
import CartItem from '../../components/CartItem/CartItem';
// import useCart from '../../hooks/useCart';

const Cart = () => {
  // const [cartItems, setCartItems] = useCart();
  const cartItems = useContext(mealsContext);
  // const cartItemContext = useContext(cartContext);
  const locatCart = JSON.parse(localStorage.getItem('hbd-cart'));
  const Total = cartItems.reduce((total, item) => total + item.newPrice, 0);
  const subTotal = parseFloat(Total).toFixed(2);
  const tax = subTotal * 0.15;
  const deliveryCost = 30;
  const finalCost = tax + deliveryCost + subTotal;
  return (
    <div className="my-3 md:grid md:grid-cols-3 md:gap-4">
      <div className="col-span-2 mx-auto mb-3">
        <h2 className="text-2xl font-medium mb-3 mx-10">
          Product Details {locatCart?.length}
        </h2>
        {locatCart.map((item) => (
          <CartItem key={item.key} item={item} />
        ))}
      </div>
      <div className="mx-10 mb-3">
        <h2 className="text-2xl font-medium mb-3 ">Order Summary</h2>
        <table className="table-auto ">
          <tbody>
            <tr>
              <td>Sub Total * {locatCart.length} Item</td>
              <td>${subTotal}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>${parseFloat(tax).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Delivery Fee</td>
              <td>${deliveryCost}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>${parseFloat(finalCost).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/shipping">
          <button className="p-2 mx-auto text-white bg-green-400 my-3 rounded">
            Proceed to Shipping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
<h2>cart</h2>;

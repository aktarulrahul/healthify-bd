import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="my-3 md:grid md:grid-cols-3 md:gap-4">
      <div className="col-span-2 mx-auto mb-3">
        <h2 className="text-2xl font-medium mb-3 ">Product Details</h2>
      </div>
      <div className="mx-auto mb-3">
        <h2 className="text-2xl font-medium mb-3 ">Order Summary</h2>
        <table className="table-auto">
          <tbody>
            <tr>
              <td>Sub Total * 4 Item</td>
              <td>$</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$</td>
            </tr>
            <tr>
              <td>Delivery Fee</td>
              <td>$</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$</td>
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

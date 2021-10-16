import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo/logo.png';
const Shipping = () => {
  const { user } = useAuth();
  return (
    <div className="login-bg py-1">
      <div className="lg:w-1/3 px-2 bg-green-50 rounded shadow-lg mx-auto">
        <img src={logo} className="w-full mx-auto mb-5" alt="" />
        <h2 className="text-center text-2xl font-medium mb-3 ">
          Delivery Details
        </h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            defaultValue={user.displayName}
            className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
          />
          <br />
          <input
            type="text"
            placeholder="Phone"
            className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
          />
          <br />
          <input
            type="text"
            placeholder="House, Road"
            className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
          />
          <br />
          <input
            type="text"
            placeholder="Flat or Floor"
            className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
          />
          <br />

          <textarea
            placeholder="Add Delivery Instruction"
            cols="30"
            rows="3"
            className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
          ></textarea>
          <br />
          <Link to="/home">
            <button
              type="submit"
              className="border border-green-400 rounded p-2 bg-green-400 w-full mb-3 text-white"
            >
              Place Order
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Shipping;

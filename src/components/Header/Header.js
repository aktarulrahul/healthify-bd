import React from 'react';
import logo from '../../images/logo/logo.png';

const Header = () => {
  return (
    <>
      <div className="m-2 flex h-14 items-center">
        <img className="px-4 flex h-14 w-2/12" src={logo} alt="" />
        <div className="px-4 py-2 ml-4 flex-1 rounded border-2 border-green-400 border-opacity-50">
          <input
            type="text"
            className="w-11/12 "
            placeholder="Search for items..."
          />
          <i class="fas fa-search px-2 text-green-400"></i>
        </div>
        <div className="flex-1 px-2">
          <div className="flex items-center justify-around">
            <div className="flex items-center ">
              <i class="fas fa-shopping-cart px-2 text-2xl"></i>
              <p className="text-gray-500">Cart</p>
            </div>
            <div className="flex items-center">
              <button className="text-gray-500">Login</button>
            </div>
            <div className="flex items-center">
              <button className="text-white px-4 py-2 rounded-full bg-red-500">
                Sign Up
              </button>
            </div>
            <div>
              <p className="text-2xl text-green-400 font-medium">1900-888</p>
              <small className="text-gray-500">24/7 support Center</small>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-gray-500 mb-4" />
    </>
  );
};

export default Header;
<h2>Header</h2>;

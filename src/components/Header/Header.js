import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import './Header.css';

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
          <i className="fas fa-search px-2 text-green-400"></i>
        </div>
        <div className="flex-1 px-2">
          <div className="flex items-center justify-around">
            <div className="flex items-center text-gray-500">
              <NavLink
                to="/Home"
                activeStyle={{
                  fontWeight: 'bold',
                  backgroundColor: '#34d399',
                  color: '#fff',
                  borderRadius: '20px',
                  padding: '4px 10px',
                }}
              >
                Home
              </NavLink>
            </div>
            <div className="flex items-center text-gray-500">
              <NavLink
                to="/login"
                activeStyle={{
                  fontWeight: 'bold',
                  backgroundColor: '#34d399',
                  color: '#fff',
                  borderRadius: '20px',
                  padding: '4px 8px',
                }}
              >
                Login
              </NavLink>
            </div>
            <div className="flex items-center text-white px-4 py-2 rounded-full bg-red-500">
              <NavLink
                to="/signup"
                activeStyle={{
                  fontWeight: 'bold',
                }}
              >
                Sign Up
              </NavLink>
            </div>
            <NavLink to="/cart">
              <div className="flex items-center ">
                <i className="fas fa-shopping-cart px-2 text-2xl"></i>
                <p className="text-gray-500">Cart</p>
              </div>
            </NavLink>
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

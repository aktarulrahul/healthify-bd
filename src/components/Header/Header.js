import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo/logo.png';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  const locatCart = JSON.parse(localStorage.getItem('hbd-cart'));
  return (
    <div className="md:sticky top-0 z-10 bg-green-50">
      <div className="m-2 lg:flex lg:h-14 lg:items-center sm:mx-auto">
        <NavLink to="/">
          <img className="px-4 h-14 lg:w-2/12 mx-auto" src={logo} alt="" />
        </NavLink>
        <div className="px-4 py-2 ml-4 flex-1 mb-2 text-center">
          <input
            type="text"
            className="lg:w-11/12 rounded p-1"
            placeholder="Search for items..."
          />
          <i className="fas fa-search px-2 text-green-400"></i>
        </div>
        <div className="mx-2 px-2">
          <div className="md:flex items-center justify-around">
            <div className="flex justify-around mx-2 mb-2">
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
              <NavLink to="/cart">
                <div className="flex items-center ">
                  <i className="fas fa-shopping-cart px-2 text-2xl relative">
                    <span className="absolute right-0 top-0 bg-green-400 px-1 rounded-full text-sm text-white">
                      {locatCart.length}
                    </span>
                  </i>
                  <p className="text-gray-500 pl-2">Cart</p>
                </div>
              </NavLink>
            </div>
            <div className="flex justify-around mx-2 mb-2">
              <div className="flex items-center text-gray-500 mr-1">
                {user.email ? (
                  <button
                    onClick={logOut}
                    className="flex items-center text-white px-4 py-2 rounded-full bg-green-500 ml-2"
                  >
                    Logout
                  </button>
                ) : (
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
                )}
              </div>
              <div className="flex items-center text-white px-4 py-2 rounded-full bg-red-500 ml-1">
                <NavLink
                  to="/signup"
                  activeStyle={{
                    fontWeight: 'bold',
                  }}
                >
                  Sign Up
                </NavLink>
              </div>
            </div>
            <div className="mb-2 text-center">
              <p className="text-2xl text-green-400 font-medium">1900-888</p>
              <small className="text-gray-500">24/7 support Center</small>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-gray-500 mb-4" />
    </div>
  );
};

export default Header;
<h2>Header</h2>;

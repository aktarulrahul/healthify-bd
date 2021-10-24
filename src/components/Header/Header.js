import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo/logo.png';
import avater from '../../images/Image/avater.png';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  const locatCart = JSON.parse(localStorage.getItem('hbd-cart'));
  return (
    <div className="md:sticky top-0 z-10 bg-green-100 mb-4 p-2 xl:px-4">
      <div className="m-2 lg:flex lg:h-14 lg:items-center lg:justify-between md:justify-around text-green-400 text-center">
        <NavLink to="/">
          <img src={logo} className="w-2/3 md:w-2/5 md:mx-3 mx-auto" alt="" />
        </NavLink>
        <div className="flex md:justify-center justify-around items-center my-2">
          <div className="px-2">
            <NavLink
              to="/home"
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
          <div className="px-2">
            <NavLink
              to="/about"
              activeStyle={{
                fontWeight: 'bold',
                backgroundColor: '#34d399',
                color: '#fff',
                borderRadius: '20px',
                padding: '4px 10px',
              }}
            >
              About
            </NavLink>
          </div>
          <div className="px-2">
            <NavLink
              to="/services"
              activeStyle={{
                fontWeight: 'bold',
                backgroundColor: '#34d399',
                color: '#fff',
                borderRadius: '20px',
                padding: '4px 10px',
              }}
            >
              Meals
            </NavLink>
          </div>
          <div className="px-2">
            <NavLink
              to="/contact"
              activeStyle={{
                fontWeight: 'bold',
                backgroundColor: '#34d399',
                color: '#fff',
                borderRadius: '20px',
                padding: '4px 10px',
              }}
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div className="flex md:justify-center justify-between items-center my-2 mx-3">
          <NavLink
            to="/cart"
            activeStyle={{
              fontWeight: 'bold',
              backgroundColor: '#fff',
              color: '#fff',
              borderRadius: '20px',
              padding: '4px 10px',
            }}
          >
            <div className="flex items-center w-1/3">
              <i className="fas fa-shopping-cart px-2 text-2xl relative text-green-400">
                <span className="absolute right-0 top-0 bg-green-400 px-1 rounded-full text-sm text-white">
                  {locatCart.length}
                </span>
              </i>
              <p className="text-green-400 pl-2">Cart</p>
            </div>
          </NavLink>
          <div className="w-2/3 ml-3">
            {user?.email ? (
              <div className="flex items-center justify-center lg:justify-end pb-1">
                <img
                  className="rounded-full w-1/12"
                  src={user.photoURL ? user.photoURL : avater}
                  alt=""
                />
                <p className="mx-2">{user.displayName}</p>
                <button
                  onClick={logOut}
                  className="text-white px-4 py-2 rounded-full bg-green-400"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="text-white px-10 py-2 rounded-full bg-green-400 mx-auto">
                <NavLink
                  to="/sign-in-up"
                  activeStyle={{
                    fontWeight: 'bold',
                  }}
                >
                  Login
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
<h2>Header</h2>;

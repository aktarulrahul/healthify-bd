import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';

const Footer = () => {
  return (
    <div className="my-4 mx-8">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <img src={logo} className="w-3/4" alt="" />
          <p>Best Food Waiting for your belly</p>
        </div>
        <div>
          <p>
            <span className="font-medium">
              <i className="fas fa-map-marker-alt text-green-500"></i> Address:{' '}
            </span>
            5171 W Ave, Utah 53127 United States
          </p>
          <p>
            <span className="font-medium">
              <i className="fas fa-phone-volume text-green-500"></i> Call Us:{' '}
            </span>
            (+880) 1711 - 11 22 33
          </p>
          <p>
            <span className="font-medium">
              <i className="fas fa-paper-plane text-green-500"></i> Email:{' '}
            </span>{' '}
            support@healthifybd.com
          </p>
          <p>
            <span className="font-medium">
              <i className="fas fa-user-clock text-green-500"></i> Hours:{' '}
            </span>{' '}
            10:00 - 18:00, Mon - Sat
          </p>
        </div>
        <div>
          <p className="text-gray-400">Company</p>
          <p>About Us</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Careers</p>
        </div>
        <div>
          <div>
            <p className="text-gray-400">Account</p>
            <Link to="/signin">Signin</Link>
            <br />
            <Link to="/signup">Signup</Link>
            <br />
            <Link to="/cart">View Cart</Link>
            <br />
            <Link to="/shipping">Shipping Details</Link>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

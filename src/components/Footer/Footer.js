import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <div></div>
        <div>
          <p className="text-gray-400">Company</p>
          <Link>About Us</Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;

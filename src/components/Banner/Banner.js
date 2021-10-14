import React from 'react';
import './Banner.css';

const Banner = ({ img, title, sub, btn, placeholder }) => {
  return (
    <div className="m-4 hbd-banner-bg rounded-lg flex justify-between items-center px-6">
      <div>
        <h1 className="text-5xl mb-3 font-extrabold text-gray-800">{title}</h1>
        <p className="text-gray-500 text-3xl mb-5">{sub}</p>
        <div className="rounded-full bg-white flex justify-between">
          <input
            className="rounded-full py-3 px-6 focus:outline-none focus:border-transparent"
            type="text"
            placeholder={placeholder}
          />
          <button className="bg-green-400 text-white rounded-full py-3 px-6 transition duration-500 ease-in-out transform hover:scale-110 ">
            {btn}
          </button>
        </div>
      </div>
      <div>
        <img
          className="transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-110 pl-4 h-full"
          src={img}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Banner;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';

const Form = ({ type }) => {
  return (
    <div className="md:w-1/3 px-2 bg-green-50 rounded shadow-lg mx-auto">
      <img src={logo} className="w-full mx-auto mb-5" alt="" />
      <form>
        {type === 'login' ? (
          <></>
        ) : (
          <>
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
            />
            <br />
          </>
        )}
        <input
          type="text"
          placeholder="Email"
          className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
        />
        <br />
        <button
          type="submit"
          className="border border-green-400 rounded p-2 bg-green-400 w-full mb-3 text-white"
        >
          {type === 'login' ? <>Signin</> : <>Registration</>}
        </button>
      </form>
      <p className="text-center text-gray-500 mx-auto mb-3">or</p>
      <div className=" flex justify-between ">
        <button className="w-2/3 mr-2 border border-red-500 rounded p-1 bg-red-500 mb-3 text-white ">
          <i className="fab fa-google text-xl px-1 "></i> Google Sign In
        </button>
        <button className="w-2/3 ml-2 border border-gray-600 rounded p-1 bg-gray-600 mb-3 text-white ">
          <i className="fab fa-github text-xl px-1 "></i> Github Sign In
        </button>
      </div>
      <p className="text-center text-gray-500 mx-auto mb-3">
        {type === 'login' ? (
          <>New to Healthify BD</>
        ) : (
          <>Already Have a Account</>
        )}
      </p>
      <div className="">
        <Link to={type === 'login' ? '/signup' : '/login'}>
          <button
            type="submit"
            className="border border-green-400 rounded p-2 bg-green-400 w-full mb-3 text-white"
          >
            {type === 'login' ? <>Registration</> : <>Login</>}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Form;

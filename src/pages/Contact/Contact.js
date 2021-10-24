import React from 'react';
import Banner from '../../components/Banner/Banner';
import img from '../../images/Image/chef-3.png';

const Contact = () => {
  const handleSumbit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Banner
        img={img}
        title="Contact US"
        sub="Start your ordering"
        btn="Search"
        placeholder="Your email"
        animation="transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-110 pl-4 h-full"
      />
      <div className="md:flex justify-arround m-4 itrms-center border rounded shadow-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
          className="md:w-1/2 transition duration-500 ease-in-out transform hover:scale-105"
          alt=""
        />
        <div className="mx-auto my-auto">
          <h2 className="text-4xl font-bold text-center text-green-500 my-5 ">
            <i class="fas fa-seedling"></i> Healthify BD
          </h2>
          <form onSubmit={handleSumbit} className="mx-3">
            <input
              type="text"
              className="py-2 px-4 rounded border my-2 w-full"
              placeholder="Name"
            />
            <br />
            <input
              type="email"
              className="py-2 px-4 rounded border my-2 w-full"
              placeholder="email"
            />
            <br />
            <textarea
              cols="30"
              rows="3"
              className="py-2 px-4 rounded border my-2 w-full"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className="py-2 px-4 rounded-full border my-2 w-full bg-green-500 text-white text-xl transition duration-500 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

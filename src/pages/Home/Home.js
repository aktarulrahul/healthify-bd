import React from 'react';
import Banner from '../../components/Banner/Banner';
import Deals from '../../components/Deals/Deals';
import ProductContainer from '../../components/ProductContainer/ProductContainer';
import WhyUs from '../../components/WhyUS/WhyUs';
import banner from '../../images/Image/banner.png';
import subscribe from '../../images/Image/subs.png';

const Home = () => {
  return (
    <div>
      <Banner
        img={banner}
        title="Best Food Waiting for your belly"
        sub="Save up to 50% on your first order"
        btn="Search"
        placeholder="Search"
        animation="mx-auto w-1/2 animate-spin-slow"
      />
      <ProductContainer />
      <Deals />
      <Banner
        img={subscribe}
        title="Stay home & get your food"
        sub="Start your ordering"
        btn="Subscribe"
        placeholder="Your email"
        animation="transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-110 pl-4 h-full"
      />
      <WhyUs />
    </div>
  );
};

export default Home;

import React from 'react';
import Banner from '../../components/Banner/Banner';
import Deals from '../../components/Deals/Deals';
import ProductContainer from '../../components/ProductContainer/ProductContainer';
import WhyUs from '../../components/WhyUS/WhyUs';
import subscribe from '../../images/Image/banner.png';
import banner from '../../images/Image/subs.png';

const Home = () => {
  return (
    <div>
      <Banner
        img={banner}
        title="Best Food Waiting for your belly"
        sub="Save up to 50% on your first order"
        btn="Search"
        placeholder="Search"
      />
      <ProductContainer />
      <Deals />
      <Banner
        img={subscribe}
        title="Stay home & get your food"
        sub="Start your ordering"
        btn="Subscribe"
        placeholder="Your email"
      />
      <WhyUs />
    </div>
  );
};

export default Home;

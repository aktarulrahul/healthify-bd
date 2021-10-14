import React from 'react';
import Banner from '../../components/Banner/Banner';
import Deals from '../../components/Deals/Deals';
import Header from '../../components/Header/Header';
import ProductContainer from '../../components/ProductContainer/ProductContainer';
import Subscribe from '../../components/Subscribe/Subscribe';
import WhyUs from '../../components/WhyUS/WhyUs';

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductContainer />
      <Deals />
      <Subscribe />
      <WhyUs />
    </div>
  );
};

export default Home;

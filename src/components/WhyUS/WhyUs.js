import React from 'react';
import Card from './Card/Card';

const whyUSData = [
  {
    title: 'Best Price & Offers',
    sub: 'Order $50 or more',
    icon: 'fas fa-tags text-5xl text-green-500 my-auto',
  },
  {
    title: 'Free Delivery',
    sub: '24/7 amazing services',
    icon: 'fas fa-truck text-5xl text-green-500 my-auto',
  },
  {
    title: 'Great daily deal',
    sub: 'When you sign up',
    icon: 'fab fa-ideal text-5xl text-green-500 my-auto',
  },
  {
    title: 'Easy returns',
    sub: 'When not Fresh',
    icon: 'fas fa-exchange-alt text-5xl text-green-500 my-auto',
  },
];

const WhyUs = () => {
  return (
    <div className="m-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {whyUSData.map((why) => (
          <Card key={why.title} why={why} />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;

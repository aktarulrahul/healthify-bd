import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import img from '../../images/Image/subs.png';

const About = () => {
  return (
    <div>
      <Banner
        img={img}
        title="Our Story"
        sub="Save up to 50% on your first order"
        btn="Search"
        placeholder="Search"
        animation="transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-110 pl-4 h-full"
      />
      <div className="my-4 md:flex justify-between items-center mx-4 px-2 shadow-lg rounded border py-2">
        <img
          src="https://images.unsplash.com/photo-1519676867240-f03562e64548?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt=""
          className="rounded-lg m-2 shadow-lg md:w-1/3 mr-4 mx-auto sm:my-3"
        />
        <div className="mx-1 md:ml-4">
          <h2 className="text-5xl italic my-8 text-green-500 font-bold">
            Who We Are?
          </h2>
          <p>
            <strong className="text-2xl text-green-600">Healthify BD</strong> s
            an BD digital health and wellness platform that provides services
            such as calorie tracking, one-on-one nutrition and fitness coaching,
            and diet and workout plans. Developed for both Android and iOS
            platforms, the app takes a holistic lifestyle tracking approach to
            keep users engaged and motivated.
          </p>
          <br />
          <hr className="my-2" />
          <blockquote>
            <q className="text-xl italic">
              We believe that inviting others to join you around your table is a
              sure way to strengthen friendships and build community. Sadly,
              somewhere along the line this became an intimidating prospect for
              many of us. While it’s true that the rules of etiquette have their
              place and value, our heart is to re-introduce you to the beauty
              that is found in bringing people together simply and with ease.
            </q>
            <hr className="my-2" />
            <p className="mt-3">
              With our shared love for food, creating, and hosting—we set out to
              make The Modern Proper a place to inspire the seasoned cook and
              novice alike. The recipes you’ll find here are inspired by local,
              seasonal ingredients, made from scratch, and either created by us
              or adapted from recipes that have inspired us. Above all, the food
              you’ll find at The Modern Proper is designed to communicate value
              to those with whom it’s shared. We’re here to change the way
              people think about hospitality, one delicious meal at a time.
            </p>
          </blockquote>
        </div>
      </div>
      {/* Show Chef */}
      <div className="my-3 mx-4 p-2 border rounded shadow-lg">
        <h3 className="text-center text-5xl italic my-8 text-green-500 font-bold">
          Meet Our Chefs
        </h3>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mx-3 py-3"></div>
      </div>
    </div>
  );
};

export default About;

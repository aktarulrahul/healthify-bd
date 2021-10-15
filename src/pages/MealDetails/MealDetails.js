import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useMeals from '../../hooks/useMeals';

const MealDetails = () => {
  const { category, mealID } = useParams();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch('./meals.json')
      .then((res) => res.json())
      .then((data) => console.log('mealID fetch data', data));
  }, []);
  const mealDetail = meals.find((meal) => meal.key === mealID);
  return (
    <div>
      <h2>{meals.length}</h2>
    </div>
  );
};

export default MealDetails;

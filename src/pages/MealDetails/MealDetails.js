import React from 'react';
import { useParams } from 'react-router';

const MealDetails = () => {
  const { category, mealID } = useParams();
  return (
    <div>
      <h2>MealDetails: {mealID}</h2>
      <h3>{category}</h3>
    </div>
  );
};

export default MealDetails;

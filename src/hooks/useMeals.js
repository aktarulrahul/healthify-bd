import { useEffect, useState } from 'react';

const useMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('./meals.json')
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .finally(() => setIsLoading(false));
  }, []);
  return [meals, isLoading];
};

export default useMeals;

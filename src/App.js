import './App.css';
import React, { createContext } from 'react';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Shipping from './pages/Shipping/Shipping';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import MealDetails from './pages/MealDetails/MealDetails';
import NotFound from './pages/NotFound/NotFound';
import useMeals from './hooks/useMeals';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const mealsContext = createContext('mealsData');
export const cartContext = createContext('cartState');
function App() {
  const [meals] = useMeals();
  return (
    <mealsContext.Provider value={meals}>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/meals/:mealID">
              <MealDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </mealsContext.Provider>
  );
}

export default App;

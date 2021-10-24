import './App.css';
import React, { createContext } from 'react';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Shipping from './pages/Shipping/Shipping';
import MealDetails from './pages/MealDetails/MealDetails';
import NotFound from './pages/NotFound/NotFound';
import useMeals from './hooks/useMeals';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignInUp from './pages/SignInUp/SignInUp';
import Confirm from './pages/Confirm/Confirm';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping />
            </PrivateRoute>
            <Route path="/sign-in-up">
              <SignInUp />
            </Route>
            <PrivateRoute path="/confirm">
              <Confirm />
            </PrivateRoute>
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

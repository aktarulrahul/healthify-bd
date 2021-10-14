import './App.css';
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

function App() {
  return (
    <>
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
          <Route path="/shipping">
            <Shipping />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/:category/:mealID">
            <MealDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

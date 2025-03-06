import React from "react";
import AppRouter from './router/AppRouter';
import ProductList from "./components/specific/products/ProductList";
import NavBar from "./components/nav-bar/NavBar";
import Cart from "./components/specific/cart/Cart";
import './assets/styles/App.css';
import './assets/styles/input.css';


function App() {
  return (

    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <AppRouter />
      </main>
    </div>

  );
}

export default App;

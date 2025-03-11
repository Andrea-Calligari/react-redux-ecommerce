import React from "react";
import AppRouter from './router/AppRouter';
import NavBar from "./components/nav-bar/NavBar";
import './assets/styles/App.css';
import './assets/styles/input.css';


function App() {
  return (

    <div className="App">
      <header>
        <NavBar />
      </header>
      <main >
        <AppRouter />
      </main>
    </div>

  );
}

export default App;

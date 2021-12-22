import React from "react";
import "./App.css";
import Header from "./components/Header";
import HotelDetails from "./components/HotelDetails";


const App = () => {

  return (
    <div>
    <header>
      <Header />
    </header>
    <main>
      <HotelDetails />
    </main>
    </div>
   
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Wheather from "./components/hero/weatherSection";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Wheather></Wheather>
      <Footer></Footer>
    </div>
  );
}

export default App;

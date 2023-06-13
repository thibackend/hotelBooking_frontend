import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Hero from "./Hero";
import Header from "./Header";
import MyComponent from "./Room";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <MyComponent />
    </>
  );
};

export default Home;


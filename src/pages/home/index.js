import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Hero from "./Hero";
import Header from "./Header";
import MyComponent from "./Room";
import UserMenu from "./UserMenu";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <UserMenu/>
      <MyComponent />
    </>
  );
};

export default Home;


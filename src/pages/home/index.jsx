import { Box } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Header from "./Header";
import MyComponent from "./Room";
const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact />
      </Routes>
      <Hero />
      <MyComponent />
    </>
  );
};

export default Home;

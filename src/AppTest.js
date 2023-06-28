import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./pages/home1/Navbar";
// import Footer from "./components/Footer";
import Filters from "./pages/home1/Filters";
import Rentals from "./pages/home1/Rentals";


const Apptest = () => {
  return (
    // <ChakraProvider>
    //   <BrowserRouter>
    //     <ToastContainer />
    //   </BrowserRouter>

    //   <div className="">
      <Navbar />
    //   <div className=" sm:mx-6 md:mx-10 lg:mx-12 px-3">
    //     <Filters />
    //     <Rentals />
    //   </div>
    // </div>
    // </ChakraProvider>
  );
};

export default Apptest;

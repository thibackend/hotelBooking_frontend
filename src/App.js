import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Filters from "./components/Filters";
import Rentals from "./components/Rentals";
import SearchFilter from "./components/demo";


const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        {/* <Router /> */}
        <ToastContainer />
      </BrowserRouter>

      <div className="">
      <Navbar />
      
      <div className=" sm:mx-6 md:mx-10 lg:mx-12 px-3">
        <Filters />
        <Rentals />
      </div>
      {/* <Footer /> */}
    </div>
    </ChakraProvider>
  );
};
export default App;

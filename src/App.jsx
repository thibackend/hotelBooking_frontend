import Router from "./routes";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Services from "./pages/detail/services";
const App = () => {
  return (
    // <ChakraProvider>
    //   <BrowserRouter>
    //     <Router />
    //     <ToastContainer />
    //   </BrowserRouter>
    // </ChakraProvider>
    <Services />
  );
}
export default App;

import Router from "./routes";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <ChakraProvider>
      <ToastContainer />
      <BrowserRouter>
        <Router />
        <ToastContainer />
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;

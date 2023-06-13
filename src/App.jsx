import Router from "./routes";
import { ToastContainer } from "react-toastify";
import { BrowserRouter} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
// import { Login } from "./pages/auth";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Router />
        <ToastContainer />
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;

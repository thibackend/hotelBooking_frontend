import Router from "./routes";
import { ToastContainer } from "react-toastify";
import { BrowserRouter} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import AddRoom from "./pages/admin/addRoom";
const App = () => {
  return (
    //<ChakraProvider>
    //  <BrowserRouter>
    //    <Router />
    //    <ToastContainer />
    //  </BrowserRouter>
    //</ChakraProvider>
    <AddRoom/>

  );
}
export default App;

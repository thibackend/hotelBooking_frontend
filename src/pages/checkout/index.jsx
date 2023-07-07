<<<<<<< HEAD
import ConfirmationPage from "./comfitBooking";
import React from "react";


function Checkout() {
    return ( 
        <>
        <ConfirmationPage/>
        </>
     );
}

=======
import { Outlet } from "react-router";
import ConfirmationPage from "./comfitBooking";
import React from "react";
function Checkout() {
    return ( 
        <>
        <Outlet/>
        </>
     );
}
>>>>>>> c153178a60c72961e394b1657cb2fb7e7c854a82
export default Checkout;
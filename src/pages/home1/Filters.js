import React from "react";
import Filter from "./Filter";
import "./Filter.css";

import { Link } from "react-router-dom";
const Filters = () => {
  return (
    <div className="">
      <div className="flex justify-center  gap-3 sm:gap-4 " style={{fontWeight:"50%"}}>
        <Link className="one" to="about" style={{textDecoration:'none'}}>
          <Filter title={"About"} />
        </Link>
        <Link className="one" to="My_booking" style={{textDecoration:'none'}}>
          <Filter title={"My Booking"} />
        </Link>
        <Link className="one" to="new" style={{textDecoration:'none'}}>
          <Filter title={"New"} />
        </Link>
        <Link className="one" to="/" style={{textDecoration:'none'}}>
          <Filter title={"Home"} />
        </Link>
      </div>
    </div>
  );
};

export default Filters;

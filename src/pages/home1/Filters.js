import React from "react";
import { GiMineExplosion } from "react-icons/gi";
import { ImKey } from "react-icons/im";
import Filter from "./Filter";

import { Link } from "react-router-dom";
const Filters = () => {
 
  return (
    <div className="">
      <div className="flex justify-center  gap-3 sm:gap-4  mt-12 ">
        <Link to="about"><Filter title={"About"}/></Link>
          <Filter title={"My Booking"} />
          <Filter title={"New"} icon={<GiMineExplosion />} />
          <Filter title={"Private"} icon={<ImKey />} />
      </div>
    </div>
  );
};

export default Filters;

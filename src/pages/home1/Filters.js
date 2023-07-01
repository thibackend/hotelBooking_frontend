import React from "react";
import { GiFishingBoat, GiMineExplosion } from "react-icons/gi";
import { ImKey } from "react-icons/im";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { BsFillTreeFill } from "react-icons/bs";
import Filter from "./Filter";
import { Link } from "react-router-dom";
const Filters = () => {
 
  return (
    <div className="">
      <div className="flex justify-center  gap-3 sm:gap-4  mt-12 ">
        <Link to="about"><Filter title={"About"} icon={<HiGlobeAsiaAustralia />} /></Link>
          <Filter title={"Boat"} icon={<GiFishingBoat />} />
          <Filter title={"New"} icon={<GiMineExplosion />} />
          <Filter title={"Private"} icon={<ImKey />} />
          <Filter title={"Forest"} icon={<BsFillTreeFill />} />
        
      </div>
    </div>
  );
};

export default Filters;

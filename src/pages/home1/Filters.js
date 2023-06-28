import React from "react";
import { GiFishingBoat, GiMineExplosion } from "react-icons/gi";
import { ImKey } from "react-icons/im";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { BsFillTreeFill } from "react-icons/bs";
import Filter from "./Filter";

const Filters = () => {
  const sorting = [
    { title: "Boat", icon: <GiFishingBoat /> },
    { title: "New", icon: <GiMineExplosion /> },
    { title: "About", icon: <HiGlobeAsiaAustralia /> },
    { title: "Private", icon: <ImKey /> },
    { title: "Forest", icon: <BsFillTreeFill /> },
  ];
  return (
    <div className="">
      <div className="flex justify-center  gap-3 sm:gap-4  mt-12 ">
        {sorting.map((obj) => (
          <Filter title={obj.title} icon={obj.icon} />
        ))}
      </div>
    </div>
  );
};

export default Filters;

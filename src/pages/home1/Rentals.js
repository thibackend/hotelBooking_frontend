import { Link } from "react-router-dom";
import house from "../../assets/house.jpg";
import Rental from "./Rental";
import axios from "axios";
import { useEffect, useState } from "react";
import { getRooms } from './../../services/home/index';
import { errors } from "jose";

const Rentals = () => {
  const [data, setData] = useState();
  useEffect(() => {
     getRooms().then(
    (res)=>setData(res)
  ).catch(
    err=>console.log(err)
  )
  }, []);
  return (
    <div className="py-3 sm:py-5">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 "
        style={{ flexWrap: "wrap" }}
      >
        {data ? <Rental data={data} /> : <h1>have no data</h1> }
      </div>
    </div>
  );
};

export default Rentals;

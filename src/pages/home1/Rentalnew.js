import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../css/roomDetail.css";
const Rentalnew = ({ data: rentalData }) => {
  return (
    <div className="card-room">
      <div className="row flex flex-wrap justify-between absolute w-full mt-12 pr-10 pl-10 font-semibold text-gray-600">
        {rentalData ? (
          rentalData.map((rental, index) => (
            <Link
              to={`detail/${rental.id}`}
              className="room-show col-sm-3 mb-10"
              key={index}
            >
              <div className="relative">
                <div className="flex">
                  <img
                    src={
                      `http://127.0.0.1:8000/uploads/images/${rental.image_path?.[0]}` ||
                      "https://us.123rf.com/450wm/dmitryag/dmitryag2106/dmitryag210600432/169715356-woman-taking-pictures-on-camera-sea-in-mountains-back-view.jpg?ver=6"
                    }
                    alt="#"
                    className="object-cover sm:h-[17rem]  md:h-[13rem] w-full"
                  />
                </div>
              </div>
              <p className="desc">{rental.desc}</p>
              <div className="pt-3 flex justify-between descCha">
                <div className="dsfs">
                  <p className="max-w-[17rem] font-semibold text-[17px]">
                    {rental.name || ""}
                  </p>

                  <p className="max-w-[17rem] font-semibold text-[17px]">
                    {rental.price || ""}$
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <BsStarFill style={{ color: "yellow" }} />
                  <p className="text-[15px]">{rental.star || ""}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </div>
  );
};

export default Rentalnew;

import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Rental = (props) => {
  const [data, setSetData] = useState(props.data);
  console.log("data move:", data);
  useEffect(() => { }, []);
  return (
    // <div className="row flex flex-wrap justify-between absolute w-full mt-12 pr-16 pl-6 font-semibold text-gray-600">
    //   {data
    //     ? data.map((e, index) => (

    //       <Link to={`detail/${e.id}`} className="col-sm-3 mb-10" key={index}>
    //         <div className="relative">
    //           <div className="grad absolute w-full h-full rounded-b-[1.3rem]"></div>
    //           <div className="flex">
    //             {/* Background */}
    //             <img
    //               src={
    //                 e.image_path[0]
    //                   ? e.image_path[0]
    //                   : `https://us.123rf.com/450wm/dmitryag/dmitryag2106/dmitryag210600432/169715356-woman-taking-pictures-on-camera-sea-in-mountains-back-view.jpg?ver=6`
    //               }
    //               alt="#"
    //               className="object-cover rounded-[1.3rem] sm:h-[17rem]  md:h-[13rem] w-full"
    //             />
    //             {/* Title */}
    //             <div className="absolute text-white font-bold bottom-6 left-6 text-[22px] flex items-center gap-2">
    //             </div>
    //           </div>
    //         </div>
    //         {/* Description */}
    //         <div className="pt-3 flex justify-between items-start">
    //           {/* Left */}
    //           <div className="">
    //             <p className="max-w-[17rem] font-semibold text-[17px]">
    //               {e.name}
    //             </p>
    //             <p className="max-w-[17rem]  text-[16px] -mt-1 text-gray-500">
    //               Jan 28 - Aug 9
    //             </p>
    //             <p className="max-w-[17rem] font-semibold text-[17px]">
    //               {e.price}$
    //             </p>
    //           </div>
    //           {/* Right */}
    //           <div className="flex items-center space-x-1">
    //             <BsStarFill />
    //             <p className="text-[15px]">{e.star}</p>
    //           </div>
    //         </div>
    //       </Link>
    //     ))
    //     : ""}
    // </div>
    <></>
  );
};

export default Rental;

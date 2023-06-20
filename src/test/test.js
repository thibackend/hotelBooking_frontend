import React from "react";
import { useEffect } from "react";
function Test() {
  const seasons =4;

  let seasonsList = [];
  for(var index ; index<seasons; index ++){
    seasonsList.push(<li key={index} className="fa fa-star"></li>);
  };
  useEffect(
    ()=>{
        console.log(seasonsList);
    },[]
  )
  return (
    <>
      <h2>Seasons of the year</h2>
      <ul className="d-flex justify-content-between my-5 mx-5">{seasonsList}</ul>
    </>
  );
}

export default Test;
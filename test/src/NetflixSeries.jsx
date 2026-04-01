import React from "react";
import seriesData from "../src/api/seriesData.json";
import { SeriesCard } from "./components/SeriesCard";

const NetflixSeries = () => {
  return (
<ul className = "grid grid-three--cols">
    {seriesData.map((currentElement) => (
 <SeriesCard key={currentElement.id} data={currentElement} />
    ))};
    
  </ul>
  );
  
};

export default NetflixSeries

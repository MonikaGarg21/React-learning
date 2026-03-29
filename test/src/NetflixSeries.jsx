import React from "react";
import seriesData from "../src/api/seriesData.json";
import { SeriesCard } from "./components/SeriesCard";

const NetflixSeries = () => {
  return (
<ul>
    {seriesData.map((currentElement) => (
 <SeriesCard key={currentElement.id} currentElement={currentElement} />
    ))};
    
  </ul>
  );
  
};

export default NetflixSeries

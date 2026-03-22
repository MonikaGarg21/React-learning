import React from "react";
import seriesData from "../src/api/seriesData.json";

const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((currentElement) => {
        return(
        <li key ={currentElement.id}>
          <div>
            <div>
              <img
                src={currentElement.img_url}
                alt="qot.jpg"
                width="40%"
                height="40%"
              />
            </div>

            <h2>Name : {currentElement.name}</h2>
            <h3>Rating : {currentElement.rating}</h3>
            <p>Summary: {currentElement.description}</p>
            <p>Genre:{currentElement.genre} </p>
            <a href={currentElement.watch_url} target="_blank">
              <button>watch now</button>
            </a>
          </div>
        </li>
        );
      })}
    </ul>
  );
};

export default NetflixSeries;

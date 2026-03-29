
export const SeriesCard = (props) => {
  return (
    <li>
      <div>
        <div>
          <img
            src={props.currentElement.img_url}
            alt="qot.jpg"
            width="40%"
            height="40%"
          />
        </div>

        <h2>Name : {props.currentElement.name}</h2>
        <h3>Rating : {props.currentElement.rating}</h3>
        <p>Summary: {props.currentElement.description}</p>
        <p>Genre:{props.currentElement.genre} </p>
        <a href={props.currentElement.watch_url} target="_blank">
          <button>watch now</button>
        </a>
      </div>
    </li>
  );
};

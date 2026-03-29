export const SeriesCard = (props) => {
    console.log(props);
    const {img_url , name, rating, description, genre, watch_url} = props.data;
  return (
    <li>
      <div>
        <div>
          <img
            src={img_url}
            alt="qotjpg"
            width="40%"
            height="40%"
          />
        </div>

        <h2>Name : {name}</h2>
        <h3>Rating : {rating}</h3>
        <p>Summary: {description}</p>
        <p>Genre:{genre} </p>
        <a href={watch_url} target="_blank">
          <button>watch now</button>
        </a>
      </div>
    </li>
  );
};

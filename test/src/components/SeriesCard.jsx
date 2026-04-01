export const SeriesCard = ({ data }) => {
  console.log(data);
  const { id, img_url, name, rating, description, genre, watch_url } = data;

  const btn_style = {                     //inline css stored variable 
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: "var( --bnt-hover-bg-color)",
    color: "var(--bg-color)",
  };

  return (
    <li className="card">
      <div>
        <div>
          <img src={img_url} alt="qotjpg" width="40%" height="40%" />
        </div>
        <div className="card-content">
          <h2>Name : {name}</h2>
          <h3>Rating : {rating}</h3>
          <p>Summary: {description}</p>
          <p>Genre:{genre} </p>
          <a href={watch_url} target="_blank">
            <button style={btn_style}>watch now</button>
          </a>
        </div>
      </div>
    </li>
  );
};

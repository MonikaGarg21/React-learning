export const SeriesCard = ({ data }) => {
  console.log(data);
  const { id, img_url, name, rating, description, genre, watch_url } = data;

  // const btn_style = {                     //inline css stored variable
  //   padding: "1.2rem 2.4rem",        // add inline style as style={btn_style}
  //   border: "none",
  //   fontSize: "1.6rem",
  //   fontWeight: "200",
  // };

  return (
    <li className="card">
      <div>
        <div>
          <img src={img_url} alt="qotjpg" width="40%" height="40%" />
        </div>
        <div className="card-content">
          <h2>Name : {name}</h2>
          <h3>
            Rating :
            {/* //conditional styling */}
            <span className={`rating ${rating>= 8.5 ? "super_hit" : "average"}`}>        
              {rating}
            </span>
          </h3>
          <p>Summary: {description}</p>
          <p>Genre:{genre} </p>
          <a href={watch_url} target="_blank">
            <button>watch now</button>
          </a>
        </div>
      </div>
    </li>
  );
};

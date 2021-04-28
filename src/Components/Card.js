import React from "react";
import "../Card.css";

function Card(props) {
  const img_base_url = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="container-card">
      <div className="card" style={{ width: "13rem" }}>
        <img
          src={img_base_url + props.item.poster_path}
          className="image"
          alt={props.item.title}
        />
        <div className="overlay">{props.item.title}</div>
      </div>
    </div>
  );
}

export default Card;

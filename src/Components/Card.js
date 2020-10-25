import React from 'react'
import '../Card.css'

function Card(props) {

    const base_url = "https://image.tmdb.org/t/p/w500"

    return (
        <div className="container-card">
            <div className="card" style={{ width: "13rem" }}>
                <img src={base_url + props.item.poster_path} className="image" alt="" />
                <div className="overlay">{props.item.title}</div>
            </div>
        </div>
    )
}

export default Card
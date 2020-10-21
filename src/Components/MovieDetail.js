import React, { useEffect, useState } from 'react'
import Rating from 'react-rating'

function MovieDetail({ match }) {
    useEffect(() => {
        fetchItem()
        console.log("Match...", match)
    })

    const [item, setItem] = useState({ genres: [] })
    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://api.themoviedb.org/3/movie/${this.match.params.id}?api_key=7ffd3ea64bd92d5a39124a5b208cdaac&language=en-US`
        )
        const item = await fetchItem.json();
        setItem(item)
        console.log(item)
    }

    const base_url = "https://image.tmdb.org/t/p/w500"

    return (
        <div className="container">
            <div className="row" style={{ marginTop: "1%", marginBottom: "1%" }}>
                <div className="col-6">
                    <img src={base_url + item.poster_path} style={{
                        height: "100%",
                        width: "90%"
                    }} alt="" />
                </div>

                <div className="col-6">
                    <h1>{item.title}</h1>
                    <hr />
                    <p>Overview :</p>
                    <p style={{ color: "#808080" }}>{item.overview}</p>
                    <hr />
                    <p>Rating:</p>
                    <Rating stop="5" readonly="true" initialRating={Math.floor(item.vote_average / 2)} />
                    <hr />
                    <p>Genres: {item.genres.name}</p>

                </div>
            </div>
        </div>
    )

}

export default MovieDetail
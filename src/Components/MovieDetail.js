import React from 'react'
import Rating from 'react-rating'
import axios from 'axios'

class MovieDetail extends React.Component {
    state = {
        title: "",
        vote_average: "",
        overview: "",
        id: "",
        genres: [],
        poster_path: "",
    }

    // 337401
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=7ffd3ea64bd92d5a39124a5b208cdaac&language=en-US`, {})
            .then(response => {
                const fetched = response.data
                console.log(fetched)
                this.setState({
                    title: fetched.title,
                    vote_average: fetched.vote_average,
                    overview: fetched.overview,
                    poster_path: fetched.poster_path,
                    genres: fetched.genres
                })

            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const base_url = "https://image.tmdb.org/t/p/w500"

        return (
            <div className="container">
                <div className="row" style={{ marginTop: "1%", marginBottom: "1%" }}>
                    <div className="col-6">
                        <img src={base_url + this.state.poster_path} style={{
                            height: "100%",
                            width: "90%"
                        }} alt="" />
                    </div>

                    <div className="col-6">
                        <h1>{this.state.title}</h1>
                        <hr />
                        <p>Overview :</p>
                        <p style={{ color: "#808080" }}>{this.state.overview}</p>
                        <hr />
                        <p>Rating:</p>
                        <Rating stop="5" readonly="true" initialRating={Math.floor(this.state.vote_average / 2)} />
                        <hr />
                        <p>Genres: {this.state.genres.map(genre => (
                            <span key={genre.id} style={{ marginRight: "1%" }} className="badge badge-pill badge-secondary">{genre.name}</span>

                        ))}</p>

                    </div>
                </div>
            </div>
        );
    }

}
export default MovieDetail
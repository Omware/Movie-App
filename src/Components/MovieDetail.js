import React from 'react';
import Rating from 'react-rating';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

class MovieDetail extends React.Component {
  state = {
    title: '',
    vote_average: '',
    overview: '',
    id: '',
    genres: [],
    poster_path: '',
    release_date: '',
  };

  // 337401
  componentDidMount () {
    axios
      .get (
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US`,
        {}
      )
      .then (response => {
        const fetched = response.data;
        console.log (fetched);
        this.setState ({
          title: fetched.title,
          vote_average: fetched.vote_average,
          overview: fetched.overview,
          poster_path: fetched.poster_path,
          genres: fetched.genres,
          release_date: fetched.release_date,
        });
      })
      .catch (error => {
        console.log (error);
      });
  }

  render () {
    const base_url = 'https://image.tmdb.org/t/p/w500';
    const mycolors = ['#310042', '#ff6047', '#036900', '#fff700', '#4287f5'];
    const getRandom =
      mycolors[Math.floor (Math.random () * mycolors.length - 1)];

    return (
      <div className="container">
        <div className="row" style={{marginTop: '1%', marginBottom: '1%'}}>
          <div className="col-lg-6">
            <img
              src={base_url + this.state.poster_path}
              style={{
                height: '100%',
                width: '100%',
              }}
              alt=""
            />
          </div>

          <div className="col-lg-6">
            <h1>{this.state.title}</h1>
            <hr />
            <p>Overview</p>
            <p style={{color: '#808080'}}>{this.state.overview}</p>
            <hr />
            <p>Rating:</p>
            <Rating
              stop="5"
              readonly="true"
              initialRating={Math.floor (this.state.vote_average / 2)}
            />
            <hr />
            <p>
              Genres: {this.state.genres.map (genre => (
                <span
                  key={genre.id}
                  style={{marginRight: '1%', background: getRandom}}
                  className="badge badge-pill badge-primary"
                >
                  {genre.name}
                </span>
              ))}
            </p>
            <i className="fa fa-calendar">
              <span className="font-weight-normal" style={{marginLeft: '10px'}}>
                {this.state.release_date}
              </span>
            </i>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieDetail;

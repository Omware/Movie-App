import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Card.css'
import Lottie from 'react-lottie';
import animationData from '../Lottie/not-found-anim.json';
import Card from '../Components/Card'


class NowPlaying extends React.Component {

    constructor() {
        super()
        this.state = {
            error: false,
            isLoading: true,
            nowPlaying: []
        }
    }

    componentDidMount() {
        this.setState({ isLoading: false })
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`, {})
            .then(response => {
                const fetched = response.data
                console.log(fetched)
                this.setState({
                    isLoading: false,
                    nowPlaying: fetched.results
                })
            })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    error: true
                })
                console.log(error)
            })

    }
    render() {
        if (this.state.error) {
            const lottieanim = {
                loop: true,
                autoplay: true,
                animationData: animationData,

            }

            return (
                <div>
                    {/* error animation */}
                    <Lottie
                        options={lottieanim}
                        height={300}
                        width={300}
                    />
                </div>
            )
        } else {
            const items = this.state.nowPlaying
            const myStyle = {
                margin: "20%"
            }
            
            return (

                this.state.isLoading ? <div style={myStyle} className="d-flex justify-content-center">
                    <div className="spinner-grow text-dark" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> : <div>
                        <div className="row justify-content-center">
                            {items.map(item => (
                                <h1 key={item.id}>
                                    <Link to={`/movie/${item.id}`}>
                                        <Card item={item} />
                                    </Link>
                                </h1>
                            ))}
                        </div>
                    </div>
            )
        }
    }
}

export default NowPlaying
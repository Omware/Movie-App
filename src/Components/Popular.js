import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Popular extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: false,
            isLoading: true,
            popularmovies: []
        }
    }

    componentDidMount() {
        this.setState({ isLoading: false })
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7ffd3ea64bd92d5a39124a5b208cdaac&language=en-US&page=1`, {})
            .then(response => {
                const fetched = response.data
                console.log(fetched)
                this.setState({
                    isLoading: false,
                    popularmovies: fetched.results
                })
            })
            .catch(error => {
                console.log(error)
            })

    }
    render(props) {
        const items = this.state.popularmovies
        return (
            this.state.isLoading ? "Loading..." : <div>

                {items.map(item => (
                    // <ul key={item.id}>
                    //     <li>{item.title}</li>
                    // </ul>
                    <h1 key={item.id}>
                        <Link to={`/movie/${item.id}`}>
                            {item.title}
                        </Link>

                    </h1>
                ))}
            </div>
        )
    }
}

export default Popular
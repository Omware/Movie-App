import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Upcoming from './Components/Upcoming'
import Popular from './Components/Popular'
import NowPlaying from './Components/NowPlaying'
import TopRated from './Components/TopRated'
import MovieDetail from './Components/MovieDetail'

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Popular} />
            <Route exact path="/upcoming" component={Upcoming} />
            <Route exact path="/nowplaying" component={NowPlaying} />
            <Route exact path="/toprated" component={TopRated} />
            <Route exact path="/movie/:id" component={MovieDetail} />

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import HomePage from "./Components/HomePage"
import SnakeContainer from "./Components/Snake/SnakeContainer"
import BrickbreakerContainer from "./Components/Brickbreaker/BrickbreakerContainer.js"
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <>
      <Route exact path="/" component={HomePage}/>   
      <Route path="/games/snake" component={SnakeContainer} />
      <Route path="/games/brickbreaker" component={BrickbreakerContainer} />
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import HomePage from "./Components/HomePage"
import SnakeContainer from "./Components/Snake/SnakeContainer"
import BrickbreakerContainer from "./Components/Brickbreaker/BrickbreakerContainer.js"
import Twenty48Container from './Components/twenty48/Twenty48Container'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <>
      <Route exact path="/" component={HomePage}/>   
      <Route path="/games/snake" component={SnakeContainer} />
      <Route path="/games/brickbreaker" component={BrickbreakerContainer} />
      <Route path="/games/2048" component={Twenty48Container} />
      </>
    );
  }
}

export default App;

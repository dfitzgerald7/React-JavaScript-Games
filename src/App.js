import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import HomePage from "./Components/HomePage"
import SnakeContainer from "./Components/SnakeContainer"
import BrickbreakerContainer from "./Components/BrickbreakerContainer.js"
import './App.css';

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

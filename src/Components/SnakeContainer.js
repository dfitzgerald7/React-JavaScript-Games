import React, { Component } from 'react';
import SnakeBoard from "./SnakeBoard"



class SnakeContainer extends Component {
    state = { snake: [], dx: 10, dy: 0, foodX: 0, foodY: 0 }

    resetState = () => {
        this.setState()
    }

    render() {
        return (
        <>
        <canvas id="gameCanvas" height="300px" width="300" />
        <SnakeBoard dx={this.state.dx} dy={this.state.dy} foodX={this.state.foodX} foodY={this.state.foodY}/>
        </>
        )}


}
export default SnakeContainer;
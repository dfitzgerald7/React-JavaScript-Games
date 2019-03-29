import React, { Component } from 'react';
import SnakeBoard from './SnakeBoard';


const myConstants={
    CANVAS_BORDER_COLOR: 'black', 
    CANVAS_BACKGROUND_COLOR: "white",
    SNAKE_COLOR: 'lightgreen', 
    SNAKE_BORDER_COLOR: 'darkgreen',
    width: 500, 
    height: 500,
    offSetX: 50,
    offSetY: 100
}


class SnakeContainer extends Component {

    constructor() {
        super()
        document.addEventListener("keydown", this.handleKeyPress)
        this.state = {
            snake:[
                {x: (myConstants.width)/2 + myConstants.offSetX, y: myConstants.height/2 + myConstants.offSetY},
                {x: (myConstants.width - 20)/2 + myConstants.offSetX, y: myConstants.height/2 + myConstants.offSetY},
                {x: (myConstants.width - 40)/2 + myConstants.offSetX, y: myConstants.height/2 + myConstants.offSetY},
                {x: (myConstants.width - 60)/2 + myConstants.offSetX, y: myConstants.height/2 + myConstants.offSetY},
                {x: (myConstants.width - 80)/2 + myConstants.offSetX, y: myConstants.height/2 + myConstants.offSetY}
                
            ],
            dx: 10, dy: 0, foodX: 0, foodY: 0, } 
    }



    resetState = () => {
        this.setState()
    }

    handleKeyPress = event => {
        //Check which direction currently moving to prevent direction reversal
        const {dx, dy} = this.state 
        let newDx, newDy
        const dir = event.key
        const goingDown = dy === -10
        const goingUp = dy === 10
        const goingRight = dx === 10
        const goingLeft = dx === -10
        if (dir === "ArrowUp" && !goingDown){
          newDx = 0; newDy = 10
        }
        else if (dir === "ArrowDown" && !goingUp){
          newDx = 0; newDy = -10
        }
        else if (dir === "ArrowLeft" && !goingRight){
          newDx = -10; newDy = 0
        }
        else if (dir === "ArrowRight" && !goingLeft){
          newDx = 10; newDy = 0
        }
        this.setState({...this.state, dx: newDx, dy: newDy})
    }

    gameOver = () => {
        const {offSetX, offSetY} = myConstants
        const {snake} = this.state
        const {x, y} = this.state.snake[0] //x and y cord. of head.
        for (let i=1; i < snake.length; i++){
          if (snake[i].x === x && snake[i].y === y){
            return true
          }
        }
        if (x === -10 + offSetX  || x === myConstants.width + offSetX 
            || y === -10 + offSetY || y === myConstants.height + offSetY) {
          return true
        } else {
          return false
        }
      }
    
    moveSnake = () => {
        console.log(this.state.snake)
        const {snake, dx, dy} = this.state
        const {x, y} = this.state.snake[0]
        snake.unshift({x: x + dx, y: y - dy}) //add new move to head
        snake.pop() 
        this.setState({
            ...this.state, snake
        })
      }

    componentDidMount() {
        const gameInterval = setInterval(() => {
            if (this.gameOver()){
                clearInterval(gameInterval)
            } else {
                this.moveSnake()
            }}
        , 100)}

    render() {
        return (
        <>
        <SnakeBoard 
            width={myConstants.width} 
            height={myConstants.height}
            offSetX={myConstants.offSetX}
            offSetY={myConstants.offSetY}

            snake={this.state.snake}/>
        <button onClick={this.pauseGame} > Pause</button>
        </>
            )}


}
export default SnakeContainer;
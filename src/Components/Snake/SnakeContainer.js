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
    offSetY: 100,
    snakeWidth: 10
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
            dx: 10, dy: 0, foodX: 0, foodY: 0, score: 0,
            addTail: false, didCreateFood: false, runInterval: true }

    }



    resetState = () => {
        this.setState({
          snake:[
              {x: (myConstants.width)/2 + myConstants.offSetX, y: myConstants.height/2 + myConstants.offSetY},
              {x: (myConstants.width - 20)/2 + myConstants.offSetX, y: myConstants.height/2 + myConstants.offSetY},
              {x: (myConstants.width - 40)/2 + myConstants.offSetX, y: myConstants.height/2 + myConstants.offSetY},
              {x: (myConstants.width - 60)/2 + myConstants.offSetX, y: myConstants.height/2 + myConstants.offSetY},
              {x: (myConstants.width - 80)/2 + myConstants.offSetX, y: myConstants.height/2 + myConstants.offSetY}
              
          ],
          dx: 10, dy: 0, foodX: 0, foodY: 0, score: 0,
          addTail: false, didCreateFood: false, runInterval: true })
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

    gameOver = snake => { //cant use state snake to avoid rendering a snake outside box
        const {offSetX, offSetY, snakeWidth} = myConstants
        const {x, y} = snake[0] //x and y cord. of head.
        for (let i=1; i < snake.length; i++){
          if (snake[i].x === x && snake[i].y === y){
            return true
          }
        }
        if (x === offSetX - snakeWidth || x === myConstants.width + offSetX 
            || y === offSetY - snakeWidth || y === myConstants.height + offSetY) {
          return true
        } else {
          return false
        }
      }

    createFood = () => {
        if (!this.state.didCreateFood){
            const foodX = Math.floor(Math.random() * myConstants.width/10) * 10 + myConstants.offSetX 
            const foodY = Math.floor(Math.random() * myConstants.height/10) * 10 + myConstants.offSetY
            this.setState({
                ...this.state, foodX, foodY, didCreateFood: true
            })
        }
    }

    didEatFood = () => {
        const {snake, foodX, foodY} = this.state
        return (snake[0].x === foodX && snake[0].y === foodY)
    }
    
    moveSnake = () => {
        const {snake, dx, dy} = this.state
        const {x, y} = this.state.snake[0]
        snake.unshift({x: x + dx, y: y - dy}) //add new move to head
        if (this.gameOver(snake)){
          this.setState({...this.state, runInterval: false})
          return
        } 
        if (this.didEatFood()) {
          this.setState({
            ...this.state, snake, addTail: true, didCreateFood: false, score: this.state.score + 1
          })
        }
        else {
          snake.pop()
          this.setState({
              ...this.state, snake, addTail: false
          })
         } 
      }

    componentDidMount() {
      this.createFood()
        setInterval(() => {
            if (this.state.runInterval){
            this.createFood()
            this.moveSnake()}}
        , 100)
      }

    render() {
        return (
        <>
        <h2> score: {this.state.score} </h2>
        <SnakeBoard 
            width={myConstants.width} 
            height={myConstants.height}
            offSetX={myConstants.offSetX}
            offSetY={myConstants.offSetY}
            snakeWidth={myConstants.snakeWidth}
            snake={this.state.snake}
            foodX={this.state.foodX}
            foodY={this.state.foodY}/>
        <button onClick={this.resetState} > Replay </button>
            </>
            )}


}
export default SnakeContainer;
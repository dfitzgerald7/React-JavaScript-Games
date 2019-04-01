import React, { Component } from 'react';
import BrickbreakerBoard from './BrickbreakerBoard'
import BrickbreakerGameOver from './BrickbreakerGameOver'

//height and width must have close multiples for the grid system to work
//8 across, 10 down. blockWidth should be the multiple
const myConstants={ 
    boardWidth: 400, boardHeight: 500, offSetX: 50, offSetY: 100, ballRadius:8, blockWidth: 50
}

class BrickbreakerContainer extends Component {

    constructor() {
        super()
        document.addEventListener("click", this.handleClick)
        document.addEventListener("mousemove", this.handleMouseMove)
        const blockArray = this.createNewBlockArray()
        const {boardWidth, boardHeight, offSetX, offSetY, ballRadius} = myConstants
        this.state = {
            blockArray,
            ballPosition: {ballX: boardWidth/2 + offSetX, ballY: boardHeight - ballRadius + offSetY},
            dx: 0, dy: 0, lineCoordinates: {lineX: boardWidth/2 + offSetX, lineY: boardHeight + offSetY}, 
            canMakeMouseMove: true, score: 0, displayBool: false
        }
    }

    refreshGame = () => {
      console.log("refresh")
      const {boardWidth, boardHeight, offSetX, offSetY, ballRadius} = myConstants
      this.setState({
        blockArray: this.createNewBlockArray(),
        ballPosition: {ballX: boardWidth/2 + offSetX, ballY: boardHeight - ballRadius + offSetY},
        dx: 0, dy: 0, lineCoordinates: {lineX: boardWidth/2 + offSetX, lineY: boardHeight + offSetY}, 
        canMakeMouseMove: true, score: 0, displayBool: false
      })
      this.newBlocks()
    }

    //used to have mouse clicks in all directions have a constant velocity
    buildUnitVector = (x0, y0, x1, y1) => { //todo
        let netX = x1 - x0; let netY = y1 - y0
        let magnitude = Math.sqrt( Math.pow(netX, 2) + Math.pow(netY, 2))
        return {unitX: netX/magnitude, unitY: netY/magnitude, mag: magnitude}
      }

    createNewBlockArray = () => {
        let blockArray = []
        for (let i=0; i < 9; i++){
          blockArray.push([0, 0, 0, 0, 0, 0, 0, 0])
        }
        return blockArray
    }

    //creates a new row of blocks 
    //Currently gives all blocks a a number between 1 and 5.
    //once I add multiple balls, that number should be a ratio based on the score.
    newBlocks = () => { //create 2d array to track blocks
        const {blockArray} = this.state
        blockArray.unshift(blockArray[0].map(block => (Math.random() > .4) ? Math.floor(5*Math.random()) : 0))
        blockArray.pop()
        this.setState({
            ...this.state, blockArray
        })
      }
    // gives the direction for the ball then disables being able to click mouse
    handleClick = event => {
      if (this.state.canMakeMouseMove){
        const {clientX, clientY} = event
        const {unitX, unitY} = this.buildUnitVector(myConstants.boardWidth/2 + myConstants.offSetX, myConstants.boardHeight + myConstants.offSetY, clientX, clientY)
        this.setState({
            ...this.state, dx: unitX, dy: unitY, canMakeMouseMove: false, lineCoordinates: {lineX: myConstants.boardWidth/2 + myConstants.offSetX, lineY: myConstants.boardHeight + myConstants.offSetY}
        })
        // this.newBlocks()
        const levelInterval = setInterval(() => this.moveBall(levelInterval), 1)
      }
    }  

    handleMouseMove = event => {
      if (this.state.canMakeMouseMove){
        const {clientX, clientY} = event
        this.setState({
            ...this.state, lineCoordinates: {lineX: clientX, lineY: clientY}
        })
      }
    }

    //handles the movement of one "unit" of movement. Currently works but needs to be refined
    //If ball hits between 2 blocks it can go through.
    //sometimes does not register a collision in x direction. 
    moveBall = levelInterval => {
        const {boardWidth, boardHeight, offSetX, offSetY, ballRadius} = myConstants
        let {ballX, ballY} = this.state.ballPosition
        let {dx, dy, blockArray} = this.state
        if (ballY > boardHeight + offSetY - ballRadius){ //only way to end a level
          this.nextLevel(levelInterval)
          return
        }
        if (ballX < offSetX + ballRadius || ballX > offSetX + boardWidth - ballRadius) { dx = -dx } //collision logic
        if (ballY < offSetY + ballRadius || ballY > offSetY + boardHeight - ballRadius) { dy = -dy }
        for (let i = 0; i<8; i++){ // yikes on this nested for loop. need to rework
          for (let j = 0; j<8; j++){
            if (blockArray[i][j] >= 1){
              const blockXLeft = boardWidth/8*j + offSetX; const blockYTop = boardHeight/10*(i+1) + offSetY
              const blockXRight = boardWidth/8*(j+1) + offSetX ; const blockYBottom = boardHeight/10*(i+2) + offSetY
              const roundX = Math.round(ballX)
              //checks if the 4 x and y points on the ball collided
              if (((blockXLeft <= ballX + ballRadius && ballX + ballRadius <= blockXRight) || (blockXLeft <= ballX - ballRadius && ballX - ballRadius <= blockXRight))
                && ((blockYTop <= ballY + ballRadius && ballY + ballRadius <= blockYBottom ) || (blockYTop <= ballY - ballRadius && ballY - ballRadius <= blockYBottom))){
                blockArray[i][j] -= 1 // delete block that is detected as hit
                //determine if a horizonal or vertical collision
                if (Math.abs(roundX + ballRadius - blockXLeft) < 2
                    || Math.abs(roundX + ballRadius - blockXRight) < 2
                    || Math.abs(roundX - ballRadius - blockXLeft) < 2
                    || Math.abs(roundX - ballRadius - blockXRight) < 2) {
                  dx = -dx //change direction
                } else {
                  dy = -dy
                }
              }
              }
            }
          }
          
          ballX += dx; ballY += dy
          this.setState({
              ...this.state, blockArray, dx, dy, ballPosition: {ballX, ballY}
          })
        }

    gameOver = () => {
      if (this.state.blockArray[8].join("") !== "00000000"){
        this.setState({
          ...this.state, displayBool: true, canMakeMouseMove: false
        })
        return true
      } else {
        return false
      }
    }

    //resets the state except for the block array. gets new line of blocks
    //should have an animation aspect that could be async?
    nextLevel = levelInterval => {
      const {boardWidth, boardHeight, offSetX, offSetY, ballRadius} = myConstants
      clearInterval(levelInterval)
      this.newBlocks() 
      if (this.gameOver()){
        console.log("game over")
      } else {
        this.setState({
          ...this.state,
          ballPosition: {ballX: boardWidth/2 + offSetX, ballY: boardHeight - ballRadius + offSetY},
          dx: 0, dy: 0, lineCoordinates: {lineX: boardWidth/2, lineY: boardHeight}, 
          canMakeMouseMove: true, score: this.state.score+1
        })
      }
    }

    componentDidMount(){
        this.newBlocks()
    }


    render() { 
        return (
        <div className={"Board-Container"} >
          <h2 className={"Score"}> Score: {this.state.score} </h2>
          <BrickbreakerBoard 
          width={myConstants.boardWidth} 
          height={myConstants.boardHeight}
          blockWidth={myConstants.blockWidth}
          offSetX={myConstants.offSetX}
          offSetY={myConstants.offSetY}
          ballRadius={myConstants.ballRadius}
          blockArray={this.state.blockArray}
          ballPosition={this.state.ballPosition}
          lineCoordinates={this.state.lineCoordinates}
          />
          <div className={"GameOver"}>
            < BrickbreakerGameOver displayBool={this.state.displayBool} handleClick={this.refreshGame}/>
          </div>
        </div>
        )
    }
}
 
export default BrickbreakerContainer;
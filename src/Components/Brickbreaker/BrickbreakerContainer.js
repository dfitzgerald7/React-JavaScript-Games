import React, { Component } from 'react';
import BrickbreakerBoard from './BrickbreakerBoard'

//height and width must have close multiples for the grid system to work
//8 across, 10 down. blockWidth should be the multiple
const myConstants={ 
    boardWidth: 400, boardHeight: 500, offSetX: 50, offSetY: 100, ballRadius:10, blockWidth: 50
}

class BrickbreakerContainer extends Component {

    constructor() {
        super()
        document.addEventListener("click", this.handleClick)
        const blockArray = this.createNewBlockArray()
        const {boardWidth, boardHeight, offSetX, offSetY, ballRadius} = myConstants
        this.state = {
            blockArray,
            ballPosition: {ballX: boardWidth/2 + offSetX, ballY: boardHeight - ballRadius + offSetY} 
        }
    }

    createNewBlockArray = () => {
        let blockArray = []
        for (let i=0; i < 9; i++){
          blockArray.push([0, 0, 0, 0, 0, 0, 0, 0])
        }
        return blockArray
    }

    newBlocks = () => { //create 2d array to track blocks
        const {blockArray} = this.state
        blockArray.unshift(blockArray[0].map(block => (Math.random() > .4) ? 1 : 0))
        blockArray.pop()
        this.setState({
            ...this.state, blockArray
        })
      }

    handleClick = event => {
        this.newBlocks()
    }  

    componentDidMount(){
        this.newBlocks()
    }


    render() { 
        return <BrickbreakerBoard 
        width={myConstants.boardWidth} 
        height={myConstants.boardHeight}
        blockWidth={myConstants.blockWidth}
        offSetX={myConstants.offSetX}
        offSetY={myConstants.offSetY}
        ballRadius={myConstants.ballRadius}
        blockArray={this.state.blockArray}
        ballPosition={this.state.ballPosition}
        />
    
    }
}
 
export default BrickbreakerContainer;
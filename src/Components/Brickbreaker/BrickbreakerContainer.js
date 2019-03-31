import React, { Component } from 'react';
import BrickbreakerBoard from './BrickbreakerBoard'

//height and width must have close multiples for the grid system to work
//8 across, 10 down. blockWidth should be the multiple
const myConstants={ 
    boardWidth: 400, boardHeight: 500, offSetX: 50, offSetY: 100, ballRadius:5, blockWidth: 50
}

class BrickbreakerContainer extends Component {

    constructor() {
        super()
        const blockArray = this.createNewBlockArray()
        this.state = {
            blockArray,
            ballPosition: {ballX: myConstants.boardWidth/2, ballY: myConstants.boardHeight + myConstants.ballRadius} 
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
        blockArray.unshift(blockArray[0].map(block => Math.random() > .5 ? 1 : 0))
        blockArray.pop()
        this.setState({
            ...this.state, blockArray
        })
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
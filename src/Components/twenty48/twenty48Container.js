import React, { Component } from 'react';
import Twenty48Board from './Twenty48Board'

const myConst = {
    offSetX:100, offSetY: 100, width: 400
}


class Twenty48Container extends Component {
    constructor() {
        super()
        document.addEventListener('keydown', this.handleKeyPress)
        this.state = {
            blocks: [{x: 100, y:100, num:2}, {x:200, y:200, num:2}]
        }
    }

    handleKeyPress = event => {
        if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key)){
            event.preventDefault()
            const {dir, delta} = this.newBlockCoords(event.key)
            let blocks = this.state.blocks
            blocks.map(block => {
                if (block[dir] + delta >= 0 && block[dir] + delta < myConst.width){
                    console.log('true')
                    return block[dir] += delta
                } else {
                    return null
                }
            })
            // const filteredBlocks = blocks.filter(item => item)
            this.setState(blocks)
        }
    }

    
    newBlockCoords = direction => {
        switch (direction){
            case 'ArrowRight':
                return {dir: 'x' ,delta: 100}
            case 'ArrowLeft':
                return {dir: 'x', delta: -100}
            case 'ArrowUp':
                return {dir: 'y', delta: -100}
            case 'ArrowDown':
                return {dir: 'y', delta: 100}
            default:
        }
    }

    componentDidMount() {
        //create initial blocks
    }

    render() { 
        return ( 
            <Twenty48Board 
                offSetX={myConst.offSetX} 
                offSetY={myConst.offSetY}
                width={myConst.width}
                blocks={this.state.blocks}
                /> );
    }
}
 
export default Twenty48Container;
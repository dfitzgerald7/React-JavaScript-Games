import React, { Component } from 'react';
import Twenty48Board from './Twenty48Board'

const myConst = {
    offSetX:100, offSetY: 100, width: 400
}


class Twenty48Container extends Component {
    constructor() {
        super()
        document.addEventListener('keydown', this.handleKeyPress)
    }

    handleKeyPress = event => {
        event.preventDefault()
        console.log(event)
    }

    render() { 
        return ( 
            <Twenty48Board 
                offSetX={myConst.offSetX} 
                offSetY={myConst.offSetY}
                width={myConst.width}
                /> );
    }
}
 
export default Twenty48Container;
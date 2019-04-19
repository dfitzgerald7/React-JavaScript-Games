import React, { Component } from 'react';
import Twenty48Blocks from './Twenty48Blocks.js'
const Twenty48Board = props => {
    return ( 
        <svg width='1000' height='1000'> 

            <rect x={props.offSetX} y={props.offSetY} 
                width={props.width}
                height={props.width}
                style={{fill:'white', stroke:'black'}} />
            <Twenty48Blocks offSetX={props.offSetX} offSetY={props.offSetY}
                width={props.width}/>
        </svg>
     );
}
 
export default Twenty48Board;
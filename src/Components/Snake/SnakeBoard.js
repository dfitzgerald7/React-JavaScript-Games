import React, { Component } from 'react';


const SnakeBoard = props => {
    
    return ( 
        <svg width="700" height="700">
            <rect x={props.offSetX} y={props.offSetY} width={props.width} height={props.height}
            style={{fill: 'white', stroke: 'black'}} />
            {props.snake.map((snakePart, index) => {
                return <rect key={index} x={snakePart.x} y={snakePart.y} width="10" height="10" 
                    style={{fill:"red", stroke:"black"}}/>
            })}
        </svg>
     );
}
 
export default SnakeBoard;
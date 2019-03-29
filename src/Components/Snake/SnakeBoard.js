import React from 'react';


const SnakeBoard = props => {
    
    return ( 
        <svg width="700" height="700">
            <rect x={props.offSetX} y={props.offSetY} width={props.width} height={props.height}
            style={{fill: 'white', stroke: 'black'}} />
            {props.snake.map((snakePart, index) => { //draw snake 
                return <rect key={index} x={snakePart.x} y={snakePart.y} width={props.snakeWidth} height={props.snakeWidth}
                    style={{fill:"red", stroke:"black"}}/>
            })}
            <rect x={props.foodX} y={props.foodY} width={props.snakeWidth} height={props.snakeWidth} 
            style={{fill:"blue", stroke:"black"}}/>
        </svg>
     );
}
 
export default SnakeBoard;
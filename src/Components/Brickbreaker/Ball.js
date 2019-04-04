import React from 'react'; 

const Ball = props => {
    const {ballX, ballY} = props.ballPosition
    const ballArray = []
    for (let i = 0; i < props.numOfBalls; i++){
        ballArray.push(
            <circle cx={ballX} cy={ballY + (props.dy * 15 * i)} r={props.ballRadius} stroke="black" strokeWidth="3" fill="red" />
        )
    }

    return ( 
        <svg>
            {ballArray}
        </svg>
     );
}
 
export default Ball

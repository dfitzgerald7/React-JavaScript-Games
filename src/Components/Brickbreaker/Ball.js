import React from 'react'; 

const Ball = props => {
    console.log("ball", props)
    const {ballX, ballY} = props.ballPosition
    return ( 
        <svg>
            <circle cx={ballX} cy={ballY} r={props.ballRadius} stroke="black" strokeWidth="3" fill="red" />
        </svg>
     );
}
 
export default Ball

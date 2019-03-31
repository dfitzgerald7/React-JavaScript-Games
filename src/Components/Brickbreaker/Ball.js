import React from 'react'; 

const Ball = props => {
    const {ballX, ballY, ballRadius} = props
    return ( 
        <circle cx={ballX} cy={ballY} r={ballRadius} stroke="black" strokeWidth="3" fill="red" />
     );
}
 
export default Ball

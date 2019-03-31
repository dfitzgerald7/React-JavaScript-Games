import React from 'react'; 
import Blocks from "./Blocks"
import Ball from "./Ball"

const BrickbreakerBoard = props => {
        return (
        <>
        <svg width="700" height="700">
            <rect x={props.offSetX} y={props.offSetY} width={props.width} height={props.height}
            style={{fill: 'white', stroke: 'black'}} /> );
            <Blocks blockArray={props.blockArray} 
            blockWidth={props.blockWidth} 
            boardWidth={props.width} 
            boardHeight={props.height}
            offSetX={props.offSetX}
            offSetY={props.offSetY}/>
            <Ball ballPosition={props.ballPosition} ballRadius={props.ballRadius}/>
        </svg>
        </>
        )
    }
 
export default BrickbreakerBoard;
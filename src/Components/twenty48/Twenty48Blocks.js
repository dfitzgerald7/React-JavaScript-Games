import React from 'react';

const Twenty48Blocks = props => {

    return ( 
        <svg>
            {props.blocks.map((block, index) => {
                return (<rect x={props.offSetX + block.x} y={props.offSetY + block.y}
                width={props.width/4} height={props.width/4}
                style={{fill: 'blue'}} key={index}
                />)
            })}
        </svg>
    )
}
 
export default Twenty48Blocks;
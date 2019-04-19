import React from 'react';

const Twenty48Blocks = props => {
    console.log(props.blocks.length)
    return ( 
         <>
            {props.blocks.map((block, index) => {
                return (
                    <svg key={index}>
                        <rect x={props.offSetX + block.x} y={props.offSetY + block.y}
                        width={props.width/4} height={props.width/4} style={{fill: 'red', stroke: 'black'}}/>
                        <text x={props.offSetX + block.x + 50} 
                        y={props.offSetY + block.y + 50}> {block.num} </text>
                    </svg>
                )
            })}
            </>
            )

        
}
 
export default Twenty48Blocks;
import React from 'react'; 

const Blocks = props => {
    const renderedBlocks = []
    props.blockArray.forEach((blockRow, verticalIndex) => {
        blockRow.forEach((block, horizontalIndex) => {
            if (block>=1){
               renderedBlocks.push({block, horizontalIndex, verticalIndex})
            }
        })
    })
    console.log("block")
    return ( 
        
        <svg>
            {renderedBlocks.map(block => {
                const myKey = block.verticalIndex.toString() + block.horizontalIndex
                const myX = props.boardWidth/8 * block.horizontalIndex + props.offSetX
                const myY = props.boardHeight/10 * (block.verticalIndex + 1) + props.offSetY
                return (
                    <React.Fragment key={myKey}>
                    <rect 
                    x={myX} y={myY}
                    width={props.blockWidth} height={props.blockWidth}
                    stroke="black" fill="red"/>
                    <text x={myX + props.blockWidth* 3/8} y={myY + props.blockWidth*5/8} fill="white"> {block.block} </text>
                    </React.Fragment>
                )
                }
                )
            }
        </svg>
    )
}
 
export default Blocks;
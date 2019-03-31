import React from 'react'; 

const Blocks = props => {
    const renderedBlocks = []
    console.log(props.blockArray)
    props.blockArray.forEach((blockRow, verticalIndex) => {
        blockRow.forEach((block, horizontalIndex) => {
            if (block===1){
               renderedBlocks.push({horizontalIndex, verticalIndex})
            }
        })
    })

    console.log(renderedBlocks)
    return ( 
        <svg>
            {renderedBlocks.map(block => {
                const myKey = block.verticalIndex.toString() + block.horizontalIndex
                const myX = props.boardWidth/8 * block.horizontalIndex + props.offSetX
                const myY = props.boardHeight/10 * block.verticalIndex + props.offSetY
                return (<rect key={myKey}
                    x={myX} y={myY}
                    width={props.blockWidth} height={props.blockWidth}
                    stroke="black" fill="red"/>)
                }
                )
            }
        </svg>
    )
}
 
export default Blocks;
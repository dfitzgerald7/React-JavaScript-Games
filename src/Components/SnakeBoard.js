import React from 'react'; 

const SnakeBoard = props => {
    const myConstants = {CANVAS_BORDER_COLOR: 'black', 
    CANVAS_BACKGROUND_COLOR: "white",
    SNAKE_COLOR: 'lightgreen', 
    SNAKE_BORDER_COLOR: 'darkgreen'}

    


    return ( 
    <>
        <h1> Snake </h1>
        <h2 id="scoreVal"> {props.score} </h2>
        
    </>
    )
}
 
export default SnakeBoard;
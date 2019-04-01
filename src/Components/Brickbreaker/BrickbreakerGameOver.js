import React from 'react';

const BrickbreakerGameOver = props => {

    if (props.displayBool){
        return ( 
            <>
                <h2> Game Over </h2>
                <button onClick={props.handleClick}> Replay </button> 
            </>
        );
    } else {
        return null
    }
}
 
export default BrickbreakerGameOver;
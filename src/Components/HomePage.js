import React, {Component} from "react"
import {Link} from "react-router-dom"

class HomePage extends Component {
    render() {
        return (
            <>
             <h2>Welcome to The JavaScript Mini-Games</h2>
            <Link to="games/snake"> Snake </Link> <br/>
            <Link to="games/brickbreaker"> Brickbreaker </Link>
            </>
             )
            }
}

export default HomePage
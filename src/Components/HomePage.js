import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import {Col, Row} from "react-materialize"

class HomePage extends Component {
    render() {
        return (
            <>
            <Row className={'center-align'}>
                <h2 className={'center-align'}>Welcome to JavaScript Mini-Games</h2>
                <h4> Click a game below. </h4>
             </Row>
            <Row className={'center-align'}>
                <Col l={4}>
                    <NavLink className={"btn waves-effect waves-light"} to="games/snake"> Snake </NavLink> <br/>
                </Col>
                <Col l={4}>
                    <NavLink className={"btn waves-effect waves-light"} to="games/brickbreaker"> Brickbreaker </NavLink>
                </Col>
                <Col l={4}>
                    <NavLink className={"btn waves-effect waves-light"} to="games/2048"> 2048 </NavLink>
                </Col>
            </Row>
            </>
             )
            }
}

export default HomePage
import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import {Col, Row} from "react-materialize"

class HomePage extends Component {
    render() {
        return (
            <>
            <Row className={'center-align'}>
                <h2 className={'center-align'}>Welcome to The JavaScript Mini-Games</h2>
             </Row>
            <Row className={'center-align'}>
                <Col l={6}>
                    <NavLink className={"btn waves-effect waves-light"} to="games/snake"> Snake </NavLink> <br/>
                </Col>
                <Col l={6}>
                    <NavLink className={"btn waves-effect waves-light"} to="games/brickbreaker"> Brickbreaker </NavLink>
                </Col>
            </Row>
            </>
             )
            }
}

export default HomePage
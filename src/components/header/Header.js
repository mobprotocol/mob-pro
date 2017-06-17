import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

const headerStyle = {
  height: 90,
  color: '#29353d'
}
export default class Header extends Component {
  render() {
    return (
      <Row style={headerStyle}>
        <Col sm={3}>
          <h3 style={{ float: 'left'}}>
            <img src='./src/imgs/mob_logo.png' style={{ paddingRight: 10, paddingLeft: 10 }} />
            MOB PRO
          </h3>
        </Col>
        <Col sm={3} style={{ backgroundColor: '#b0b4b7', height: '100%'}}>
        </Col>
        <Col sm={3} style={{ backgroundColor: '#9ca1a6', height: '100%'}}>
        </Col>
      </Row>
    )
  }
}

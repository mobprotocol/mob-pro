import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

const headerStyle = {
  height: 100
}
export default class Header extends Component {
  render() {
    return (
      <Row style={headerStyle}>
        <Col sm={9}>
          <h3 style={{ float: 'left'}}>
            <img src='./src/imgs/mob_logo.png' style={{ paddingRight: 10, paddingLeft: 10 }} />
            MOB PRO
          </h3>
        </Col>
      </Row>
    )
  }
}

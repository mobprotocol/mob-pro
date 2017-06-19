import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import TokenA from './TokenA'
import TokenB from './TokenB'
import Notifications from './Notifications'

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
        <Col sm={3} style={{ height: '100%'}}>
          <TokenA />
        </Col>
        <Col sm={3} style={{ height: '100%'}}>
          <TokenB />
        </Col>
        <Col sm={3} sytle={{ height: '100%'}}>
          <Notifications />
        </Col>
      </Row>
    )
  }
}

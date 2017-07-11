import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import TokenA from './TokenA'
import TokenB from './TokenB'
import Notifications from './Notifications'

const headerStyle = {
  height: 90,
  color: '#29353d'
}

const colStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
export default class Header extends Component {
  render() {
    return (
      <Row style={headerStyle}>
        <Col sm={3} style={ colStyle }>
          <h3>
            <img src='./src/imgs/mob_logo.png' style={{ paddingRight: 10, paddingLeft: 10 }} />
            MOB PRO
          </h3>
        </Col>
        <Col sm={3} style={ colStyle }>
          <TokenA />
        </Col>
        <Col sm={3} style={ colStyle }>
          <TokenB />
        </Col>
        <Col sm={3} style={ colStyle, { height: '100%'}}>
          <Notifications />
        </Col>
      </Row>
    )
  }
}

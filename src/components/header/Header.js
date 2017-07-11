import React, { Component } from 'react'
import { Row, Col, Modal } from 'react-bootstrap'

import TokenA from './TokenA'
import TokenB from './TokenB'
import Notifications from './Notifications'
import ChooseToken from './ChooseToken'

const headerStyle = {
  height: 90,
  color: '#29353d'
}

const colStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
}

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }

  handleClick(e) {
    console.log('clicked token!!!')
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <Row style={headerStyle}>
        <Col sm={3} style={ colStyle }>
          <h3>
            <img src='./src/imgs/mob_logo.png' style={{ paddingRight: 10, paddingLeft: 10 }} />
            MOB PRO
          </h3>
        </Col>
        <Col sm={3} style={ colStyle } onClick={(e) => { this.handleClick() }}>
          <TokenA />
        </Col>
        <Col sm={3} style={ colStyle } onClick={(e) => { this.handleClick() }}>
          <TokenB />
        </Col>
        <Col sm={3} style={ colStyle, { height: '100%'}}>
          <Notifications />
        </Col>
        <Modal show={this.state.show}>
          <Modal.Header>
            Choose Token
          </Modal.Header>
        </Modal>
      </Row>
    )
  }
}

import React, { Component } from 'react'
import { Row, Col, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'

import TokenA from './TokenA'
import TokenB from './TokenB'
import Notifications from './Notifications'
import ChooseToken from './ChooseToken'

const headerStyle = {
  height: 80,
  color: '#29353d'
}

const colStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
}

class Header extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }

  handleClick(type) {
    if(type) {
      this.props.dispatch({ type: 'CHANGE_TOKEN_TYPE', data: type })
    }
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <Row style={headerStyle}>
        <Col sm={3} style={ colStyle } onClick={() => { this.handleClick('A') }}>
          <TokenA />
        </Col>
        <Col sm={3} style={ colStyle } onClick={() => { this.handleClick('B') }}>
          <TokenB />
        </Col>
        <Col sm={3} style={ colStyle, { height: '100%'}}>
          <Notifications />
        </Col>
        <Modal show={this.state.show} style={{ maxHeight: 400, fontFamily: 'roboto' }}>
          <Modal.Header>
            <div style={{ display: 'flex', flexDirection: 'row'}}>
              <h3>CHOOSE TOKEN</h3>
              <div>
                <img
                  src='./src/imgs/x.png'
                  style={{ position: 'absolute', right: 10, top: 10 }}
                  onClick={(e) => { this.handleClick() }}
                  />
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <ChooseToken />
          </Modal.Body>
        </Modal>
      </Row>
    )
  }
}

const mapStoreToProps = (store) => {
  return store.token
}

export default connect(mapStoreToProps)(Header)

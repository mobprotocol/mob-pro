import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import Commands from './Commands'
import OrderBook from './orderbook/Orderbook'

const contentStyle = {
  height: '100%',
  paddingRight: '-10'
}

const orderBookStyle = {
  backgroundColor: '#29353d',
  color: '#FFF',
  height: '100%',
  width: '100%'
}

export default class Content extends Component {
  render() {
    return (
      <Row style={contentStyle}>
        <Col sm={3} style={{backgroundColor: '#e8e9ed', height: '100'}}>
        </Col>
        <Col sm={3} style={{ backgroundColor: '#29353d'}}>
          <OrderBook />
        </Col>
        <Col sm={6} style={{ backgroundColor: '#3a444d', height: '100%'}}>
        </Col>
      </Row>
    )
  }
}

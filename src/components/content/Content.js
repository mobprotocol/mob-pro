import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import Commands from './commands/Commands'
import OrderBook from './orderbook/Orderbook'
import Market from './market/Market'
import { Socket } from '../../actions/index'

const contentStyle = {
  height: '100%',
}

const orderBookStyle = {
  backgroundColor: '#29353d',
  color: '#FFF',
  height: '100%',
  width: '100%'
}

class Content extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log('this.props', this.props)
  }

  render() {
    return (
      <Row style={contentStyle}>
        <Col sm={3} style={{ height: '100%'}}>
          <Commands />
        </Col>
        <Col sm={3} style={{ backgroundColor: '#29353d'}}>
          <OrderBook />
        </Col>
        <Col sm={6} style={{ backgroundColor: '#3a444d', height: '100%'}}>
          <Market />
        </Col>
      </Row>
    )
  }
}

const mapStoreToProps = (store) => {
  return ({})
}

export default connect(mapStoreToProps)(Content)

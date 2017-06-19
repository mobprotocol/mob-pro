import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

const tradeStyle = {
  height: '50%',
  backgroundColor: '#9ca1a6'
}
export default class Trade extends Component {
  constructor() {
    super()
    this.state = {
      marketPrice: '1.450000',
      quantity: '100',
      sendAmount: '30',
      receiveAmount: '45'
    }
  }
  render() {
    return (
      <Row style={tradeStyle}>
      {/**
        <div style={{ height: '40', display: 'inline'}}>
          <div style={{ width: '33%', float: 'left' }}>L</div>
          <div style={{ width: '33%', float: 'left' }}></div>
          <div style={{ width: '33%', float: 'left' }}></div>
        </div>
      */}
        <div style={{ height: '25%'}}>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h3>Price</h3>
          </div>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center'}}>
            <h3>{this.state.marketPrice}</h3>
          </div>
        </div>
        <div style={{ height: '25%' }}>

        </div>
        <div style={{ height: '25%' }}>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h3>Send</h3>
          </div>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h3>{this.state.sendAmount}</h3>
          </div>
        </div>
        <div style={{ height: '25%' }}>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h3>Receive</h3>
          </div>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h3>{this.state.receiveAmount}</h3>
          </div>
        </div>
      </Row>
    )
  }
}

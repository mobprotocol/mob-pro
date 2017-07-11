import 'react-rangeslider/lib/index.css'

import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import Slider from 'react-rangeslider'

const tradeStyle = {
  height: '50%',
  backgroundColor: '#9ca1a6',
  marginLeft: 0 
}
export default class Trade extends Component {
  constructor() {
    super()
    this.state = {
      marketPrice: '1.450000',
      quantity: 10,
      sendAmount: '30',
      receiveAmount: '45'
    }
  }

  handleSliderChange(e) {
    console.log('slider changing')
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
        <div style={{ height: '20%'}}>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h1 style={{ fontWeight: 100 }}>Price</h1>
          </div>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center'}}>
            <h1 style={{ fontWeight: 100 }}>{this.state.marketPrice}</h1>
          </div>
        </div>
        <div style={{ height: '20%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '90%' }}>
            <Slider
              value={this.state.quantity}
              oriantation="horizontal"
              onChange={this.handleSliderChange}
            />
          </div>
        </div>
        <div style={{ height: '20%' }}>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h1 style={{ fontWeight: 100 }}>Send</h1>
          </div>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h1 style={{ fontWeight: 100 }}>{this.state.sendAmount}</h1>
          </div>
        </div>
        <div style={{ height: '20%' }}>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h1 style={{ fontWeight: 100 }}>Receive</h1>
          </div>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h1 style={{ fontWeight: 100 }}>{this.state.receiveAmount}</h1>
          </div>
        </div>
      </Row>
    )
  }
}

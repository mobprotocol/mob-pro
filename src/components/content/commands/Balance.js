import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

const balanceStyle = {
  backgroundColor: '#b0b4b7',
  height: '50%',
  paddingLeft: 50
}
export default class Balance extends Component {
  constructor() {
    super()
    this.state = {
      tokenA: 'USD',
      tokenB: 'ETH',
      tokenAamount: 10.00000000,
      tokenBamount:  10.00000000
    }
  }

  render() {
    return (
      <Row style={balanceStyle}>
        <div style={{ height: '25%'}}>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h3>{this.state.tokenA}</h3>
          </div>
          <div style={{ width: '50%', display: 'inline', float: 'left'}}>
            <h3>{this.state.tokenAamount}</h3>
          </div>
        </div>
        <div style={{ height: '25%'}}>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center' }} >
            <h3>{this.state.tokenB}</h3>
          </div>
          <div style={{ width: '50%', display: 'inline', float: 'left' }}>
            <h3>{this.state.tokenBamount}</h3>
          </div>
        </div>
        <div style={{ height: '25%', textAlign: 'center' }}>
          <h3>Deposit</h3>
        </div>
        <div style={{ height: '25%', textAlign: 'center' }}>
          <h3>Withdraw</h3>
        </div>
      </Row>
    )
  }
}

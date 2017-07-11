import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'

const balanceStyle = {
  backgroundColor: '#b0b4b7',
  height: '50%',
  fontWeight: 100
}

class Balance extends Component {
  constructor() {
    super()
    this.state = {
      tokenA: 'USD',
      tokenB: 'ETH',
      tokenAamount: 10.00000000,
      tokenBamount:  10.00000000,
      fontWeight: 100
    }
  }

  render() {
    console.log('this.props', this.props)
    return (
      <Row style={balanceStyle}>
        <div style={{ height: '25%'}}>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h1 style={{ fontWeight: 100}}>{this.props.tokenA}</h1>
          </div>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center'}}>
            <h1 style={{ fontWeight: 100 }}>{this.state.tokenAamount}</h1>
          </div>
        </div>
        <div style={{ height: '25%'}}>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center' }} >
            <h1 style={{ fontWeight: 100 }}>{this.props.tokenB}</h1>
          </div>
          <div style={{ width: '50%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h1 style={{ fontWeight: 100 }}>{this.state.tokenBamount}</h1>
          </div>
        </div>
        <div style={{ height: '25%', textAlign: 'center' }}>
          <div style={{ backgroundColor: '#3a444d', color: '#FFF', display: 'inline-block', width: '75%', borderRadius: 7 }}>
            <h2>Deposit</h2>
          </div>
        </div>
        <div style={{ height: '25%', textAlign: 'center' }}>
          <div style={{ backgroundColor: '#3a444d', color: '#FFF', display: 'inline-block', width: '75%', borderRadius: 7}}>
            <h2>Withdraw</h2>
          </div>
        </div>
      </Row>
    )
  }
}

const mapStoreToProps = (store) => {
  return store.token
}

export default connect(mapStoreToProps)(Balance)

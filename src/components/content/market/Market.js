import React, { Component } from 'react'
import PriceHistory from './PriceHistory'
import MarketDepth from './MarketDepth'

const marketSyle = {
  width: '100%',
  height: '100%',
  marginRight: 20
}

export default class Market extends Component {
  render() {
    return (
      <div style={marketSyle}>
        <div style={{ height: 40, backgroundColor: '#9ca1a6' }}>
          <div style={{ width: '33%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h4>Price</h4>
          </div>
          <div style={{ width: '33%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h4>Depth</h4>
          </div>
          <div style={{ width: '33%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h4>Volume</h4>
          </div>
        </div>
        <PriceHistory />
        <MarketDepth />
      </div>
    )
  }
}

import React, { Component } from 'react'
import PriceHistory from './PriceHistory'
import MarketDepth from './MarketDepth'

const marketSyle = {
  width: '100%',
  height: '100%',
}

export default class Market extends Component {
  render() {
    return (
      <div style={marketSyle}>
        <div style={{ height: 60, backgroundColor: '#9ca1a6', width: '100%' }}>
          <div style={{ width: '33%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h2>Price</h2>
          </div>
          <div style={{ width: '33%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h2>Depth</h2>
          </div>
          <div style={{ width: '33%', display: 'inline', float: 'left', textAlign: 'center' }}>
            <h2>Volume</h2>
          </div>
        </div>
        <PriceHistory />
        <MarketDepth />
      </div>
    )
  }
}

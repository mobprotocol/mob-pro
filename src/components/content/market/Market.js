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
        <PriceHistory />
        <MarketDepth />
      </div>
    )
  }
}

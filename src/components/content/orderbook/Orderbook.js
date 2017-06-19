import React, { Component } from 'react'

import SellA from './SellA'
import SellB from './SellB'

const orderBookStyle = {
  backgroundColor: '#29353d',
  color: '#FFF',
  height: '100%',
  width: '100%'
}

export default class Orderbook extends Component {
  render() {
    return (
      <div style={orderBookStyle}>
        <SellA />
        <SellB />
      </div>
    )
  }
}

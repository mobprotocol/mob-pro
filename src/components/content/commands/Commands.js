import React, { Component } from 'react'

import Balance from './Balance'
import Trade from './Trade'

const commandStyle = {
  height: '100% ',
  width: '100%',
}

export default class Commands extends Component {
  render() {
    return (
      <div style={commandStyle}>
        <Balance />
        <Trade />
      </div>
    )
  }
}

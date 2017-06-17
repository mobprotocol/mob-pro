import React, { Component } from 'react'

import Balance from './Balance'

const commandStyle = {
  backgroundColor: '#29353d',
  height: '100% ',
  paddingLeft: 25,
  paddingRight: 20
}

export default class Commands extends Component {
  render() {
    return (
      <div style={commandStyle}>
        <Balance />
      </div>
    )
  }
}

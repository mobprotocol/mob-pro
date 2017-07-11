import React, { Component } from 'react'

export default class TokenA extends Component {
  render() {
    const y = '-100%'
    return (
      <h3 style={{ position: 'relative', top: '50%' }}>
        <img src='./src/imgs/brave_logo.png' style={{ paddingRight: 10, paddingLeft: 10 }} />
        ETH
      </h3>
    )
  }
}

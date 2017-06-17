import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

const balanceStyle = {
  height: 300,
  color: '#FFF'
}
export default class Balance extends Component {
  render() {
    return (
      <Row style={balanceStyle}>
        <h3>USD</h3>
        <h3>ETH</h3>
      </Row>
    )
  }
}

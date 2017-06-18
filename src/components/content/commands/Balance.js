import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

const balanceStyle = {
  backgroundColor: '#b0b4b7',
  height: '50%',
  paddingLeft: 50
}
export default class Balance extends Component {
  render() {
    console.log('rendering balance')
    return (
      <Row style={balanceStyle}>
        <h3>USD</h3>
        <h3>ETH</h3>
      </Row>
    )
  }
}

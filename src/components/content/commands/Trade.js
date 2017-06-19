import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

const tradeStyle = {
  height: '50%',
  backgroundColor: '#9ca1a6'
}
export default class Trade extends Component {
  render() {
    return (
      <Row style={tradeStyle}>
        <div style={{ height: '40'}}></div>
        <div></div>
      </Row>
    )
  }
}

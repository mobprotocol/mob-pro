import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import Commands from './Commands'

const contentStyle = {
  height: '100%',
  backgroundColor: '#3a444d'
}
export default class Content extends Component {
  render() {
    return (
      <Row style={contentStyle}>
        <Col sm={3}>
          <Commands />
        </Col>
      </Row>
    )
  }
}

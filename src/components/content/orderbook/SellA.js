import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

const sellAStyle = {
  color: '#FFF',
  paddingTop: 30
}

export default class SellA extends Component {
  sellData() {

  }

  render() {
    return (
      <div style={{ height: '50%', paddingTop: 15}}>
        <Table style={sellAStyle}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Time</th>
            </tr>
          </thead>
        </Table>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

const sellBStyle = {
  height: '50%',
  color: '#FFF'
}

export default class SellB extends Component {
  render() {
    return (
      <div style={{ height: '50%', paddingTop: 15}}>
        <Table style={sellBStyle}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </Table>
      </div>
    )
  }
}

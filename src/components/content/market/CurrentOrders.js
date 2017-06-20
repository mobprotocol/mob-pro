import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

const data = [
  {
    rank: 5,
    price: 0.94,
    quantity: 100,
    fill: 30,
    sent: 32,
    recieved: 68
  },
  {
    rank: 5,
    price: 0.94,
    quantity: 100,
    fill: 30,
    sent: 32,
    recieved: 68
  },
  {
    rank: 5,
    price: 0.94,
    quantity: 100,
    fill: 30,
    sent: 32,
    recieved: 68
  },
  {
    rank: 5,
    price: 0.94,
    quantity: 100,
    fill: 30,
    sent: 32,
    received: 68
  }
]
export default class CurrentOrders extends Component {
  getCurrentOrders() {
    return data.map((datum, i) => {
      return (
        <tr key={i}>
          <th>{datum.rank}</th>
          <th>{datum.price}</th>
          <th>{datum.quantity}</th>
          <th>{datum.fill}</th>
          <th>{datum.sent}</th>
          <th>{datum.received}</th>
        </tr>
      )
    })
  }

  render() {
    return (
      <div style={{ height: '35%', overflow: 'scroll' }}>
        <Table style={{ color: '#FFF' }}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Fill</th>
              <th>Sent</th>
              <th>Received</th>
            </tr>
          </thead>
          <tbody>
            {this.getCurrentOrders()}
          </tbody>
        </Table>
      </div>
    )
  }
}

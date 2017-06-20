import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

const sellAStyle = {
  color: '#FFF',
  paddingTop: 30
}

const data = [
  {
    rank: 1,
    price: .95,
    quantity: 55,
    time: 1234134
  },
  {
    rank: 1,
    price: .95,
    quantity: 55,
    time: 1234134
  },
  {
    rank: 1,
    price: .95,
    quantity: 55,
    time: 1234134
  },
  {
    rank: 1,
    price: .95,
    quantity: 55,
    time: 1234134
  },
  {
    rank: 1,
    price: .95,
    quantity: 55,
    time: 1234134
  },
  {
    rank: 1,
    price: .95,
    quantity: 55,
    time: 1234134
  },
  {
    rank: 1,
    price: .95,
    quantity: 55,
    time: 1234134
  },
  {
    rank: 1,
    price: .95,
    quantity: 55,
    time: 1234134
  },{
    rank: 1,
    price: .95,
    quantity: 55,
    time: 1234134
  }
]

export default class SellA extends Component {
  sellAdata() {
    return data.map((datum, i) => {
      return (
        <tr key={i}>
          <th>{datum.rank}</th>
          <th>{datum.price}</th>
          <th>{datum.quantity}</th>
          <th>{datum.time}</th>
        </tr>
      )
    })
  }

  render() {
    return (
      <div style={{ height: '50%', paddingTop: 15, overflow: 'scroll' }}>
        <Table style={sellAStyle}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {this.sellAdata()}
          </tbody>
        </Table>
      </div>
    )
  }
}

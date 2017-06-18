import React, { Component } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

import data from './PriceHistoryData'

export default class PriceHistory extends Component {
  render() {
    return (
      <LineChart width={'100%'} height={'50%'} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3"
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" strple="#82ca9d" />
      </LineChart>
    )
  }
}

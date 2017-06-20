import React, { Component } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import { data } from './PriceHistoryData'

export default class Volume extends Component {
  render() {
    return (
      <ResponsiveContainer width='100%' height='65%'>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#d6cac2" activeDot={{r: 8}}/>
          <Line type="monotone" dataKey="uv" stroke="#d6cac2" />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

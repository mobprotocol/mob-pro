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
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine
} from 'victory'

import { data } from './PriceHistoryData'

export default class PriceHistory extends Component {
  render() {
    return (
      // <ResponsiveContainer width='100%' height='65%'>
      //   <LineChart data={data}>
      //       <XAxis dataKey="name" />
      //       <YAxis />
      //       <CartesianGrid />
      //       <Tooltip />
      //       <Line type="monotone" dataKey="pv" stroke="#d6cac2" activeDot={{r: 8}}/>
      //       <Line type="monotone" dataKey="uv" stroke="#d6cac2" />
      //   </LineChart>
      // </ResponsiveContainer>
      <VictoryChart
        theme={VictoryTheme.material}
      >
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc"}
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}
        />
      </VictoryChart>
    )
  }
}

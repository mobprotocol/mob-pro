import React, { Component } from 'react'
import PriceHistory from './PriceHistory'
import MarketDepth from './MarketDepth'
import { BrowserRouter as Router } from 'react-router-dom'
const marketSyle = {
  width: '100%',
  height: '100%',
}

export default class Market extends Component {
  render() {
    return (
      <Router>
        <div style={marketSyle}>
          <div style={{ height: 60, backgroundColor: '#9ca1a6', width: '100%' }}>
            <div style={{ width: '33%', display: 'inline', float: 'left', textAlign: 'center' }}>
              <h2>Price</h2>
            </div>
            <div style={{ width: '33%', display: 'inline', float: 'left', textAlign: 'center' }}>
              <h2>Depth</h2>
            </div>
            <div style={{ width: '33%', display: 'inline', float: 'left', textAlign: 'center' }}>
              <h2>Volume</h2>
            </div>
          </div>
          <div>
            <Route path="/price" component={PriceHistory} />
            <Route path="/volume" component={Volume} />
            <Route path="/depth" component={MarketDepth} />
          </div>
        </div>
      </Router>
    )
  }
}

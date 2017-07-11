import React, { Component } from 'react'
import {
  Modal,
} from 'react-bootstrap'
import tokens from './tokens.json'

export default class ChooseToken extends Component {
  constructor() {
    super()
  }

  handleClick() {
    // dispatch token change
    // close out modal
  }

  tokens() {
    return Object.keys(tokens).map((token) => {
      console.log('token.ticker', token.ticker)
      const source = `./src/imgs/${tokens[token].ticker}_logo.png`
      return (
        <div style={{
          width: 150,
          height: 75,
          boxShadow: '2px 2px 2px 2px #F5F5F5',
          margin: 5,
          borderRadius: 5,
          display: 'fex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h3>
            <img src={source} style={{ paddingRight: 10, paddingLeft: 10 }} />
            {tokens[token].ticker}
          </h3>
        </div>
      )
    })
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row' }}>
        {this.tokens()}
      </div>
    )
  }
}

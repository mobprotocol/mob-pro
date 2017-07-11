import React, { Component } from 'react'
import {
  Modal,
} from 'react-bootstrap'
import tokens from './tokens.json'

export default class ChooseToken extends Component {
  constructor() {
    super()
  }

  tokens() {
    console.log('tokens', tokens)
    return Object.keys(tokens).map((token) => {
      return (
        <div style={{ width: 150, height: 75, boxShadow: '2px 2px 2px 2px #F5F5F5', margin: 5, borderRadius: 5 }}>
          <h3>
            <img src='./src/imgs/brave_logo.png' style={{ paddingRight: 10, paddingLeft: 10 }} />
            BAT
          </h3>
        </div>
      )
    })
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap' }}>
        {this.tokens()}
      </div>
    )
  }
}

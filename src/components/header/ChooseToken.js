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
        <div style={{ width: 150, height: 75, backgroundColor: 'grey', margin: 10 }}>
          token A
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

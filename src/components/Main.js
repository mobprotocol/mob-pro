import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import { Grid, Row, Modal } from 'react-bootstrap'

import { Socket } from '../actions/index'
import store from '../store'
import MainNested from './MainNested'

export default class Main extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <Provider store={store}>
        <MainNested />
      </Provider>
    )
  }
}

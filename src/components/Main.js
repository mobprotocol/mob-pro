import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

import { Socket } from '../actions/index'
import Header from './header/Header'
import Content from './content/Content'
import store from '../store'

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ fontFamily: 'Roboto' }}>
          <Header />
          <Content />
        </div>
      </Provider>
    )
  }
}

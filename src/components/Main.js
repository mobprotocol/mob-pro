import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Header from './header/Header'
import Content from './content/Content'

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Content />
        </div>
      </Provider>
    )
  }
}

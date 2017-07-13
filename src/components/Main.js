import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import { Grid, Row, Modal } from 'react-bootstrap'
import { Socket } from '../actions/index'
import Header from './header/Header'
import Content from './content/Content'
import store from '../store'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          <div style={{ fontFamily: 'Roboto' }}>
            <Header />
            <Content />
          </div>
          <Modal show={this.state.show} style={{ maxHeight: 400, fontFamily: 'roboto' }}>
            <Modal.Header>
              <h3 style={{ fontWeight: 300 }}>GO DOWNLOAD METAMASK</h3>
            </Modal.Header>
            <Modal.Body>
              
            </Modal.Body>
          </Modal>
        </div>
      </Provider>
    )
  }
}

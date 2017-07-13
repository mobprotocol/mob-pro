import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Modal
} from 'react-bootstrap'

import Header from './header/Header'
import Content from './content/Content'
import { Eth } from '../actions/index'

class MainNested extends Component {
  constructor() {
    super()
    this.state = {
      show: true
    }
  }

  componentDidMount() {
    this.props.dispatch(Eth.getWeb3Provider())
  }

  render() {
    return (
      <div>
        <div style={{ fontFamily: 'Roboto' }}>
          <Header />
          <Content />
        </div>
        <Modal show={!this.props.metamask} style={{ maxHeight: 800, fontFamily: 'roboto', textAlign: 'center' }}>
          <Modal.Header>
            <h3 style={{ fontWeight: 300 }}>GO DOWNLOAD METAMASK</h3>
          </Modal.Header>
          <Modal.Body>
            <a  href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">
              <div style={{ boxShadow: '5px 5px 5px 5px #F5F5F5', margin: 'auto', margin: 15, borderRadius: 5 }}>
                <img src="./src/imgs/metamask_logo.png" />
              </div>
            </a>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

const mapStoreToProps = (store) => {
    return store.eth
}

export default connect(mapStoreToProps)(MainNested)

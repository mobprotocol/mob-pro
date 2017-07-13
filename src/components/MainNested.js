import React, { Component } from 'react'

class MainNested extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div style={{ fontFamily: 'Roboto' }}>
          <Header />
          <Content />
        </div>
        <Modal show={this.state.show} style={{ maxHeight: 800, fontFamily: 'roboto', textAlign: 'center' }}>
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

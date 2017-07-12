import React, { Component } from 'react'
import { connect } from 'react-redux'

class TokenB extends Component {
  render() {
    const source = `./src/imgs/${this.props.tokenB}_logo.png`
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{
          boxShadow: '2px 2px 2px 2px #F5F5F5',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '75%',
          borderRadius: 5 }}>
          <img src={source} />
        </div>
      </div>
    )
  }
}

const mapStoreToProps = (store) => {
  return store.token
}

export default connect(mapStoreToProps)(TokenB)

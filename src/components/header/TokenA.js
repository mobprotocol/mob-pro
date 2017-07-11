import React, { Component } from 'react'
import { connect } from 'react-redux'

class TokenA extends Component {
  render() {
    const source = `./src/imgs/${this.props.tokenA}_logo.png`
    return (
      <h3>
        <img src={source} style={{ paddingRight: 10, paddingLeft: 10 }} />
        {this.props.tokenA}
      </h3>
    )
  }
}

const mapStoreToProps = (store) => {
  return store.token
}

export default connect(mapStoreToProps)(TokenA)

import React, { Component } from 'react'
import { connect } from 'react-redux'

class TokenB extends Component {
  render() {
    console.log('this.props', this.props.tokenB)
    const source = `./src/imgs/${this.props.tokenB}_logo.png`
    return (
      <h3>
        <img src={source} style={{ paddingRight: 10, paddingLeft: 10 }} />
        {this.props.tokenB}
      </h3>
    )
  }
}

const mapStoreToProps = (store) => {
  return store.token
}

export default connect(mapStoreToProps)(TokenB)

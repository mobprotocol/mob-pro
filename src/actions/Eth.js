import web3 from 'web3'

export default class Eth {
  constructor() {
    this.web3
  }

  getWeb3Provider() {
    return (dispatch) => {
      window.addEventListener('load', () => {
        if (typeof web3 !== 'undefined') {
          this.web3 = new Web3(web3.currentProvider)
          dispatch({ type: 'METAMASK_STATUS', status: true })
        } else {
          // dispatch({type:})
          dispatch({ type: 'METAMASK_STATUS', status: false })
        }
      })
    }
  }

  transferTokens() {

  }
}

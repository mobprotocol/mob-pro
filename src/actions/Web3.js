import web3 from 'web3'

export default Class Web3Interface {
  constructor() {
    this.web3 = getWeb3Provider()
  }

  getWeb3Provider() {
    window.addEventListener('load', () => {
      if (typeof web3 !== 'undefined') {
        this.web3 = new Web3(web3.currentProvider)
      } else {
        // dispatch({type:})
        console.log('nooo, metamask, ...')
      }
    })
  }

  transferTokens() {

  }
}

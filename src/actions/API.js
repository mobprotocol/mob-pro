import Promise from 'bluebird'

export default class API {
  constructor() {
    console.log('instantiated API class')
  }

  getbalance() {
    return (dispatch) => {
      // return new Promise((resolve, reject) => {
      //   return Promise.delay(0)
      //   .then(())
      // })

      console.log('hit dispatch')
    }
  }

}

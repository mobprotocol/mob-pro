import API from './API'
import Socket from './Socket'
import Eth from './Eth'

module.exports = {
  API: new API(),
  Socket: new Socket(),
  Eth: new Eth()
}

import Promise from 'bluebird'
import WS from 'simple-websocket'

export default class Socket {
  constructor() {
    console.log('Socket class instantiated')
    this.dataChannel()
  }

  dataChannel() {
    this.socket = new WS('ws://localhost:3001')
    this.socket.on('data', (data) => {
      console.log('### Received data from server', data)
    })
  }
}

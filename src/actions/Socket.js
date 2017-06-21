import Promise from 'bluebird'
import Socket from 'simple-websocket'

export default class Socket {
  constructor() {
    this.socket
  }

  dataChannel() {
    this.socket = new Socket('ws://localhost:3001')
    this.socket.on('data', (data) => {
      console.log('### Received data from server', data)
    })
  }
}

const PiranhaMessage = require('../../PiranhaMessage')
const KeepAliveServerMessage = require('../Server/KeepAliveServerMessage')

class KeepAliveMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10108
    this.version = 0
  }

  async decode () {
  }

  async process () {
    new KeepAliveServerMessage(this.client).send()
  }
}

module.exports = KeepAliveMessage

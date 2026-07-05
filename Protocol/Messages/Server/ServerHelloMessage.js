const PiranhaMessage = require('../../PiranhaMessage')
const crypto = require('crypto')

class ServerHelloMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.client = client
    this.id = 20100
    this.version = 0
  }

  encode () {
    this.writeBytes(crypto.randomBytes(24))
  }

  decode () {
  }

  process () {
  }
}

module.exports = ServerHelloMessage

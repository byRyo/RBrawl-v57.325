const PiranhaMessage = require('../../PiranhaMessage')
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')

class GoHomeMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 17750
    this.version = 0
  }

  async decode () {
    this.readBoolean()
  }

  async process () {
    new OwnHomeDataMessage(this.client).send()
  }
}

module.exports = GoHomeMessage

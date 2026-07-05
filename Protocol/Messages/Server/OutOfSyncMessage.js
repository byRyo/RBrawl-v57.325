const PiranhaMessage = require('../../PiranhaMessage')

class OutOfSyncMessage extends PiranhaMessage {
  constructor (client, fields) {
    super()
    this.client = client
    this.id = 24104
    this.version = 0
    this.fields = fields || {}
  }

  encode () {
    this.writeVInt(this.fields.ServerChecksum)
    this.writeVInt(this.fields.ClientChecksum)
    this.writeVInt(this.fields.Tick)
  }

  decode () {
    const fields = {}
    fields.ServerChecksum = this.readVInt()
    fields.ClientChecksum = this.readVInt()
    fields.Tick = this.readVInt()
    return fields
  }

  process () {
  }
}

module.exports = OutOfSyncMessage

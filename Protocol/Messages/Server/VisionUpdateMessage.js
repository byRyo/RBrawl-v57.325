const PiranhaMessage = require('../../PiranhaMessage')

class VisionUpdateMessage extends PiranhaMessage {
  constructor (client, fields) {
    super()
    this.client = client
    this.id = 24109
    this.version = 0

    fields = fields || {}
    this.tick = fields.Tick || 0
    this.handledInputs = fields.HandledInputs || 0
    this.viewers = fields.Viewers || 0
    this.visionBitStream = fields.VisionBitStream || Buffer.alloc(0)
  }

  encode () {
    this.writeVInt(this.tick)
    this.writeVInt(this.handledInputs)
    this.writeVInt(0)
    this.writeVInt(this.viewers)
    this.writeBoolean(false)
    this.writeBytes(this.visionBitStream)
  }

  decode () {
    return {}
  }

  process () {
  }
}

module.exports = VisionUpdateMessage

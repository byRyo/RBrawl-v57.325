const PiranhaMessage = require('../../PiranhaMessage')
const LogicCommandManager = require('../../Logic/LogicCommandManager')

class AvailableServerCommandMessage extends PiranhaMessage {
  constructor (client, fields) {
    super()
    this.client = client
    this.id = 24111
    this.version = 0
    this.fields = fields || {}
  }

  encode () {
    this.writeVInt(this.fields.Command.ID)

    const command = LogicCommandManager.createCommand(this.fields.Command.ID, this)
    if (command) {
      command.encode(this.fields)
    }
  }

  decode () {
    return {}
  }

  process () {
  }
}

module.exports = AvailableServerCommandMessage

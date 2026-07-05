const PiranhaMessage = require('../../PiranhaMessage')
const LogicCommandManager = require('../../Logic/LogicCommandManager')
const OutOfSyncMessage = require('../Server/OutOfSyncMessage')

class EndClientTurnMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 14102
    this.version = 0
  }

  async decode () {
    this.data = {}
    this.readBoolean()
    this.data.Tick = this.readVInt()
    this.data.Checksum = this.readVInt()
    this.data.CommandsCount = this.readVInt()

    this.data.Commands = []
    for (let i = 0; i < this.data.CommandsCount; i++) {
      const cmd = { ID: this.readVInt() }
      this.data.Commands.push(cmd)

      if (LogicCommandManager.commandExist(cmd.ID)) {
        const command = LogicCommandManager.createCommand(cmd.ID)
        console.log('Command', LogicCommandManager.getCommandsName(cmd.ID))
        if (command !== null) {
          cmd.Fields = command.decode(this)
          cmd.Instance = command
        }
      } else {
        console.log('Command', cmd.ID, '(non implémentée)')
      }
    }
  }

  async process () {
    for (const command of this.data.Commands) {
      if (!('Instance' in command)) {
        return
      }

      if (typeof command.Instance.execute === 'function') {
        await command.Instance.execute(this, command.Fields)
      }

      if (command.ID === 519) {
        new OutOfSyncMessage(this.client, {
          ServerChecksum: 0,
          ClientChecksum: 0,
          Tick: 0
        }).send()
      }
    }
  }
}

module.exports = EndClientTurnMessage

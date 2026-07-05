const LogicChangeAvatarNameCommand = require('./Commands/LogicChangeAvatarNameCommand')

class LogicCommandManager {
  static commandsList = {
    201: LogicChangeAvatarNameCommand
  }

  static createCommand (commandID, stream) {
    const Command = LogicCommandManager.commandsList[commandID]
    if (!Command) {
      console.log(`[LogicCommandManager] Unknown command ${commandID}`)
      return null
    }
    return new Command(stream)
  }
}

module.exports = LogicCommandManager

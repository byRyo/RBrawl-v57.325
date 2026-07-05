const PiranhaMessage = require('../../PiranhaMessage')
const ClientsManager = require('../../Utils/ClientsManager')

class LobbyInfoMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.client = client
    this.id = 23457
    this.version = 0
  }

  encode () {
    const player = this.client.player

    this.writeVInt(ClientsManager.GetCount())
    this.writeString(`Version: ${player.ClientVersion}` + '\n'.repeat(112))
    this.writeVInt(0)
    this.writeVInt(0)
  }

  decode () {
    return {}
  }

  process () {
  }
}

module.exports = LobbyInfoMessage

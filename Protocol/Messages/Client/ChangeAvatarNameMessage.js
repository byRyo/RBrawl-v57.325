const PiranhaMessage = require('../../PiranhaMessage')
const AvailableServerCommandMessage = require('../Server/AvailableServerCommandMessage')
const DatabaseHandler = require('../../Database/DatabaseHandler')

class ChangeAvatarNameMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10212
    this.version = 0
  }

  async decode () {
    this.data = {}
    this.data.Name = this.readString()
    this.data.NameSetByUser = this.readBoolean()

    console.log(this.data)
  }

  async process () {
    const player = this.client.player
    if (!player) return

    player.Name = this.data.Name
    player.Registered = true

    try {
      const db = new DatabaseHandler()
      if (db.getAll().includes(player.ID[1])) {
        const data = db.getPlayer(player.ID)
        data.Name = player.Name
        data.Registered = true
        db.updatePlayerData(data, { player })
      }
    } catch (e) {
      console.log('[ChangeAvatarName] DB update failed:', e.message)
    }

    new AvailableServerCommandMessage(this.client, {
      Name: this.data.Name,
      NameSetByUser: this.data.NameSetByUser,
      Command: { ID: 201 }
    }).send()
  }
}

module.exports = ChangeAvatarNameMessage

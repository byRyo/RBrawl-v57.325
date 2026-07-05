const PiranhaMessage = require('../../PiranhaMessage')
const PlayerProfileMessage = require('../Server/PlayerProfileMessage')

class GetPlayerProfileMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 15081
    this.version = 0
  }

  async decode () {
    this.data = {}
    this.data.BattleInfoBoolean = this.readBoolean()
    if (this.data.BattleInfoBoolean) {
      this.data.unk1 = this.readVInt()
      this.data.AnotherID = this.readLong()
      this.data.unk2 = this.readVInt()
      const count = this.readVInt()
      for (let i = 0; i < count; i++) {
        this.data.CsvID = this.readDataReference()
        this.data.unk3 = this.readVInt()
        this.data.unk4 = this.readVInt()
        this.data.unk5 = this.readVInt()
      }
      this.data.unk6 = this.readVInt()
      this.data.PlayerName = this.readString()
      this.data.unk7 = this.readVInt()
      this.data.Thumbnail = this.readVInt()
      this.data.NameColor = this.readVInt()
      this.data.unk10 = this.readVInt()
    }
    this.data.unk11 = this.readVInt()
    this.data.PlayerHighID = this.readInt()
    this.data.PlayerLowID = this.readInt()

    console.log(this.data)
  }

  async process () {
    new PlayerProfileMessage(this.client, this.data).send()
  }
}

module.exports = GetPlayerProfileMessage

const PiranhaMessage = require('../../PiranhaMessage')

class PlayerProfileMessage extends PiranhaMessage {
  constructor (client, fields) {
    super()
    this.client = client
    this.id = 24113
    this.version = 0
    this.fields = fields || {}
  }

  encode () {
    const player = this.client.player

    this.writeLogicLong(this.fields.PlayerHighID, this.fields.PlayerLowID)
    this.writeDataReference(16, 11)
    this.writeVInt(70)
    for (let i = 0; i < 70; i++) {
      this.writeDataReference(16, i)
      this.writeDataReference(0)
      this.writeVInt(500)  // trophies
      this.writeVInt(1250) // highestTrophies
      this.writeVInt(11)   // power level
    }

    this.writeVInt(18)
    this.writeVInt(1)
    this.writeVInt(1) // 3v3 victories
    this.writeVInt(2)
    this.writeVInt(528859) // total exp
    this.writeVInt(3)
    this.writeVInt(3) // current trophies
    this.writeVInt(4)
    this.writeVInt(4) // highest trophies
    this.writeVInt(5)
    this.writeVInt(5) // unlocked brawler?
    this.writeVInt(8)
    this.writeVInt(6) // solo victories
    this.writeVInt(11)
    this.writeVInt(7) // duo victories
    this.writeVInt(9)
    this.writeVInt(8) // highest level robo rumble
    this.writeVInt(12)
    this.writeVInt(9) // highest level boss fight
    this.writeVInt(13)
    this.writeVInt(10) // highest power league points
    this.writeVInt(14)
    this.writeVInt(11) // some power league stuff
    this.writeVInt(15)
    this.writeVInt(12) // most challenge win
    this.writeVInt(16) // highest level city rampage
    this.writeVInt(13)
    this.writeVInt(18) // highest solo power league rank
    this.writeVInt(14)
    this.writeVInt(17) // highest team power league rank
    this.writeVInt(15)
    this.writeVInt(19) // highest Club league rank
    this.writeVInt(16)
    this.writeVInt(20) // number fame
    this.writeVInt(1000)
    this.writeVInt(21)
    this.writeVInt(502052) // v50

    this.writeString(player.Name) // PlayerInfo
    this.writeVInt(100)
    this.writeVInt(28000000 + player.Thumbnail)
    this.writeVInt(43000000 + player.Namecolor)
    this.writeVInt(14)
    this.writeBoolean(true)
    this.writeVInt(300)
    this.writeString('hello world')
    this.writeVInt(100)
    this.writeVInt(200)
    this.writeDataReference(29, 558)
    this.writeDataReference(0)
    this.writeDataReference(0)
    this.writeDataReference(0)
    this.writeDataReference(0)

    this.writeBoolean(true) // alliance
    this.writeLong(0, 1) // alliance ID
    this.writeString('haccers') // alliance name
    this.writeDataReference(8, 1) // alliance icon
    this.writeVInt(1) // type
    this.writeVInt(1) // member count
    this.writeVInt(10000) // total trophies
    this.writeVInt(1) // minimum trophies to enter
    this.writeDataReference(0)
    this.writeString('RU') // location
    this.writeVInt(4) // unknown
    this.writeBoolean(true) // is Family friendly
    this.writeVInt(0)

    this.writeDataReference(25, 1) // alliance role
    this.writeVInt(16)
  }

  decode () {
    return {}
  }

  process () {
  }
}

module.exports = PlayerProfileMessage

const PiranhaMessage = require('../../PiranhaMessage')
const HeroDataEntry = require('../../Logic/Battle/HeroDataEntry')
const BattleEndMessage = require('../Server/BattleEndMessage')

class AskForBattleEndMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 14110
    this.version = 0
  }

  async decode () {
    this.data = {}
    this.data.Result = this.readVInt()
    this.data.Unk = this.readVInt()
    this.data.Type = this.readVInt()
    this.data.MapID = this.readDataReference()

    const playerCount = this.readVInt()
    this.data.Heroes = []

    for (let i = 0; i < playerCount; i++) {
      const hero = new HeroDataEntry()
      hero.decode(this)
      console.log(hero.id, hero.skinID, hero.team, hero.isPlayer, hero.name)

      hero.index = i
      this.data.Heroes.push(hero)
    }

    console.log('Result:', this.data.Result, '| Type:', this.data.Type, '| Map:', this.data.MapID)
  }

  async process () {
    new BattleEndMessage(this.client, {
      Result: this.data.Result,
      GameType: this.data.Type,
      Unk: this.data.Unk,
      Heroes: this.data.Heroes
    }).send()
  }
}

module.exports = AskForBattleEndMessage

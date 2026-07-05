const PiranhaMessage = require('../../PiranhaMessage')
const PlayerEntry = require('../../Logic/Battle/PlayerEntry')

class BattleEndMessage extends PiranhaMessage {
  constructor (client, fields) {
    super()
    this.client = client
    this.id = 23456
    this.version = 0

    fields = fields || {}
    this.result = fields.Result || 0
    this.tokensReward = fields.TokensReward || 0
    this.trophiesReward = fields.TrophiesReward || 0
    this.players = fields.Players || []
    this.progressiveQuests = fields.ProgressiveQuests || []
    this.ownPlayer = fields.OwnPlayer || null
    this.starToken = fields.StarToken || false
    this.gameMode = fields.GameMode || 0
    this.isPvP = fields.IsPvP || false
  }

  encode () {
    this.writeLongLong(this.ownPlayer.accountId)
    this.writeLongLong(this.ownPlayer.accountId)

    this.writeVInt(this.gameMode) // game mode
    this.writeVInt(this.result)
    this.writeVInt(this.tokensReward) // tokens reward
    this.writeVInt(this.trophiesReward) // trophies reward
    this.writeVInt(0) // Power Play Points Gained (Pro League Points)
    this.writeVInt(0) // Doubled Tokens (Double Keys)
    this.writeVInt(0) // Double Token Event (Double Event Keys)
    this.writeVInt(0) // Token Doubler Remaining (Double Keys Remaining)
    this.writeVInt(0) // game Length In Seconds
    this.writeVInt(0) // Epic Win Power Play Points Gained (op Win Points)
    this.writeVInt(0) // Championship Level Reached (CC Wins)

    this.writeBoolean(false) // gen offer

    this.writeVInt(0)
    this.writeVInt(0)

    this.writeBoolean(false) // 164
    this.writeBoolean(false) // 165

    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0) 
    this.writeVInt(0) 

    this.writeBoolean(false)
    this.writeBoolean(false) // no experience
    this.writeBoolean(false) // no tokens left
    this.writeBoolean(this.isPvP) // is PvP
    this.writeBoolean(false)
    this.writeBoolean(false)
    this.writeBoolean(false)
    this.writeBoolean(false)

    this.writeVInt(-1) // ChallengeType
    this.writeBoolean(false)

    this.writeVInt(this.players.length)
    for (const player of this.players) {
      const isOwnPlayer = player.accountId === this.ownPlayer.accountId
      const isEnemy = player.teamIndex !== this.ownPlayer.teamIndex
      
      new PlayerEntry({
        isOwnPlayer: isOwnPlayer,
        isEnemy: isEnemy,
        isStarPlayer: false,
        characterId: player.characterId,
        skinId: player.skinId,
        trophies: player.trophies,
        heroPowerLevel: player.heroPowerLevel,
        accountId: player.accountId,
        displayData: player.displayData,
        isBot: player.isBot ? player.isBot() : true
      }, this.ownPlayer.teamIndex).encode(this)
    }

    this.writeVInt(0) // xp
    this.writeVInt(0) // dataref

    this.writeVInt(2)
    {
      this.writeVInt(1)
      this.writeVInt(this.ownPlayer.trophies) // Trophies
      this.writeVInt(this.ownPlayer.highestTrophies) // Highest Trophies

      this.writeVInt(5)
      this.writeVInt(100)
      this.writeVInt(100)
    }

    this.writeDataReference(this.ownPlayer.home.thumbnail) // writeDataReference(GlobalID)

    this.writeBoolean(false) // play again
    this.writeBoolean(false) // quests
    
    this.writeBoolean(false)
    this.writeBoolean(false) 
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0) 
    this.writeBoolean(false) // ranked match state
    this.writeVInt(-1)
    this.writeBoolean(false) // chronosTextEntry
    this.writeVInt(0)

    this.writeBoolean(false)
    this.writeBoolean(false)
    this.writeVInt(0)
    this.writeVInt(0) 
    this.writeBoolean(false)
    this.writeBoolean(false) 
    this.writeBoolean(false) 
  }

  decode () {
    return {}
  }

  process () {
  }
}

module.exports = BattleEndMessage

class PlayerEntry {
  constructor (hero, viewerTeamIdx) {
    this.hero = hero
    this.viewerTeamIdx = viewerTeamIdx
  }

  encode (stream) {
    const hero = this.hero

    stream.writeDataReference(hero.id[0] || 16, hero.id[1] || 0) // brawler
    stream.writeDataReference(hero.skinID[0] || 0, hero.skinID[1] || 0) // skin
    stream.writeVInt(500) // trophies
    stream.writeVInt(1250) // highest trophies
    stream.writeVInt(11) // power level
    stream.writeVInt(hero.team)
    stream.writeVInt(hero.index || 0)
    stream.writeBoolean(hero.isPlayer)
    stream.writeString(hero.name)
  }
}

module.exports = PlayerEntry

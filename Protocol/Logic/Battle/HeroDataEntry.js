class HeroDataEntry {
  constructor () {
    this.id = [0, 0]
    this.skinID = [0, 0]
    this.team = 0
    this.isPlayer = false
    this.name = ''
  }

  decode (stream) {
    this.id = stream.readDataReference()
    this.skinID = stream.readDataReference()
    this.team = stream.readVInt()
    this.isPlayer = stream.readBoolean()
    this.name = stream.readString()
  }
}

module.exports = HeroDataEntry

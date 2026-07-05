class LogicChangeAvatarNameCommand {
  constructor (stream) {
    this.stream = stream
  }

  encode (fields) {
    this.stream.writeString(fields.Name)
    this.stream.writeVInt(0)
    this.stream.writeVInt(1) // name set by user
    this.stream.writeVInt(0)
    this.stream.writeVInt(0)
  }
}

module.exports = LogicChangeAvatarNameCommand

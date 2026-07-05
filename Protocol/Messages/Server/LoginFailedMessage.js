const PiranhaMessage = require('../../PiranhaMessage')

class LoginFailedMessage extends PiranhaMessage {
  constructor (client, fields) {
    super()
    this.client = client
    this.id = 20103
    this.version = 0
    this.fields = fields || {}
  }

  encode () {
    this.writeInt(this.fields.ErrorID)
    this.writeString(this.fields.FingerprintData)
    this.writeString()
    this.writeString(this.fields.ContentURL)
    this.writeString()
    this.writeString(this.fields.Message)
    this.writeInt(0)
    this.writeBoolean(false)
    this.writeInt(0)
    this.writeInt(0)
    this.writeInt(0)
    this.writeInt(0)
    this.writeString()
    this.writeInt(0)
    this.writeBoolean(true)
    this.writeBoolean(true)
    this.writeString()
    this.writeVInt(0)
    this.writeString()
    this.writeBoolean(false)
  }

  decode () {
    const fields = {}
    fields.ErrorCode = this.readInt()
    fields.ResourceFingerprintData = this.readString()
    fields.RedirectDomain = this.readString()
    fields.ContentURL = this.readString()
    fields.UpdateURL = this.readString()
    fields.Reason = this.readString()
    fields.SecondsUntilMaintenanceEnd = this.readInt()
    fields.ShowContactSupportForBan = this.readBoolean()
    fields.CompressedFingerprintData = this.readBytesWithoutLength()
    fields.ContentURLListCount = this.readInt()
    fields.ContentURLList = []
    for (let i = 0; i < fields.ContentURLListCount; i++) {
      fields.ContentURLList.push(this.readString())
    }
    fields.KunlunAppStore = this.readInt()
    fields.MaintenanceType = this.readInt()
    fields.HelpshiftFaqId = this.readString()
    fields.Tier = this.readInt()
    fields.Unk1 = this.readBoolean()
    fields.Unk2 = this.readBoolean()
    fields.Unk3 = this.readString()
    fields.Unk4 = this.readVInt()
    fields.Unk5 = this.readString()
    fields.OptionalTargetedAccountIdState = this.readBoolean()
    if (fields.OptionalTargetedAccountIdState === true) {
      fields.OptionalTargetedAccountId = this.readLong()
    }
    return fields
  }

  process () {
  }
}

module.exports = LoginFailedMessage

const PiranhaMessage = require("../../PiranhaMessage")
const LoginOkMessage = require("../Server/LoginOkMessage")
const OwnHomeDataMessage = require("../Server/OwnHomeDataMessage")
const LobbyInfoMessage = require("../Server/LobbyInfoMessage")
const DatabaseHandler = require("../../Database/DatabaseHandler")
const ClientsManager = require("../../Utils/ClientsManager")

class LoginMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10101
    this.version = 1
  }

  async decode () {
    this.data = {}

    this.data.HighID = this.readInt()
    this.data.LowID = this.readInt()
    
    this.data.Token = this.readString()
    
    this.data.Major = this.readInt()
    this.data.Minor = this.readInt()
    this.data.Build = this.readInt()

    this.data.Fingerprint = this.readString()
    
    this.data.Device = this.readString()
    this.data.PreferredLanguage = this.readDataReference()
    this.data.PreferredDeviceLanguage = this.readString()
    this.data.OSVersion = this.readString()
    this.data.isAndroid = this.readBoolean()
    this.data.IMEI = this.readString()
    this.data.AndroidID = this.readString()
    this.data.isAdvertisingEnabled = this.readBoolean()
    this.data.AppleIFV = this.readString()
    this.data.RndKey = this.readInt()
    this.data.AppStore = this.readVInt()
    this.data.ClientVersion = this.readString()
    this.data.TencentOpenId = this.readString()
    this.data.TencentToken = this.readString()
    this.data.TencentPlatform = this.readVInt()
    this.data.DeviceVerifierResponse = this.readString()
    this.data.AppLicensingSignature = this.readString()
    this.data.DeviceVerifierResponse2 = this.readString() 

    console.log(this.data)
  }

  async process () {
    if (this.data.Major === 57) {
      if (!this.client.player) {
        const Player = require('../../Utils/Player')
        this.client.player = new Player()
      }

      this.client.player.ClientVersion = `${this.data.Major}.${this.data.Build}.${this.data.Minor}`
      
      const db_instance = new DatabaseHandler()
      const accountId = [this.data.HighID, this.data.LowID]
      
      const playerExists = db_instance.playerExist(this.data.Token, accountId)
      
      if (playerExists) {
        db_instance.loadAccount(this.client.player, accountId)
      } else {
        const dataTemplate = this.client.player.getDataTemplate(this.data.HighID, this.data.LowID, this.data.Token)
        db_instance.createAccount(dataTemplate)
      }

      ClientsManager.AddPlayer(this.client.player.ID, this.client, this.client.player)

      new LoginOkMessage(this.client).send()
      new OwnHomeDataMessage(this.client).send()
    }
  }
}

module.exports = LoginMessage

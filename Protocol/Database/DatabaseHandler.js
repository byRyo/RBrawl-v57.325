const Database = require('better-sqlite3');
const fs = require('fs');

class DatabaseHandler {
  constructor() {
    if (!fs.existsSync('DB/Files')) {
      fs.mkdirSync('DB/Files', { recursive: true });
    }
    this.conn = new Database("DB/Files/player.sqlite");
    this.conn.exec("CREATE TABLE IF NOT EXISTS main (ID int, Token text, Data json)");
  }

  createAccount(data) {
    this.conn.prepare("INSERT INTO main (ID, Token, Data) VALUES (?, ?, ?)").run(data.ID[1], data.Token, JSON.stringify(data));
  }

  getAll() {
    this.playersId = [];
    this.db = this.conn.prepare("SELECT * from main").all();
    for (let i = 0; i < this.db.length; i++) {
      this.playersId.push(this.db[i].ID);
    }
    return this.playersId;
  }

  getPlayer(plrId) {
    return JSON.parse(this.conn.prepare("SELECT * from main where ID=?").all(plrId[1])[0].Data);
  }

  getPlayerEntry(plrId) {
    const row = this.conn.prepare("SELECT * from main where ID=?").all(plrId[1])[0];
    return [row.ID, row.Token, row.Data];
  }

  loadAccount(player, plrId) {
    const playerData = JSON.parse(this.conn.prepare("SELECT * from main where ID=?").all(plrId[1])[0].Data);
    player.ID = playerData.ID;
    player.Name = playerData.Name;
    player.Registered = playerData.Registered;
    player.Thumbnail = playerData.Thumbnail;
    player.Namecolor = playerData.Namecolor;
    player.Region = playerData.Region;
    player.ContentCreator = playerData.ContentCreator;
    player.Coins = playerData.Coins;
    player.Gems = playerData.Gems;
    player.Blings = playerData.Blings;
    player.Trophies = playerData.Trophies;
    player.HighestTrophies = playerData.HighestTrophies;
    player.TrophyRoadTier = playerData.TrophyRoadTier;
    player.Experience = playerData.Experience;
    player.Level = playerData.Level;
    player.Tokens = playerData.Tokens;
    player.TokensDoubler = playerData.TokensDoubler;
    player.SelectedBrawlers = playerData.SelectedBrawlers;
    player.OwnedPins = playerData.OwnedPins;
    player.OwnedThumbnails = playerData.OwnedThumbnails;
    player.OwnedBrawlers = playerData.OwnedBrawlers;
    player.OwnedSkins = playerData.OwnedSkins;
  }

  updatePlayerData(data, calling_instance) {
    this.conn.prepare("UPDATE main SET Data=? WHERE ID=?").run(JSON.stringify(data), calling_instance.player.ID[1]);
    this.loadAccount(calling_instance.player, calling_instance.player.ID);
  }

  playerExist(loginToken, loginID) {
    if (this.getAll().includes(loginID[1])) {
      if (loginToken !== this.getPlayerEntry(loginID)[1]) {
        return false;
      }
      return true;
    }
    return false;
  }
}

module.exports = DatabaseHandler;

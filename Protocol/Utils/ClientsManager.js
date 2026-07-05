class ClientsManager {
  static PlayersList = {};

  static AddPlayer(playerID, socket, player) {
    const key = playerID[1].toString();
    if (ClientsManager.PlayersList.hasOwnProperty(key)) {
      ClientsManager.RemovePlayer(playerID);
    }
    ClientsManager.PlayersList[key] = { "Socket": socket, "Player": player };
  }

  static RemovePlayer(PlayerID) {
    const key = PlayerID[1].toString();
    if (ClientsManager.PlayersList.hasOwnProperty(key)) {
      delete ClientsManager.PlayersList[key];
    }
  }

  static GetPlayer(playerID) {
    const key = playerID[1].toString();
    if (ClientsManager.PlayersList.hasOwnProperty(key)) {
      return ClientsManager.PlayersList[key].Player;
    }
    return null;
  }

  static GetAll() {
    return ClientsManager.PlayersList;
  }

  static GetCount() {
    return Object.keys(ClientsManager.PlayersList).length;
  }
}

module.exports = ClientsManager;

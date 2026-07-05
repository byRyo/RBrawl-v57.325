class Player {
  constructor() {
    this.ClientVersion = "0.0.0";

    this.ID = [0, 1];
    this.Token = "";
    this.Name = "Brawler";
    this.Registered = false;
    this.Thumbnail = 0;
    this.Namecolor = 0;
    this.Region = "FR";
    this.ContentCreator = "RBrawl";

    this.Coins = 999999;
    this.Gems = 999999;
    this.Blings = 999999;
    this.Trophies = 99999;
    this.HighestTrophies = 99999;
    this.TrophyRoadTier = 99999;
    this.Experience = 999999;
    this.Level = 99999;
    this.Tokens = 1000;
    this.TokensDoubler = 1000;

    this.SelectedSkins = {};
    this.SelectedBrawlers = [0, 0, 0];
    this.RandomizerSelectedSkins = [];
    this.OwnedPins = [];
    this.OwnedThumbnails = [];
    this.OwnedSkins = [];
    this.OwnedBrawlers = {
      0: {'CardID': 0, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      1: {'CardID': 4, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      2: {'CardID': 8, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      3: {'CardID': 12, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      4: {'CardID': 16, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      5: {'CardID': 20, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      6: {'CardID': 24, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      7: {'CardID': 28, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      8: {'CardID': 32, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      9: {'CardID': 36, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      10: {'CardID': 40, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      11: {'CardID': 44, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      12: {'CardID': 48, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      13: {'CardID': 52, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      14: {'CardID': 56, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      15: {'CardID': 60, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      16: {'CardID': 64, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      17: {'CardID': 68, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      18: {'CardID': 72, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      19: {'CardID': 95, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      20: {'CardID': 100, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      21: {'CardID': 105, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      22: {'CardID': 110, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      23: {'CardID': 115, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      24: {'CardID': 120, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      25: {'CardID': 125, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      26: {'CardID': 130, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      27: {'CardID': 177, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      28: {'CardID': 182, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      29: {'CardID': 188, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      30: {'CardID': 194, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      31: {'CardID': 200, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      32: {'CardID': 206, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      34: {'CardID': 218, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      35: {'CardID': 224, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      36: {'CardID': 230, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      37: {'CardID': 236, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      38: {'CardID': 279, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      39: {'CardID': 296, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      40: {'CardID': 303, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      41: {'CardID': 320, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      42: {'CardID': 327, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      43: {'CardID': 334, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      44: {'CardID': 341, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      45: {'CardID': 358, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      46: {'CardID': 365, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      47: {'CardID': 372, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      48: {'CardID': 379, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      49: {'CardID': 386, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      50: {'CardID': 393, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      51: {'CardID': 410, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      52: {'CardID': 417, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      53: {'CardID': 427, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      54: {'CardID': 434, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      56: {'CardID': 448, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      57: {'CardID': 466, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      58: {'CardID': 474, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      59: {'CardID': 491, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      60: {'CardID': 499, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      61: {'CardID': 507, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      62: {'CardID': 515, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      63: {'CardID': 523, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      64: {'CardID': 531, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      65: {'CardID': 539, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      66: {'CardID': 547, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      67: {'CardID': 557, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      68: {'CardID': 565, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      69: {'CardID': 573, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      70: {'CardID': 581, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      71: {'CardID': 589, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      72: {'CardID': 597, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      73: {'CardID': 605, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      74: {'CardID': 619, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      75: {'CardID': 633, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      76: {'CardID': 642, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      77: {'CardID': 655, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      78: {'CardID': 663, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      79: {'CardID': 671, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      80: {'CardID': 730, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      81: {'CardID': 748, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      82: {'CardID': 760, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      83: {'CardID': 768, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      84: {'CardID': 800, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1},
      85: {'CardID': 811, 'Trophies': 1000, 'HighestTrophies': 1000, 'PowerLevel': 1}
    };
  }

  getDataTemplate(highid, lowid, token) {
    if (highid === 0 || lowid === 0) {
      this.ID[0] = Math.floor(Math.random() * 10);
      this.ID[1] = parseInt(Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join(''));
      
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      this.Token = Array.from({ length: 40 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    } else {
      this.ID[0] = highid;
      this.ID[1] = lowid;
      this.Token = token;
    }

    const DBData = {
      'ID': this.ID,
      'Token': this.Token,
      'Name': this.Name,
      'Registered': this.Registered,
      'Thumbnail': this.Thumbnail,
      'Namecolor': this.Namecolor,
      'Region': this.Region,
      'ContentCreator': this.ContentCreator,
      'Coins': this.Coins,
      'Gems': this.Gems,
      'Blings': this.Blings,
      'Trophies': this.Trophies,
      'HighestTrophies': this.HighestTrophies,
      'TrophyRoadTier': this.TrophyRoadTier,
      'Experience': this.Experience,
      'Level': this.Level,
      'Tokens': this.Tokens,
      'TokensDoubler': this.TokensDoubler,
      'SelectedBrawlers': this.SelectedBrawlers,
      'OwnedPins': this.OwnedPins,
      'OwnedThumbnails': this.OwnedThumbnails,
      'OwnedBrawlers': this.OwnedBrawlers,
      'OwnedSkins': this.OwnedSkins,
    };
    return DBData;
  }

  toJSON() {
    return JSON.parse(JSON.stringify(this));
  }
}

module.exports = Player;

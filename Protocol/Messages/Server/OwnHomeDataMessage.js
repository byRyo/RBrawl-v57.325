const PiranhaMessage = require("../../PiranhaMessage");

class OwnHomeDataMessage extends PiranhaMessage {
    constructor(client) {
        super();
        this.client = client;
        this.id = 24101;
        this.version = 0;
        this.messageVersion = 0;
    }

    encode() {
        const player = this.client.player;

        this.writeVInt(1688816070);
        this.writeVInt(1191532375);
        this.writeVInt(2023189);
        this.writeVInt(73530);

        this.writeVInt(player.Trophies);
        this.writeVInt(player.HighestTrophies);
        this.writeVInt(player.HighestTrophies);
        this.writeVInt(player.TrophyRoadTier);
        this.writeVInt(player.Experience);
        this.writeDataReference(28, player.Thumbnail);
        this.writeDataReference(43, player.Namecolor);

        this.writeVInt(26);
        for (let x = 0; x < 26; x++) {
            this.writeVInt(x);
        }

        this.writeVInt(0);

        this.writeVInt(0);

        this.writeVInt(0);

        this.writeVInt(player.OwnedSkins.length);
        for (const x of player.OwnedSkins) {
            this.writeDataReference(29, x);
        }

        this.writeVInt(0);

        this.writeVInt(0);

        this.writeVInt(0);
        this.writeVInt(player.HighestTrophies);
        this.writeVInt(0);
        this.writeVInt(2);
        this.writeBoolean(true);
        this.writeVInt(115);
        this.writeVInt(335442);
        this.writeVInt(1001442);
        this.writeVInt(5778642);

        this.writeVInt(120);
        this.writeVInt(200);
        this.writeVInt(0);

        this.writeBoolean(true);
        this.writeVInt(2);
        this.writeVInt(2);
        this.writeVInt(2);
        this.writeVInt(0);
        this.writeVInt(0);

        this.writeVInt(1); // Shop Offers

        this.writeVInt(1); // RewardCount

        this.writeVInt(56); // ItemType
        this.writeVInt(1337); // Amount
        this.writeDataReference(0); // CsvID
        this.writeVInt(0); // SkinID

        this.writeVInt(0); // Currency(0-Gems, 1-Gold, 3-StarpoInts)
        this.writeVInt(0); // Cost
        this.writeVInt(0); // Time
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeBoolean(false);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeBoolean(false); // Daily Offer
        this.writeVInt(0); // Old price
        this.writeString("Offer"); // Text
        this.writeVInt(0);
        this.writeBoolean(false);
        this.writeString("offer_bgr_sushi"); // Background
        this.writeVInt(0);
        this.writeBoolean(false); // This purchase is already being processed
        this.writeVInt(0); // Type Benefit
        this.writeVInt(0); // Benefit
        this.writeString();
        this.writeBoolean(false); // One time offer
        this.writeBoolean(false); // Claimed
        this.writeDataReference(0);
        this.writeDataReference(0);
        this.writeBoolean(false);
        this.writeBoolean(false);
        this.writeBoolean(false);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeBoolean(false);
        this.writeBoolean(false);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeBoolean(false);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeBoolean(false);
        this.writeBoolean(false);
        this.writeBoolean(false);

        this.writeVInt(20);
        this.writeVInt(1428);

        this.writeVInt(0);

        this.writeVInt(1);
        this.writeVInt(30);

        this.writeByte(1); // count brawlers selected
        this.writeDataReference(16, player.SelectedBrawlers[0]); // selected brawler

        this.writeString(player.Region); // location
        this.writeString(player.ContentCreator); // supported creator

        this.writeVInt(6);
        this.writeVInt(1);
        this.writeVInt(9);
        this.writeVInt(1);
        this.writeVInt(22);
        this.writeVInt(3);
        this.writeVInt(25);
        this.writeVInt(1);
        this.writeVInt(24);
        this.writeVInt(0);
        this.writeVInt(15);
        this.writeVInt(32447);
        this.writeVInt(28);

        this.writeVInt(0);

        this.writeVInt(1);
        for (let season = 0; season < 1; season++) {
            this.writeVInt(30 - 1);
            this.writeVInt(40000);
            this.writeBoolean(true);
            this.writeVInt(0);
            this.writeBoolean(false);
            this.writeBoolean(true);
            this.writeInt(0);
            this.writeInt(0);
            this.writeInt(0);
            this.writeInt(0);
            this.writeBoolean(true);
            this.writeInt(0);
            this.writeInt(0);
            this.writeInt(0);
            this.writeInt(0);
            this.writeBoolean(true);
            this.writeBoolean(true);
            this.writeInt(0);
            this.writeInt(0);
            this.writeInt(0);
            this.writeInt(0);
        }

        this.writeBoolean(true);
        this.writeVInt(0);
        this.writeVInt(1);
        this.writeVInt(2);
        this.writeVInt(0);

        this.writeBoolean(true); // Vanity items
        this.writeVInt(player.OwnedThumbnails.length + player.OwnedPins.length);
        for (const x of player.OwnedThumbnails) {
            this.writeVInt(28);
            this.writeVInt(x);
            this.writeVInt(0);
        }
        for (const x of player.OwnedPins) {
            this.writeVInt(52);
            this.writeVInt(x);
            this.writeVInt(0);
        }

        this.writeBoolean(false); // Power league season data

        this.writeInt(0);
        this.writeVInt(0);
        this.writeDataReference(16, 85);
        this.writeBoolean(false);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);

        this.writeVInt(2023189);

        this.writeVInt(38); // event slot id
        for (let i = 1; i <= 38; i++) {
            this.writeVInt(i);
        }

        this.writeVInt(1);

        this.writeVInt(-1);
        this.writeVInt(1);
        this.writeVInt(1);
        this.writeVInt(0);
        this.writeVInt(72292);
        this.writeVInt(10);
        this.writeDataReference(15, 636); // map id
        this.writeVInt(-1);
        this.writeVInt(2);
        this.writeString("");
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeBoolean(false); // MapMaker map structure array
        this.writeVInt(0);
        this.writeBoolean(false); // Power League array entry
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeBoolean(false);
        this.writeBoolean(false);
        this.writeBoolean(false);
        this.writeBoolean(false);
        this.writeVInt(-1);
        this.writeBoolean(false);
        this.writeBoolean(false);
        this.writeVInt(-1);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeBoolean(false);
        this.writeBoolean(false);
        this.writeBoolean(false);

        this.writeVInt(0);

        this.writeIntList([20, 35, 75, 140, 290, 480, 800, 1250, 1875, 2800]);
        this.writeIntList([30, 80, 170, 360]); // Shop Coins Price
        this.writeIntList([300, 880, 2040, 4680]); // Shop Coins Amount

        this.writeVInt(0);

        this.writeVInt(1);
        this.writeVInt(41000108); // theme
        this.writeVInt(1);

        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);

        this.writeVInt(2);
        this.writeVInt(1);
        this.writeVInt(2);
        this.writeVInt(2);
        this.writeVInt(1);
        this.writeVInt(-1);
        this.writeVInt(2);
        this.writeVInt(1);
        this.writeVInt(4);

        this.writeIntList([0, 29, 79, 169, 349, 699]);
        this.writeIntList([0, 160, 450, 500, 1250, 2500]);

        this.writeLong(0, 1); // Player ID

        this.writeVInt(0); // Notification factory

        this.writeVInt(1);
        this.writeBoolean(false);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeBoolean(false);
        this.writeBoolean(false);
        this.writeBoolean(false);
        this.writeVInt(0);
        this.writeBoolean(true); // Starr Road
        for (let i = 0; i < 7; i++) {
            this.writeVInt(0);
        }

        this.writeVInt(0); // Mastery

        // BattleCard
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeBoolean(false);
        this.writeBoolean(false);
        this.writeBoolean(false);
        this.writeBoolean(false);

        this.writeVInt(0); // Brawler's BattleCards

        this.writeVInt(14);
        for (let i = 0; i < 14; i++) {
            this.writeDataReference(80, i);
            this.writeVInt(-1);
            this.writeVInt(0);
        }

        this.writeVInt(0);
        this.writeInt(-1435281534);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(86400 * 24);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeBoolean(false);

        this.writeBoolean(false);
        this.writeBoolean(false);
        this.writeBoolean(false);
        this.writeVInt(0);

        // end LogicClientHome

        this.writeLogicLong(player.ID[0], player.ID[1]);
        this.writeLogicLong(player.ID[0], player.ID[1]);
        this.writeLogicLong(player.ID[0], player.ID[1]);
        this.writeStringReference(player.Name);
        this.writeBoolean(player.Registered);
        this.writeInt(-1);

        this.writeVInt(17);
        const unlockedBrawlers = Object.values(player.OwnedBrawlers).map(i => i["CardID"]);
        this.writeVInt(unlockedBrawlers.length + 3);
        for (const x of unlockedBrawlers) {
            this.writeDataReference(23, x);
            this.writeVInt(-1);
            this.writeVInt(1);
        }

        this.writeDataReference(5, 8);
        this.writeVInt(-1);
        this.writeVInt(player.Coins);

        this.writeDataReference(5, 21);
        this.writeVInt(-1);
        this.writeVInt(149100);

        this.writeDataReference(5, 23);
        this.writeVInt(-1);
        this.writeVInt(player.Blings);

        const ownedBrawlerEntries = Object.entries(player.OwnedBrawlers);

        this.writeVInt(ownedBrawlerEntries.length); // HeroScore
        for (const [x, i] of ownedBrawlerEntries) {
            this.writeDataReference(16, Number(x));
            this.writeVInt(-1);
            this.writeVInt(i["Trophies"]);
        }

        this.writeVInt(ownedBrawlerEntries.length); // HeroHighScore
        for (const [x, i] of ownedBrawlerEntries) {
            this.writeDataReference(16, Number(x));
            this.writeVInt(-1);
            this.writeVInt(i["HighestTrophies"]);
        }

        this.writeVInt(0); // Array

        this.writeVInt(0); // HeroPower

        this.writeVInt(ownedBrawlerEntries.length); // HeroLevel
        for (const [x, i] of ownedBrawlerEntries) {
            this.writeDataReference(16, Number(x));
            this.writeVInt(-1);
            this.writeVInt(i["PowerLevel"] - 1);
        }

        this.writeVInt(0); // hero star power gadget and hypercharge

        this.writeVInt(ownedBrawlerEntries.length); // HeroSeenState
        for (const [x, i] of ownedBrawlerEntries) {
            this.writeDataReference(16, Number(x));
            this.writeVInt(-1);
            this.writeVInt(2);
        }

        this.writeVInt(0); // Array
        this.writeVInt(0); // Array
        this.writeVInt(0); // Array
        this.writeVInt(0); // Array
        this.writeVInt(0); // Array
        this.writeVInt(0); // Array
        this.writeVInt(0); // Array
        this.writeVInt(0); // Array
        this.writeVInt(0); // Array

        this.writeVInt(player.Gems); // Diamonds
        this.writeVInt(player.Gems); // Free Diamonds
        this.writeVInt(10); // Player Level
        this.writeVInt(100);
        this.writeVInt(0); // CumulativePurchasedDiamonds or Avatar User Level Tier | 10000 < Level Tier = 3 | 1000 < Level Tier = 2 | 0 < Level Tier = 1
        this.writeVInt(100); // Battle Count
        this.writeVInt(10); // WinCount
        this.writeVInt(80); // LoseCount
        this.writeVInt(50); // WinLooseStreak
        this.writeVInt(20); // NpcWinCount
        this.writeVInt(0); // NpcLoseCount
        this.writeVInt(2); // TutorialState | shouldGoToFirstTutorialBattle = State == 0
        this.writeVInt(12);
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeString();
        this.writeVInt(0);
        this.writeVInt(0);
        this.writeVInt(1);
    }

    decode() {
        const fields = {};
        return fields;
    }

    execute(callingInstance, fields) {
    }

    getMessageType() {
        return 24101;
    }

    getMessageVersion() {
        return this.messageVersion;
    }
}

module.exports = OwnHomeDataMessage;

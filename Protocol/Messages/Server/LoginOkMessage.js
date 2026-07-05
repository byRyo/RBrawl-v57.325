const PiranhaMessage = require('../../PiranhaMessage')

class LoginOkMessage extends PiranhaMessage {
    constructor(client) {
        super();
        this.client = client;
        this.id = 20104;
        this.version = 1;
        this.messageVersion = 1;
    }

    encode() {
        const player = this.client.player;

        this.writeLong(player.ID[0], player.ID[1]);
        this.writeLong(player.ID[0], player.ID[1]);
        this.writeString(player.Token);
        this.writeString();
        this.writeString();
        this.writeInt(57);
        this.writeInt(325);
        this.writeInt(1);
        this.writeString("prod");
        this.writeInt(0);
        this.writeInt(0);
        this.writeInt(0);
        this.writeString();
        this.writeString();
        this.writeString();
        this.writeInt(0);
        this.writeString();
        this.writeString("dev");
        this.writeString();
        this.writeInt(0);
        this.writeString();
        this.writeInt(2);
        this.writeString("https://game-assets.brawlstarsgame.com");
        this.writeString("http://a678dbc1c015a893c9fd-4e8cc3b1ad3a3c940c504815caefa967.r87.cf2.rackcdn.com");
        this.writeInt(2);
        this.writeString("https://event-assets.brawlstars.com");
        this.writeString("https://24b999e6da07674e22b0-8209975788a0f2469e68e84405ae4fcf.ssl.cf2.rackcdn.com/event-assets");
        this.writeVInt(0);
        this.writeCompressedString(Buffer.from(""));
        this.writeBoolean(true);
        this.writeBoolean(false);
        this.writeString();
        this.writeString();
        this.writeString();
        this.writeString("https://play.google.com/store/apps/details?id=com.supercell.brawlstars");
        this.writeString();
        this.writeBoolean(false);

        this.writeBoolean(false);
        if (false) {
            this.writeString();
        }

        this.writeBoolean(false);
        if (false) {
            this.writeString();
        }

        this.writeBoolean(false);
        if (false) {
            this.writeString();
        }

        this.writeBoolean(false);
        if (false) {
            this.writeString();
        }
    }

    decode() {
        const fields = {};
        fields["AccountID"] = this.readLong();
        fields["HomeID"] = this.readLong();
        fields["PassToken"] = this.readString();
        fields["FacebookID"] = this.readString();
        fields["GamecenterID"] = this.readString();
        fields["ServerMajorVersion"] = this.readInt();
        fields["ContentVersion"] = this.readInt();
        fields["ServerBuild"] = this.readInt();
        fields["ServerEnvironment"] = this.readString();
        fields["SessionCount"] = this.readInt();
        fields["PlayTimeSeconds"] = this.readInt();
        fields["DaysSinceStartedPlaying"] = this.readInt();
        fields["FacebookAppID"] = this.readString();
        fields["ServerTime"] = this.readString();
        fields["AccountCreatedDate"] = this.readString();
        fields["StartupCooldownSeconds"] = this.readInt();
        fields["GoogleServiceID"] = this.readString();
        fields["LoginCountry"] = this.readString();
        fields["KunlunID"] = this.readString();
        fields["Tier"] = this.readInt();
        fields["TencentID"] = this.readString();

        const contentUrlCount = this.readInt();
        fields["GameAssetsUrls"] = [];
        for (let i = 0; i < contentUrlCount; i++) {
            fields["GameAssetsUrls"].push(this.readString());
        }

        const eventUrlCount = this.readInt();
        fields["EventAssetsUrls"] = [];
        for (let i = 0; i < eventUrlCount; i++) {
            fields["EventAssetsUrls"].push(this.readString());
        }

        fields["SecondsUntilAccountDeletion"] = this.readVInt();
        fields["SupercellIDToken"] = this.readCompressedString();
        fields["IsSupercellIDLogoutAllDevicesAllowed"] = this.readBoolean();
        fields["isSupercellIDEligible"] = this.readBoolean();
        fields["LineID"] = this.readString();
        fields["SessionID"] = this.readString();
        fields["KakaoID"] = this.readString();
        fields["UpdateURL"] = this.readString();
        fields["YoozooPayNotifyUrl"] = this.readString();
        fields["UnbotifyEnabled"] = this.readBoolean();

        const Unknown1 = this.readBoolean();
        fields["Unknown1"] = Unknown1;
        if (Unknown1) {
            fields["Unknown2"] = this.readString();
        }

        const Unknown3 = this.readBoolean();
        fields["Unknown3"] = Unknown1;
        if (Unknown3) {
            fields["Unknown4"] = this.readString();
        }

        const Unknown5 = this.readBoolean();
        fields["Unknown5"] = Unknown1;
        if (Unknown5) {
            fields["Unknown6"] = this.readString();
        }

        const Unknown7 = this.readBoolean();
        fields["Unknown7"] = Unknown1;
        if (Unknown7) {
            fields["Unknown8"] = this.readString();
        }

        super.decode(fields);
        return fields;
    }

    execute(callingInstance, fields) {
    }

    getMessageType() {
        return 20104;
    }

    getMessageVersion() {
        return this.messageVersion;
    }
}

module.exports = LoginOkMessage;

const PiranhaMessage = require("../../PiranhaMessage");

class TeamStreamMessage extends PiranhaMessage {
    constructor(client) {
        super();
        this.client = client;
        this.id = 24131;
        this.version = 0;
        this.messageVersion = 0;
        this.teamId = [0, 0];
        this.entries = [];
    }

    encode() {
        this.writeVLong(this.teamId);
        this.writeVInt(this.entries.length);
        for (const entry of this.entries) {
            entry.encode(this);
        }
    }

    decode() {
    }

    process() {
    }
}

module.exports = TeamStreamMessage;

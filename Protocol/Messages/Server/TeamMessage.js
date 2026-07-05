const PiranhaMessage = require("../../PiranhaMessage");

class TeamMessage extends PiranhaMessage {
    constructor(bytes, client) {
        super(bytes);
        this.client = client;
        this.id = 24124;
        this.version = 0;
        this.messageVersion = 0;
        this.team = null;
    }

    encode() {
        if (this.team) {
            this.team.encode(this);
        }
    }

    decode() {
    }

    process() {
    }
}

module.exports = TeamMessage;

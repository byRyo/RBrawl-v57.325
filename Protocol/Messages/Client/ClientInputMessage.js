const PiranhaMessage = require("../../PiranhaMessage");
const ClientInput = require("../../Logic/Battle/ClientInput");

class ClientInputMessage extends PiranhaMessage {
    constructor(client) {
        super();
        this.client = client;
        this.id = 10555;
        this.version = 0;
        this.messageVersion = 0;
        this.inputs = [];
    }

    decode() {
        this.readVInt(); // tick
        this.readVInt();
        this.readVInt(); // index
        this.readVInt();
        this.readVInt();
        this.readVInt(); // keep alives sent

        const count = this.readVInt();
        for (let i = 0; i < count; i++) {
            const input = new ClientInput();
            input.decode(this);
            this.inputs.push(input);
        }
    }

    encode() {
    }

    process() {
    }
}

module.exports = ClientInputMessage;

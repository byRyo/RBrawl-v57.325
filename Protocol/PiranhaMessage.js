const ByteStream = require('../ByteStream');

class PiranhaMessage extends ByteStream {
    constructor(bytes) {
        super(bytes);
        this.client = null;
        this.id = 0;
        this.version = 0;
        this.messageVersion = 0;
    }

    encode() {}
    decode() {}
    process() {}

    getMessageType() {
        return this.id;
    }

    send() {
        if (this.id < 20000) return;
        this.encode();
        
        const payload = Buffer.from(this.buffer.slice(0, this.offset));
        const header = Buffer.alloc(7);
        header.writeUInt16BE(this.id, 0);
        header.writeUIntBE(payload.length, 2, 3);
        header.writeUInt16BE(this.version, 5);
        
        if (this.client && this.client.write) {
            this.client.write(Buffer.concat([header, payload]));
        }
    }
}

module.exports = PiranhaMessage;

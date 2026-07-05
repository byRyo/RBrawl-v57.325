class TeamStreamEntry {
    constructor() {
        this.id = [0, 0];
        this.accountId = [0, 0];
        this.name = "";
    }

    encode(stream) {
        stream.writeVInt(this.getStreamEntryType());
        stream.writeVInt(this.id[0]);
        stream.writeVInt(this.id[1]);
        stream.writeVInt(this.accountId[0]);
        stream.writeVInt(this.accountId[1]);
        stream.writeString(this.name);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
    }

    getStreamEntryType() {
        throw new Error("Abstract method not implemented");
    }
}

module.exports = TeamStreamEntry;

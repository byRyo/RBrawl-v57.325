class TeamInviteEntry {
    constructor() {
        this.inviterId = 0;
        this.id = 0;
        this.name = "";
        this.slot = 0;
    }

    encode(stream) {
        stream.writeVInt(0);
        stream.writeVInt(this.inviterId);
        stream.writeVInt(0);
        stream.writeVInt(this.id);
        stream.writeString(this.name);
        stream.writeVInt(1);
        stream.writeVInt(this.slot);
    }
}

module.exports = TeamInviteEntry;

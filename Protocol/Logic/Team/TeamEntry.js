class TeamEntry {
    constructor() {
        this.type = 0;
        this.byte1 = 0;
        this.capacity = 3;
        this.id = 0;
        this.unkVInt1 = 0;
        this.byte2 = 0;
        this.byte3 = 0;
        this.unkVInt2 = 0;
        this.unkVInt3 = 0;
        this.eventSlot = 1;
        this.locationId = 0;
        this.members = [];
        this.invites = [];
        this.joinRequests = [];
        this.disabledBots = [];
        this.customModifiers = [];
        this.enableChat = true;
        this.showAccessory = true;
        this.showGears = true;
    }

    encode(stream) {
        stream.writeVInt(this.type);
        stream.writeBoolean(this.byte1);
        stream.writeVInt(this.capacity);
        stream.writeVInt(0);
        stream.writeVInt(this.id);
        stream.writeVInt(this.unkVInt1);
        stream.writeBoolean(this.byte2);
        stream.writeBoolean(this.byte3);
        stream.writeVInt(this.unkVInt2);
        stream.writeVInt(this.unkVInt3);
        stream.writeVInt(this.eventSlot);
        stream.writeVInt(this.locationId || 0);
        
        stream.writeVInt(0);
        stream.writeVInt(2);
        stream.writeVInt(0);
        stream.writeVInt(0);

        stream.writeVInt(this.members.length);
        for (const entry of this.members) {
            entry.encode(stream);
        }

        stream.writeVInt(this.invites.length);
        for (const entry of this.invites) {
            entry.encode(stream);
        }

        stream.writeVInt(this.joinRequests.length);
        for (const request of this.joinRequests) {
            request.encode(stream);
        }

        stream.writeVInt(this.disabledBots.length);
        for (const i of this.disabledBots) {
            stream.writeVInt(i);
        }

        stream.writeVInt(this.customModifiers.length);
        for (const modifier of this.customModifiers) {
            stream.writeVInt(modifier);
            stream.writeVInt(0);
        }

        stream.writeBoolean(this.enableChat);
        stream.writeBoolean(this.showAccessory);
        stream.writeBoolean(this.showGears);

        stream.writeVInt(this.customModifiers.length);
        for (const modifier of this.customModifiers) {
            stream.writeVInt(modifier);
        }
    }
}

module.exports = TeamEntry;

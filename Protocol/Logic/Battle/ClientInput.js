class ClientInput {
    constructor() {
        this.index = 0;
        this.type = 0;
        this.emoteIndex = 0;
        this.x = 0;
        this.y = 0;
        this.autoAttack = false;
        this.autoAttackTarget = 0;
        this.ownerSessionId = 0;
    }

    decode(stream) {
        this.index = stream.readPositiveInt(15);
        this.type = stream.readPositiveInt(5);

        this.x = stream.readInt(15);
        this.y = stream.readInt(15);
        stream.readBoolean(); // unused
        this.autoAttack = stream.readBoolean();
        stream.readBoolean(); // unused

        if (this.type === 9) {
            this.emoteIndex = stream.readPositiveInt(3);
        }
        if (this.type === 11) {
            stream.readPositiveVIntMax255();
        }
        if (this.type === 15) {
            this.emoteIndex = stream.readPositiveIntMax511() - 6;
            stream.readPositiveIntMax511();
        }
        if (this.type === 16) {
            stream.readPositiveIntMax511();
        }

        if (this.autoAttack) {
            if (stream.readBoolean()) {
                const v7 = stream.readPositiveInt(14);
                this.autoAttackTarget = GlobalId.createGlobalId(1, v7);
            }
        }
    }
}

module.exports = ClientInput;

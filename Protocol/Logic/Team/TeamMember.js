class TeamMember {
    constructor() {
        this.isOwner = false;
        this.accountId = 0;
        this.characterId = 0;
        this.skinId = 0;
        this.unk1 = 1000;
        this.heroTrophies = 0;
        this.heroHighestTrophies = 0;
        this.heroLevel = 11;
        this.state = 0;
        this.unk2 = 0;
        this.isReady = false;
        this.teamIndex = 0;
        this.unk3 = 0;
        this.unk4 = 0;
        this.unk5 = 0;
        this.unk6 = 0;
        this.unk7 = 0;
        this.displayData = null;
        this.starPowerId = 0;
        this.gadgetId = 0;
        this.gearId1 = 0;
        this.gearId2 = 0;
        this.overchargeId = 0;
        this.unkRef1 = 0;
        this.unkRef2 = 0;
        this.refCount = 0;
        this.refs = [];
        this.unkVInt1 = 0;
        this.unkVInt2 = 0;
    }

    encode(stream) {
        stream.writeBoolean(this.isOwner);
        stream.writeVInt(0);
        stream.writeVInt(this.accountId);
        stream.writeVInt(this.characterId || 0);
        stream.writeVInt(this.skinId || 0);
        stream.writeVInt(this.unk1);
        stream.writeVInt(this.heroTrophies);
        stream.writeVInt(this.heroHighestTrophies);
        stream.writeVInt(this.heroLevel || 11);
        stream.writeVInt(this.state);
        stream.writeVInt(this.unk2);
        stream.writeBoolean(this.isReady);
        stream.writeVInt(this.teamIndex);
        stream.writeVInt(this.unk3);
        stream.writeVInt(this.unk4);
        stream.writeVInt(this.unk5);
        stream.writeVInt(this.unk6);
        stream.writeVInt(this.unk7);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(this.starPowerId || 0);
        stream.writeVInt(this.gadgetId || 0);
        stream.writeVInt(this.gearId1 || 0);
        stream.writeVInt(this.gearId2 || 0);
        stream.writeVInt(this.overchargeId || 0);
        stream.writeVInt(this.unkRef1 || 0);
        stream.writeVInt(this.unkRef2 || 0);
        stream.writeVInt(this.refs.length);
        for (const ref of this.refs) {
            stream.writeVInt(ref);
        }
        stream.writeVInt(this.unkVInt1);
        stream.writeVInt(this.unkVInt2);
    }
}

module.exports = TeamMember;

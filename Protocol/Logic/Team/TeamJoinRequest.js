class TeamJoinRequest {
    constructor() {}
    encode(stream) {
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeString("");
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
    }
}

module.exports = TeamJoinRequest;

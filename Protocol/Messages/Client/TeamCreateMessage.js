const PiranhaMessage = require("../../PiranhaMessage");
const TeamEntry = require("../../Logic/Team/TeamEntry");
const TeamMember = require("../../Logic/Team/TeamMember");
const TeamMessage = require("../Server/TeamMessage");
const ClientsManager = require("../../Utils/ClientsManager");

class TeamCreateMessage extends PiranhaMessage {
    constructor(bytes, client) {
        super(bytes);
        this.client = client;
        this.id = 12541;
        this.version = 0;
        this.messageVersion = 0;
        this.eventSlot = 0;
        this.teamType = 0;
        this.unkVInt = 0;
        this.unkLogicLong = [0, 0];
    }

    decode() {
        this.unkLogicLong = this.readLong();
        this.teamType = this.readVInt();
        this.eventSlot = this.readVInt();
        this.unkVInt = this.readVInt();
    }

    encode() {}

    process() {
        const allClients = ClientsManager.GetAll();
        let player = null;
        
        for (const key in allClients) {
            player = allClients[key].Player;
            break;
        }

        if (!player) {
            console.log("TeamCreateMessage: Aucun joueur trouvé");
            return;
        }

        const team = new TeamEntry();
        team.id = Date.now();
        team.type = 0;
        team.eventSlot = 0;
        team.locationId = 0;

        const member = new TeamMember();
        member.isOwner = true;
        member.accountId = player.ID[1];
        member.characterId = player.SelectedBrawlers[0] || 0;
        member.heroTrophies = player.Trophies || 0;
        member.heroHighestTrophies = player.HighestTrophies || 0;
        member.heroLevel = 11;
        member.state = 0;
        member.isReady = false;
        member.teamIndex = 0;

        team.members.push(member);

        if (!global.teams) {
            global.teams = new Map();
        }
        global.teams.set(team.id, team);

        const message = new TeamMessage(null, this.client);
        message.team = team;
        message.send();

        console.log(`Equipe creee: id=${team.id}`);
    }
}

module.exports = TeamCreateMessage;

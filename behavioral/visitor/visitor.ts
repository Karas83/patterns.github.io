 interface Player {
    accept(agent: Agent): void;
}

class Forward implements Player {

    public accept(agent: Agent): void {
        agent.checkExclusiveSkillofForward(this);
    }

    public checkExclusiveSkillofForward(): string {
        return 'Has incredible dribbling';
    }
}

class Defender implements Player {

    public accept(agent: Agent): void {
        agent.checkExclusiveSkillofDefender(this);
    }

    public checkExclusiveSkillofDefender(): string {
        return 'Has incredible strength';
    }
}

interface Agent {
    checkExclusiveSkillofForward(element: Forward): void;

    checkExclusiveSkillofDefender(element: Defender): void;
}

class Agent1 implements Agent {
    public checkExclusiveSkillofForward(element: Forward): void {
        console.log(`${element.checkExclusiveSkillofForward()} and fantastic speed`);
    }

    public checkExclusiveSkillofDefender(element: Defender): void {
        console.log(`${element.checkExclusiveSkillofDefender()} and fantastic speed`);
    }
}

class Agent2 implements Agent {
    public checkExclusiveSkillofForward(element: Forward): void {
        console.log(`${element.checkExclusiveSkillofForward()} and infinite stamina`);
    }

    public checkExclusiveSkillofDefender(element: Defender): void {
        console.log(`${element.checkExclusiveSkillofDefender()} and infinite stamina`);
    }
}

function clientCode(players: Player[], agent: Agent) {

    for (const player of players) {
        player.accept(agent);
    }

}

const players = [
    new Forward(),
    new Defender(),
];
console.log('');
console.log('Professional team work with agent');
const agent1 = new Agent1();
clientCode(players, agent1);
console.log('');

console.log('Professional team also work with special agent');
const agent2 = new Agent2();
clientCode(players, agent2);
console.log('');
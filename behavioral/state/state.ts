class FootballPlayer {

    private state: State;

    constructor(state: State) {
        this.transitionTo(state);
    }

    public transitionTo(state: State): void {
        console.log(`Football player: state change to ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setPlayer(this);
    }

    public train(): void {
        this.state.healthy();
    }

    public rest(): void {
        this.state.injured();
    }
}

abstract class State {
    protected player: FootballPlayer;

    public setPlayer(player: FootballPlayer) {
        this.player = player;
    }

    public abstract healthy(): void;

    public abstract injured(): void;
}

class Healthy extends State {
    public healthy(): void {
        console.log('Healthy player has hard training');
        console.log('Player injured during his training, he want take a rest');
        this.player.transitionTo(new Injured());
    }

    public injured(): void {}
}

class Injured extends State {
    public healthy(): void {}

    public injured(): void {
        console.log('Injured player has a rest');
        console.log('After a rest player must go to training');
        this.player.transitionTo(new Healthy());
    }
}

const player = new FootballPlayer(new Healthy());
console.log('');
player.train();
player.rest();
console.log('');
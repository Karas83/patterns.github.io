
 interface FootballAcademy {
    attach(scout: Scout): void;

    detach(scout: Scout): void;

    notify(): void;
}

class ArsenalFootballAcademy implements FootballAcademy {

    private scouts: Scout[] = [];

    public attach(scout: Scout): void {
        console.log('Add scout to academy list');
        this.scouts.push(scout);
    }

    public detach(scout: Scout): void {
        const scoutIndex = this.scouts.indexOf(scout);
        if (scoutIndex === -1) {
            return console.log('This scout not watch our players');
        }

        this.scouts.splice(scoutIndex, 1);
        console.log('Delete scout from academy list.');
    }

    public notify(): void {
        console.log('Notifying scouts about our new players');
        for (const scout of this.scouts) {
            scout.update(this);
        }
    }

    public addNewPlayers(): void {
        console.log('New player arrived to academy');
        this.notify();
    }
}

interface Scout {
    update(channel: FootballAcademy): void;
}

class GoalkeepersScout implements Scout {
    public update(academy: FootballAcademy): void {
        console.log('Goalkeepers scout: Updates received');
    }
}

class ForwardsScout implements Scout {
    public update(academy: FootballAcademy): void {
        console.log('Forwards scout: Updates received');
    }
}

console.log('');
const arsenalFootbalAcademy = new ArsenalFootballAcademy();
const GKScout = new GoalkeepersScout();
arsenalFootbalAcademy.attach(GKScout);
const FWScout = new ForwardsScout();
arsenalFootbalAcademy.attach(FWScout);

console.log('');
arsenalFootbalAcademy.addNewPlayers();

console.log('');
arsenalFootbalAcademy.detach(FWScout);
arsenalFootbalAcademy.addNewPlayers();
console.log('');
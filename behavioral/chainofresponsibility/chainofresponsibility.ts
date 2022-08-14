interface Trainer {
    setNext(handler: Trainer): Trainer;

    trainer(request: string): string;
}

abstract class AbstractTrainer implements Trainer
{
    private nextTrainer: Trainer;

    public setNext(trainer: Trainer): Trainer {
        this.nextTrainer = trainer;

        return trainer;
    }

    public trainer(request: string): string {
        if (this.nextTrainer) {
            return this.nextTrainer.trainer(request);
        }

        return null;
    }
}

class FootballTrainer extends AbstractTrainer {
    public trainer(request: string): string {
        if (request === 'Footbal team') {
            return `Football trainer: I'll train a ${request}.`;
        }
        return super.trainer(request);

    }
}

class BasketballTrainer extends AbstractTrainer {
    public trainer(request: string): string {
        if (request === 'Basketball team') {
            return `Basketball trainer: I'll train a ${request}.`;
        }
        return super.trainer(request);
    }
}

class VolleyballTrainer extends AbstractTrainer {
    public trainer(request: string): string {
        if (request === 'Volleyball team') {
            return `Volleyball trainer: I'll train a ${request}.`;
        }
        return super.trainer(request);
    }
}

function clientCode(trainer: Trainer) {
    const teams = ['Volleyball team', 'Footbal team', 'Basketball team', 'Hockey team'];

    for (const team of teams) {
        console.log(`Who will train a ${team}?`);

        const result = trainer.trainer(team);
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`  ${team} was left without trainer.`);
        }
    }
}

const football = new FootballTrainer();
const basketball = new BasketballTrainer();
const volleyball = new VolleyballTrainer();

football.setNext(basketball).setNext(volleyball);

console.log('Chain: football > basketball > volleyball\n');
clientCode(football);
console.log('');

console.log('Subchain: basketball > volleyball\n');
clientCode(basketball);
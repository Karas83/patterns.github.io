 interface Trainer {
    execute(): void;
}

class Assistant implements Trainer {
    train: string;

    constructor(train: string) {
        this.train = train;
    }

    public execute(): void {
        console.log(`Assistant: I can train one player like ${this.train}`);
    }
}

class Coach implements Trainer {
    private coachassis: Coachassis;

    private a: string;

    private b: string;

    constructor(coachassis: Coachassis, a: string, b: string) {
        this.coachassis = coachassis;
        this.a = a;
        this.b = b;
    }

    public execute(): void {
        console.log('Coach: My assistant must train many players.');
        this.coachassis.train1(this.a);
        this.coachassis.train2(this.b);
    }
}

class Coachassis {
    public train1(a: string): void {
        console.log(`Coach assistant: train our ${a}.`);
    }

    public train2(b: string): void {
        console.log(`Coach assistant: also train our ${b}.`);
    }
}

class MainCoach {
    private onStart: Trainer;

    private onFinish: Trainer;

    public setOnStart(command: Trainer): void {
        this.onStart = command;
    }

    public setOnFinish(command: Trainer): void {
        this.onFinish = command;
    }

    public trainTeam(): void {
        console.log('MainCoach: We must train all our team!');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }

        console.log('MainCoach: this is not enough');

        console.log('MainCoach: Where my assistant? He will do much more!');
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }

    private isCommand(object): object is Trainer {
        return object.execute !== undefined;
    }
}

const mainCoach = new MainCoach();
mainCoach.setOnStart(new Assistant('goalkeeper'));
const coachassis = new Coachassis();
mainCoach.setOnFinish(new Coach(coachassis, 'defenders', 'mid players'));

mainCoach.trainTeam();
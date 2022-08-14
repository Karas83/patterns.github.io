interface Mediator {
    notify(sender: object, event: string): void;
}

class CoachAssistant implements Mediator {
    private coach1: Coach1;

    private coach2: Coach2;

    private maincoach: MainCoach;


    constructor(c1: Coach1, c2: Coach2, c3:MainCoach) {
        this.coach1 = c1;
        this.coach1.setMediator(this);
        this.coach2 = c2;
        this.coach2.setMediator(this);
        this.maincoach = c3;
        this.maincoach.setMediator(this);

    }

    public notify(sender: object, event: string): void {
        if (event === 'Train team') {
            console.log('Coach assistant reacts on train team and triggers following coach:');
            this.coach1.traingoalkeeper();
            this.coach1.traindefender();
            this.coach2.trainmid();
            this.coach2.trainattacker();
        }

        if (event === 'Train attackers') {
            console.log('Coach assistant reacts on Train attakers and triggers following coach:');
            this.coach2.trainmid();
            this.coach2.trainattacker();
        }

        if (event === 'Train defenders') {
            console.log('Coach assistant reacts on Train defenders and triggers following operations:');
            this.coach1.traingoalkeeper();
            this.coach1.traindefender();
        }
    }
}

class BaseComponent {
    protected mediator: Mediator;

    constructor(mediator?: Mediator) {
        this.mediator = mediator!;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

class Coach1 extends BaseComponent {
    public traingoalkeeper(): void {
        console.log('Coach1 1 train goalkeeper');
        this.mediator.notify(this, 'Train goalkeeper');
    }

    public traindefender(): void {
        console.log('Coach1 1 train defenders');
        this.mediator.notify(this, 'Train defender');
    }
}

class Coach2 extends BaseComponent {
    public trainmid(): void {
        console.log('Coach 2 train mid players');
        this.mediator.notify(this, 'Train mid');
    }

    public trainattacker(): void {
        console.log('Coach 2  train attackers');
        this.mediator.notify(this, 'Train attacker');
    }
}

class MainCoach extends BaseComponent {
    public trainteam(): void {
        console.log('Main Coach say to train team');
        this.mediator.notify(this, 'Train team');
    }

    public traindefenders(): void {
        console.log('Main Coach say to train defenders');
        this.mediator.notify(this, 'Train defenders');
    }
    public trainattackers(): void {
        console.log('Main Coach say to train attackers');
        this.mediator.notify(this, 'Train attackers');
    }
}

const c1 = new Coach1();
const c2 = new Coach2();
const c3 = new MainCoach();

const mediator = new CoachAssistant(c1, c2, c3);


c3.trainteam();

console.log('');

c3.traindefenders();

console.log('');

c3.trainattackers();

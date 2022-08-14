interface BallCamera {
    upgrade(): string;
}

class ChildBall implements BallCamera {
    public upgrade(): string {
        return 'ChildBall';
    }
}

class BallMaster implements BallCamera {
    protected component: BallCamera;

    constructor(component: BallCamera) {
        this.component = component;
    }

    public upgrade(): string {
        return this.component.upgrade();
    }
}

class NormalBall extends BallMaster {

    public upgrade(): string {
        return `Add nylon layer(${super.upgrade()})`;
    }
}

class ProfBall extends BallMaster {
    public upgrade(): string {
        return `Add natural layer(${super.upgrade()})`;
    }
}

function clientCode(component: BallCamera) {
    console.log(`RESULT: ${component.upgrade()}`);
}

const simple = new ChildBall();
const decorator1 = new NormalBall(simple);
const decorator2 = new ProfBall(decorator1);
console.log('');
console.log('I\'ve got a child ball');
clientCode(simple);
console.log('');
console.log('Now I\'ve got a normal ball');
clientCode(decorator1);
console.log('');
console.log('Now I\'ve got a professional ball:');
clientCode(decorator2);
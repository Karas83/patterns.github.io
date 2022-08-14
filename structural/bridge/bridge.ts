class NormalBall {
    protected color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    public paint(): string {
        const result = this.color.ballcolor();
        return `Normal ball color is :\n${result}`;
    }
}

class FutsalBall extends NormalBall {
    public paint(): string {
        const result = this.color.ballcolor();
        return `Futsal ball color is :\n${result}`;
    }
}

interface Color {
    ballcolor(): string;
}

class redcolor implements Color {
    public ballcolor(): string {
        return 'red';
    }
}

class greencolor implements Color {
    public ballcolor(): string {
        return 'green';
    }
}
function test(ball: NormalBall) {
    console.log(ball.paint());
}

let color = new redcolor();
let ball = new NormalBall(color);
test(ball);

console.log('');

color = new greencolor();
ball = new FutsalBall(color);
test(ball);

console.log('');

color = new greencolor();
ball = new NormalBall(color);
test(ball);

console.log('');

color = new redcolor();
ball = new FutsalBall(color);
test(ball);
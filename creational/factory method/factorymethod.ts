abstract class BallFactory {

    public abstract createBall(): Ball;

    public orderBall() {
        const ball = this.createBall();
        return ball.type() + ball.size() + ', ' + ball.material() + ', ' + ball.color();
    }
}

class NormalBallFactory extends BallFactory {

    public createBall(): Ball {
        return new NormalTypeBall();
    }
}

class FutsalBallFactory extends BallFactory {
    public createBall(): Ball {
        return new FutsalTypeBall();
    }
}

interface Ball {
    type(): string
    size(): string;
    material(): string;
    color(): string;
}

class NormalTypeBall implements Ball {
    public type(): string {
        return `Ball type is normal,`;
    }
    public size(): string {
        return `size is 6`;
    }
    public material(): string {
        return `material is natural`;
    }
    public color(): string {
        return `color is white`;
    }
}

class FutsalTypeBall implements Ball {
    public type(): string {
        return `Ball type is futsal,`;
    }
    public size(): string {
        return `size is 4`;
    }
    public material(): string {
        return `material is syntethic`;
    }
    public color(): string {
        return `color is red`;
    }
}

function test(creator: BallFactory) {
    console.log(creator.orderBall());
}
console.log('');
test(new NormalBallFactory());
console.log('');
test(new FutsalBallFactory());
console.log('');
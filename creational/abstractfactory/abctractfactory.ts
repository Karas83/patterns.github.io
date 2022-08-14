 interface AbstractBallFactory {
    createNormalBall(): AbstractNormalBall;

    createFutsalBall(): AbstracFutsalBall;
}

class NikeFactory implements AbstractBallFactory {
    public createNormalBall(): AbstractNormalBall {
        return new NormalBall1();
    }

    public createFutsalBall(): AbstracFutsalBall {
        return new FutsalBall1();
    }
}


class PumaFactory implements AbstractBallFactory {
    public createNormalBall(): AbstractNormalBall {
        return new NormalBall2();
    }

    public createFutsalBall(): AbstracFutsalBall {
        return new FutsalBall2();
    }
}


interface AbstractNormalBall {
    material(): string;
}


class NormalBall1 implements AbstractNormalBall {
    public material(): string {
        return 'The material of the NormalBall1 is natural';
    }
}

class NormalBall2 implements AbstractNormalBall {
    public material(): string {
        return 'The material of the NormalBall2 is syntethic';
    }
}

interface AbstracFutsalBall {

    size(): string;
}


class FutsalBall1 implements AbstracFutsalBall {

    public size(): string {
        return 'The size of the product FutsalBall1 is 5';
    }

}

class FutsalBall2 implements AbstracFutsalBall {

    public size(): string {
        return 'The size of the product FutsalBall2 is 4';
    }
}

function clientCode(factory: AbstractBallFactory) {
    const normalball = factory.createNormalBall();
    const futsalball = factory.createFutsalBall();

    console.log(normalball.material());
    console.log(futsalball.size());
}

clientCode(new NikeFactory());
clientCode(new PumaFactory());
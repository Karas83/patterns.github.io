 class BallFlyweight {
    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState): void {
        const s = JSON.stringify(this.sharedState);
        const u = JSON.stringify(uniqueState);
        console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
    }
}

class BallFlyweightFactory {
    private flyweights: {[key: string]: BallFlyweight} = <any>{};

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new BallFlyweight(state);
        }
    }
    private getKey(state: string[]): string {
        return state.join('_');
    }
    public getFlyweight(sharedState: string[]): BallFlyweight {
        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            console.log('BallFlyweightFactory: Cant find a ball, creating new one.');
            this.flyweights[key] = new BallFlyweight(sharedState);
        } else {
            console.log('BallFlyweightFactory: Reusing existing ball.');
        }

        return this.flyweights[key];
    }

    public listFlyweights(): void {
        const count = Object.keys(this.flyweights).length;
        console.log(`\nBallFlyweightFactory: I have ${count} ball:`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}
const factory = new BallFlyweightFactory([
    ['Jabulani', '4', 'white'],
    ['Nike', '5', 'black'],
    ['Puma', '6', 'green']
]);
factory.listFlyweights();
function addBallToStore(
    ff: BallFlyweightFactory, model: string, year: string,
    brand: string, size: string, color: string,
) {
    console.log('\nManager: Adding a ball to store.');
    const flyweight = ff.getFlyweight([brand, size, color]);
    flyweight.operation([model, year]);
}

addBallToStore(factory, 'jb1', '2010', 'Jabulani', '4', 'white');

addBallToStore(factory, 'tiempo', '2018', 'Nike', '4', 'red');

factory.listFlyweights();
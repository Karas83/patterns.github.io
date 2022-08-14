 class Targetmm {
    public requestmm(a:number): number {
        return a;
    }
}
class DimensionInch {
    public DimensionRequestInch(a:number): number {
        return a;
    }
}

class Adapter extends Targetmm {
    private adaptee: DimensionInch;

    constructor(adaptee: DimensionInch) {
        super();
        this.adaptee = adaptee;
    }

    public requestmm(a:number): number {
        const result = this.adaptee.DimensionRequestInch(a);
        return a = a / 25.4;
    }
}

function clientCode(target: Targetmm) {
    console.log(target.requestmm(25.4));
}

console.log('Can work in mm');

console.log('');

const adaptee = new DimensionInch();
console.log('This is inch,cant work');
console.log(`${adaptee.DimensionRequestInch(25.4)}`);

console.log('');

console.log('Now i can work');
const adapter = new Adapter(adaptee);
clientCode(adapter);
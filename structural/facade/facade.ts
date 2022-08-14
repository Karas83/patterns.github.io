class Brigadier {
    protected turner: Turner;
    protected miller: Miller;
    protected grinder: Grinder;
    constructor(turner?: Turner, miller?: Miller, grinder?: Grinder) {
        this.turner = turner || new Turner();
        this.miller = miller || new Miller();
        this.grinder = grinder || new Grinder();
    }

    public operation(): string {
        let result = 'Brigadier give work\n';
        result += this.turner.operation1();
        result += this.miller.operation1();
        result += this.grinder.operation1();
        result += 'Brigadier chek work process\n';
        result += this.turner.operation2();
        result += this.miller.operation2();
        result += this.grinder.operation2();

        return result;
    }
}


class Turner {
    public operation1(): string {
        return 'Turner start work\n';
    }


    public operation2(): string {
        return 'Turner end work\n';
    }
}

class Miller {
    public operation1(): string {
        return 'Miller start work\n';
    }


    public operation2(): string {
        return 'Miller isnt finished yet\n';
    }
}

class Grinder {
    public operation1(): string {
        return 'Grinder start work\n';
    }


    public operation2(): string {
        return 'Grinder cant work\n';
    }
}


function clientCode(brigadier: Brigadier) {

    console.log(brigadier.operation());

}


const turner = new Turner();
const miller = new Miller();
const grinder = new Grinder();

const brigadier = new Brigadier(turner, miller, grinder);
clientCode(brigadier);
 class FootballPlayers {

    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public sortPlayers(): void {

        const result = this.strategy.doSort(['messi', 'ronaldo', 'neymar', 'fred', 'cancelo', 'dias', 'gomez', 'pavard', 'allison', 'hernandes', 'mane', 'salah']);
        console.log(result.join(','));

    }
}

interface Strategy {
    doSort(data: string[]): string[];
}

class SortByAlphabet implements Strategy {
    public doSort(data: string[]): string[] {
        return data.sort();
    }
}

class SortByReversAlphabet implements Strategy {
    public doSort(data: string[]): string[] {
        return data.reverse();
    }
}

console.log('');
const context = new FootballPlayers(new SortByAlphabet());
console.log('Client: Sorting players by alphabet');
context.sortPlayers();

console.log('');

console.log('Client: Sorting players by revers alphabet');
context.setStrategy(new SortByReversAlphabet());
context.sortPlayers();
console.log('');
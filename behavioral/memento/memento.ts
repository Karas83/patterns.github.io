class NumberColumn {

    private state: string;

    constructor(state: string) {
        this.state = state;
        console.log(`My first number is: ${state}`);
    }

    public addNumber(number: string): void {
        this.state = number;
        console.log(`Add a new line: ${number}`);
    }

    public save(): Memento {
        return new NumberColumnMemento(this.state);
    }

    public restore(memento: Memento): void {
        this.state = memento.getState();
        console.log(`Back one step: ${this.state}`);
    }
}

interface Memento {
    getState(): string;

    getName(): string;

    getDate(): string;
}

class NumberColumnMemento implements Memento {
    private state: string;

    private date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

    public getState(): string {
        return this.state;
    }

    public getName(): string {
        return `${this.date} / (${this.state})`;
    }

    public getDate(): string {
        return this.date;
    }
}

class Caretaker {
    private mementos: Memento[] = [];

    private numberColumn: NumberColumn;

    constructor(numberColumn: NumberColumn) {
        this.numberColumn = numberColumn;
    }

    public backup(): void {
        console.log('Saving last state');
        this.mementos.push(this.numberColumn.save());
    }

    public undo(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();

        console.log(`Restoring state to: ${memento.getName()}`);
        this.numberColumn.restore(memento);
    }

    public showHistory(): void {
        console.log('Here is the list of mementos:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}


const numberColumn = new NumberColumn('1');
const caretaker = new Caretaker(numberColumn);

caretaker.backup();
numberColumn.addNumber('2');

caretaker.backup();
numberColumn.addNumber('3');

caretaker.backup();
numberColumn.addNumber('4');

console.log('');
caretaker.showHistory();

console.log('Step back');
caretaker.undo();

console.log('Step back');
caretaker.undo();

console.log('Step back');
caretaker.undo();

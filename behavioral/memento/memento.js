var NumberColumn = /** @class */ (function () {
    //private text!: string;
    function NumberColumn(state) {
        this.state = state;
        console.log("My first number is: ".concat(state));
    }
    /**
     * Бизнес-логика Создателя может повлиять на его внутреннее состояние.
     * Поэтому клиент должен выполнить резервное копирование состояния с помощью
     * метода save перед запуском методов бизнес-логики.
     */
    NumberColumn.prototype.addNumber = function (number) {
        // console.log('Add a new line');
        this.state = number;
        console.log("Add a new line: ".concat(number));
    };
    /**
     * Сохраняет текущее состояние внутри снимка.
     */
    NumberColumn.prototype.save = function () {
        return new NumberColumnMemento(this.state);
    };
    /**
     * Восстанавливает состояние Создателя из объекта снимка.
     */
    NumberColumn.prototype.restore = function (memento) {
        this.state = memento.getState();
        console.log("Back one step: ".concat(this.state));
    };
    return NumberColumn;
}());
/**
 * Конкретный снимок содержит инфраструктуру для хранения состояния Создателя.
 */
var NumberColumnMemento = /** @class */ (function () {
    function NumberColumnMemento(state) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
    /**
     * Создатель использует этот метод, когда восстанавливает своё состояние.
     */
    NumberColumnMemento.prototype.getState = function () {
        return this.state;
    };
    /**
     * Остальные методы используются Опекуном для отображения метаданных.
     */
    NumberColumnMemento.prototype.getName = function () {
        return "".concat(this.date, " / (").concat(this.state, ")");
    };
    NumberColumnMemento.prototype.getDate = function () {
        return this.date;
    };
    return NumberColumnMemento;
}());
/**
 * Опекун не зависит от класса Конкретного Снимка. Таким образом, он не имеет
 * доступа к состоянию создателя, хранящемуся внутри снимка. Он работает со
 * всеми снимками через базовый интерфейс Снимка.
 */
var Caretaker = /** @class */ (function () {
    function Caretaker(numberColumn) {
        this.mementos = [];
        this.numberColumn = numberColumn;
    }
    Caretaker.prototype.backup = function () {
        console.log('Saving last state');
        this.mementos.push(this.numberColumn.save());
    };
    Caretaker.prototype.undo = function () {
        if (!this.mementos.length) {
            return;
        }
        var memento = this.mementos.pop();
        console.log("Restoring state to: ".concat(memento.getName()));
        this.numberColumn.restore(memento);
    };
    Caretaker.prototype.showHistory = function () {
        console.log('Here is the list of mementos:');
        for (var _i = 0, _a = this.mementos; _i < _a.length; _i++) {
            var memento = _a[_i];
            console.log(memento.getName());
        }
    };
    return Caretaker;
}());
/**
 * Клиентский код.
 */
var numberColumn = new NumberColumn('1');
var caretaker = new Caretaker(numberColumn);
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
console.log('Step back');
caretaker.undo();

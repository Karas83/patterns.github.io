var FootballPlayers = /** @class */ (function () {
    /**
     * Обычно Контекст принимает стратегию через конструктор, а также
     * предоставляет сеттер для её изменения во время выполнения.
     */
    function FootballPlayers(strategy) {
        this.strategy = strategy;
    }
    /**
     * Обычно Контекст позволяет заменить объект Стратегии во время выполнения.
     */
    FootballPlayers.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    /**
     * Вместо того, чтобы самостоятельно реализовывать множественные версии
     * алгоритма, Контекст делегирует некоторую работу объекту Стратегии.
     */
    FootballPlayers.prototype.sortPlayers = function () {
        // ...
        var result = this.strategy.doSort(['messi', 'ronaldo', 'neymar', 'fred', 'cancelo', 'dias', 'gomez', 'pavard', 'allison', 'hernandes', 'mane', 'salah']);
        console.log(result.join(','));
        // ...
    };
    return FootballPlayers;
}());
/**
 * Конкретные Стратегии реализуют алгоритм, следуя базовому интерфейсу
 * Стратегии. Этот интерфейс делает их взаимозаменяемыми в Контексте.
 */
var SortByAlphabet = /** @class */ (function () {
    function SortByAlphabet() {
    }
    SortByAlphabet.prototype.doSort = function (data) {
        return data.sort();
    };
    return SortByAlphabet;
}());
var SortByReversAlphabet = /** @class */ (function () {
    function SortByReversAlphabet() {
    }
    SortByReversAlphabet.prototype.doSort = function (data) {
        return data.reverse();
    };
    return SortByReversAlphabet;
}());
/**
 * Клиентский код выбирает конкретную стратегию и передаёт её в контекст. Клиент
 * должен знать о различиях между стратегиями, чтобы сделать правильный выбор.
 */
console.log('');
var context = new FootballPlayers(new SortByAlphabet());
console.log('Client: Sorting players by alphabet');
context.sortPlayers();
console.log('');
console.log('Client: Sorting players by revers alphabet');
context.setStrategy(new SortByReversAlphabet());
context.sortPlayers();
console.log('');

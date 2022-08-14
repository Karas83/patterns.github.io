var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Конкретные Посредники реализуют совместное поведение, координируя отдельные
 * компоненты.
 */
var CoachAssistant = /** @class */ (function () {
    function CoachAssistant(c1, c2, c3) {
        this.coach1 = c1;
        this.coach1.setMediator(this);
        this.coach2 = c2;
        this.coach2.setMediator(this);
        this.maincoach = c3;
        this.maincoach.setMediator(this);
    }
    CoachAssistant.prototype.notify = function (sender, event) {
        if (event === 'Train team') {
            console.log('Coach assistant reacts on train team and triggers following coach:');
            this.coach1.traingoalkeeper();
            this.coach1.traindefender();
            this.coach2.trainmid();
            this.coach2.trainattacker();
        }
        if (event === 'Train attackers') {
            console.log('Coach assistant reacts on Train attakers and triggers following coach:');
            this.coach2.trainmid();
            this.coach2.trainattacker();
        }
        if (event === 'Train defenders') {
            console.log('Coach assistant reacts on Train defenders and triggers following operations:');
            this.coach1.traingoalkeeper();
            this.coach1.traindefender();
        }
    };
    return CoachAssistant;
}());
/**
 * Базовый Компонент обеспечивает базовую функциональность хранения экземпляра
 * посредника внутри объектов компонентов.
 */
var BaseComponent = /** @class */ (function () {
    function BaseComponent(mediator) {
        this.mediator = mediator;
    }
    BaseComponent.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return BaseComponent;
}());
/**
 * Конкретные Компоненты реализуют различную функциональность. Они не зависят от
 * других компонентов. Они также не зависят от каких-либо конкретных классов
 * посредников.
 */
var Coach1 = /** @class */ (function (_super) {
    __extends(Coach1, _super);
    function Coach1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coach1.prototype.traingoalkeeper = function () {
        console.log('Coach1 1 train goalkeeper');
        this.mediator.notify(this, 'Train goalkeeper');
    };
    Coach1.prototype.traindefender = function () {
        console.log('Coach1 1 train defenders');
        this.mediator.notify(this, 'Train defender');
    };
    return Coach1;
}(BaseComponent));
var Coach2 = /** @class */ (function (_super) {
    __extends(Coach2, _super);
    function Coach2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coach2.prototype.trainmid = function () {
        console.log('Coach 2 train mid players');
        this.mediator.notify(this, 'Train mid');
    };
    Coach2.prototype.trainattacker = function () {
        console.log('Coach 2  train attackers');
        this.mediator.notify(this, 'Train attacker');
    };
    return Coach2;
}(BaseComponent));
var MainCoach = /** @class */ (function (_super) {
    __extends(MainCoach, _super);
    function MainCoach() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainCoach.prototype.trainteam = function () {
        console.log('Main Coach say to train team');
        this.mediator.notify(this, 'Train team');
    };
    MainCoach.prototype.traindefenders = function () {
        console.log('Main Coach say to train defenders');
        this.mediator.notify(this, 'Train defenders');
    };
    MainCoach.prototype.trainattackers = function () {
        console.log('Main Coach say to train attackers');
        this.mediator.notify(this, 'Train attackers');
    };
    return MainCoach;
}(BaseComponent));
/**
 * Клиентский код.
 */
var c1 = new Coach1();
var c2 = new Coach2();
var c3 = new MainCoach();
var mediator = new CoachAssistant(c1, c2, c3);
c3.trainteam();
console.log('');
c3.traindefenders();
console.log('');
c3.trainattackers();

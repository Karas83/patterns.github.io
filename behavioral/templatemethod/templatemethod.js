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
var FootballAcademy = /** @class */ (function () {
    function FootballAcademy() {
    }
    FootballAcademy.prototype.train = function () {
        this.trainpassing();
        this.trainstamina();
        this.traintackles();
        this.trainshooting();
        this.traindefending();
        this.trainadditionalskill1();
        this.trainadditionalskill2();
    };
    FootballAcademy.prototype.trainstamina = function () {
        console.log('All players must train stamina');
    };
    FootballAcademy.prototype.trainpassing = function () {
        console.log('All players must train passing');
    };
    FootballAcademy.prototype.traintackles = function () {
        console.log('All players must train tackles');
    };
    FootballAcademy.prototype.trainadditionalskill1 = function () { };
    FootballAcademy.prototype.trainadditionalskill2 = function () { };
    return FootballAcademy;
}());
var AtackingFootballAcademy = /** @class */ (function (_super) {
    __extends(AtackingFootballAcademy, _super);
    function AtackingFootballAcademy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtackingFootballAcademy.prototype.trainshooting = function () {
        console.log('AtackingFootballAcadem: Atackers must have good shoting with they legs');
    };
    AtackingFootballAcademy.prototype.traindefending = function () {
        console.log('AtackingFootballAcadem: Atackers must have base defending skils');
    };
    AtackingFootballAcademy.prototype.trainadditionalskill1 = function () {
        console.log('AtackingFootballAcadem: Atackers must be quick');
    };
    return AtackingFootballAcademy;
}(FootballAcademy));
var DefendingFootballAcademy = /** @class */ (function (_super) {
    __extends(DefendingFootballAcademy, _super);
    function DefendingFootballAcademy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefendingFootballAcademy.prototype.trainshooting = function () {
        console.log('DefendingFootballAcademy: Defenders must have good shoting with they head');
    };
    DefendingFootballAcademy.prototype.traindefending = function () {
        console.log('DefendingFootballAcademy: Defenders must have all defending skils');
    };
    DefendingFootballAcademy.prototype.trainadditionalskill2 = function () {
        console.log('DefendingFootballAcademy: Defenders must be strong');
    };
    return DefendingFootballAcademy;
}(FootballAcademy));
function clientCode(abstractClass) {
    abstractClass.train();
}
console.log('');
console.log('Professional team need defender');
clientCode(new AtackingFootballAcademy());
console.log('');
console.log('Professional team need atacker');
clientCode(new DefendingFootballAcademy());
console.log('');

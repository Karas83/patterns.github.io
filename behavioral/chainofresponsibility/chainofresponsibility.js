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
var AbstractTrainer = /** @class */ (function () {
    function AbstractTrainer() {
    }
    AbstractTrainer.prototype.setNext = function (trainer) {
        this.nextTrainer = trainer;
        return trainer;
    };
    AbstractTrainer.prototype.trainer = function (request) {
        if (this.nextTrainer) {
            return this.nextTrainer.trainer(request);
        }
        return null;
    };
    return AbstractTrainer;
}());
var FootballTrainer = /** @class */ (function (_super) {
    __extends(FootballTrainer, _super);
    function FootballTrainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FootballTrainer.prototype.trainer = function (request) {
        if (request === 'Footbal team') {
            return "Football trainer: I'll train a ".concat(request, ".");
        }
        return _super.prototype.trainer.call(this, request);
    };
    return FootballTrainer;
}(AbstractTrainer));
var BasketballTrainer = /** @class */ (function (_super) {
    __extends(BasketballTrainer, _super);
    function BasketballTrainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasketballTrainer.prototype.trainer = function (request) {
        if (request === 'Basketball team') {
            return "Basketball trainer: I'll train a ".concat(request, ".");
        }
        return _super.prototype.trainer.call(this, request);
    };
    return BasketballTrainer;
}(AbstractTrainer));
var VolleyballTrainer = /** @class */ (function (_super) {
    __extends(VolleyballTrainer, _super);
    function VolleyballTrainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VolleyballTrainer.prototype.trainer = function (request) {
        if (request === 'Volleyball team') {
            return "Volleyball trainer: I'll train a ".concat(request, ".");
        }
        return _super.prototype.trainer.call(this, request);
    };
    return VolleyballTrainer;
}(AbstractTrainer));
function clientCode(trainer) {
    var teams = ['Volleyball team', 'Footbal team', 'Basketball team', 'Hockey team'];
    for (var _i = 0, teams_1 = teams; _i < teams_1.length; _i++) {
        var team = teams_1[_i];
        console.log("Who will train a ".concat(team, "?"));
        var result = trainer.trainer(team);
        if (result) {
            console.log("  ".concat(result));
        }
        else {
            console.log("  ".concat(team, " was left without trainer."));
        }
    }
}
var football = new FootballTrainer();
var basketball = new BasketballTrainer();
var volleyball = new VolleyballTrainer();
football.setNext(basketball).setNext(volleyball);
console.log('Chain: football > basketball > volleyball\n');
clientCode(football);
console.log('');
console.log('Subchain: basketball > volleyball\n');
clientCode(basketball);

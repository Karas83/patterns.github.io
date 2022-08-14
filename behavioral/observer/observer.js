var ArsenalFootballAcademy = /** @class */ (function () {
    function ArsenalFootballAcademy() {
        this.scouts = [];
    }
    ArsenalFootballAcademy.prototype.attach = function (scout) {
        console.log('Add scout to academy list');
        this.scouts.push(scout);
    };
    ArsenalFootballAcademy.prototype.detach = function (scout) {
        var scoutIndex = this.scouts.indexOf(scout);
        if (scoutIndex === -1) {
            return console.log('This scout not watch our players');
        }
        this.scouts.splice(scoutIndex, 1);
        console.log('Delete scout from academy list.');
    };
    ArsenalFootballAcademy.prototype.notify = function () {
        console.log('Notifying scouts about our new players');
        for (var _i = 0, _a = this.scouts; _i < _a.length; _i++) {
            var scout = _a[_i];
            scout.update(this);
        }
    };
    ArsenalFootballAcademy.prototype.addNewPlayers = function () {
        console.log('New player arrived to academy');
        this.notify();
    };
    return ArsenalFootballAcademy;
}());
var GoalkeepersScout = /** @class */ (function () {
    function GoalkeepersScout() {
    }
    GoalkeepersScout.prototype.update = function (academy) {
        console.log('Goalkeepers scout: Updates received');
    };
    return GoalkeepersScout;
}());
var ForwardsScout = /** @class */ (function () {
    function ForwardsScout() {
    }
    ForwardsScout.prototype.update = function (academy) {
        console.log('Forwards scout: Updates received');
    };
    return ForwardsScout;
}());
console.log('');
var arsenalFootbalAcademy = new ArsenalFootballAcademy();
var GKScout = new GoalkeepersScout();
arsenalFootbalAcademy.attach(GKScout);
var FWScout = new ForwardsScout();
arsenalFootbalAcademy.attach(FWScout);
console.log('');
arsenalFootbalAcademy.addNewPlayers();
console.log('');
arsenalFootbalAcademy.detach(FWScout);
arsenalFootbalAcademy.addNewPlayers();
console.log('');

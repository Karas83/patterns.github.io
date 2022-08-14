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
var FootballPlayer = /** @class */ (function () {
    function FootballPlayer(state) {
        this.transitionTo(state);
    }
    FootballPlayer.prototype.transitionTo = function (state) {
        console.log("Football player: state change to ".concat(state.constructor.name, "."));
        this.state = state;
        this.state.setPlayer(this);
    };
    FootballPlayer.prototype.train = function () {
        this.state.healthy();
    };
    FootballPlayer.prototype.rest = function () {
        this.state.injured();
    };
    return FootballPlayer;
}());
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.setPlayer = function (player) {
        this.player = player;
    };
    return State;
}());
var Healthy = /** @class */ (function (_super) {
    __extends(Healthy, _super);
    function Healthy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Healthy.prototype.healthy = function () {
        console.log('Healthy player has hard training');
        console.log('Player injured during his training, he want take a rest');
        this.player.transitionTo(new Injured());
    };
    Healthy.prototype.injured = function () { };
    return Healthy;
}(State));
var Injured = /** @class */ (function (_super) {
    __extends(Injured, _super);
    function Injured() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Injured.prototype.healthy = function () { };
    Injured.prototype.injured = function () {
        console.log('Injured player has a rest');
        console.log('After a rest player must go to training');
        this.player.transitionTo(new Healthy());
    };
    return Injured;
}(State));
var player = new FootballPlayer(new Healthy());
console.log('');
player.train();
player.rest();
console.log('');

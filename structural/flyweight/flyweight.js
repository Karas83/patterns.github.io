var BallFlyweight = /** @class */ (function () {
    function BallFlyweight(sharedState) {
        this.sharedState = sharedState;
    }
    BallFlyweight.prototype.operation = function (uniqueState) {
        var s = JSON.stringify(this.sharedState);
        var u = JSON.stringify(uniqueState);
        console.log("Flyweight: Displaying shared (".concat(s, ") and unique (").concat(u, ") state."));
    };
    return BallFlyweight;
}());
var BallFlyweightFactory = /** @class */ (function () {
    function BallFlyweightFactory(initialFlyweights) {
        this.flyweights = {};
        for (var _i = 0, initialFlyweights_1 = initialFlyweights; _i < initialFlyweights_1.length; _i++) {
            var state = initialFlyweights_1[_i];
            this.flyweights[this.getKey(state)] = new BallFlyweight(state);
        }
    }
    BallFlyweightFactory.prototype.getKey = function (state) {
        return state.join('_');
    };
    BallFlyweightFactory.prototype.getFlyweight = function (sharedState) {
        var key = this.getKey(sharedState);
        if (!(key in this.flyweights)) {
            console.log('BallFlyweightFactory: Cant find a ball, creating new one.');
            this.flyweights[key] = new BallFlyweight(sharedState);
        }
        else {
            console.log('BallFlyweightFactory: Reusing existing ball.');
        }
        return this.flyweights[key];
    };
    BallFlyweightFactory.prototype.listFlyweights = function () {
        var count = Object.keys(this.flyweights).length;
        console.log("\nBallFlyweightFactory: I have ".concat(count, " ball:"));
        for (var key in this.flyweights) {
            console.log(key);
        }
    };
    return BallFlyweightFactory;
}());
var factory = new BallFlyweightFactory([
    ['Jabulani', '4', 'white'],
    ['Nike', '5', 'black'],
    ['Puma', '6', 'green']
]);
factory.listFlyweights();
function addBallToStore(ff, model, year, brand, size, color) {
    console.log('\nManager: Adding a ball to store.');
    var flyweight = ff.getFlyweight([brand, size, color]);
    flyweight.operation([model, year]);
}
addBallToStore(factory, 'jb1', '2010', 'Jabulani', '4', 'white');
addBallToStore(factory, 'tiempo', '2018', 'Nike', '4', 'red');
factory.listFlyweights();

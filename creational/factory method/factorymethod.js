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
var BallFactory = /** @class */ (function () {
    function BallFactory() {
    }
    BallFactory.prototype.orderBall = function () {
        var ball = this.createBall();
        return ball.type() + ball.size() + ', ' + ball.material() + ', ' + ball.color();
    };
    return BallFactory;
}());
var NormalBallFactory = /** @class */ (function (_super) {
    __extends(NormalBallFactory, _super);
    function NormalBallFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalBallFactory.prototype.createBall = function () {
        return new NormalTypeBall();
    };
    return NormalBallFactory;
}(BallFactory));
var FutsalBallFactory = /** @class */ (function (_super) {
    __extends(FutsalBallFactory, _super);
    function FutsalBallFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FutsalBallFactory.prototype.createBall = function () {
        return new FutsalTypeBall();
    };
    return FutsalBallFactory;
}(BallFactory));
var NormalTypeBall = /** @class */ (function () {
    function NormalTypeBall() {
    }
    NormalTypeBall.prototype.type = function () {
        return "Ball type is normal,";
    };
    NormalTypeBall.prototype.size = function () {
        return "size is 6";
    };
    NormalTypeBall.prototype.material = function () {
        return "material is natural";
    };
    NormalTypeBall.prototype.color = function () {
        return "color is white";
    };
    return NormalTypeBall;
}());
var FutsalTypeBall = /** @class */ (function () {
    function FutsalTypeBall() {
    }
    FutsalTypeBall.prototype.type = function () {
        return "Ball type is futsal,";
    };
    FutsalTypeBall.prototype.size = function () {
        return "size is 4";
    };
    FutsalTypeBall.prototype.material = function () {
        return "material is syntethic";
    };
    FutsalTypeBall.prototype.color = function () {
        return "color is red";
    };
    return FutsalTypeBall;
}());
function test(creator) {
    console.log(creator.orderBall());
}
console.log('');
test(new NormalBallFactory());
console.log('');
test(new FutsalBallFactory());
console.log('');

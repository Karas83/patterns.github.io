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
var NormalBall = /** @class */ (function () {
    function NormalBall(color) {
        this.color = color;
    }
    NormalBall.prototype.paint = function () {
        var result = this.color.ballcolor();
        return "Normal ball color is :\n".concat(result);
    };
    return NormalBall;
}());
var FutsalBall = /** @class */ (function (_super) {
    __extends(FutsalBall, _super);
    function FutsalBall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FutsalBall.prototype.paint = function () {
        var result = this.color.ballcolor();
        return "Futsal ball color is :\n".concat(result);
    };
    return FutsalBall;
}(NormalBall));
var redcolor = /** @class */ (function () {
    function redcolor() {
    }
    redcolor.prototype.ballcolor = function () {
        return 'red';
    };
    return redcolor;
}());
var greencolor = /** @class */ (function () {
    function greencolor() {
    }
    greencolor.prototype.ballcolor = function () {
        return 'green';
    };
    return greencolor;
}());
function test(ball) {
    console.log(ball.paint());
}
var color = new redcolor();
var ball = new NormalBall(color);
test(ball);
console.log('');
color = new greencolor();
ball = new FutsalBall(color);
test(ball);
console.log('');
color = new greencolor();
ball = new NormalBall(color);
test(ball);
console.log('');
color = new redcolor();
ball = new FutsalBall(color);
test(ball);

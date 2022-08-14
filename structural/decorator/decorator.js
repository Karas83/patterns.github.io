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
var ChildBall = /** @class */ (function () {
    function ChildBall() {
    }
    ChildBall.prototype.upgrade = function () {
        return 'ChildBall';
    };
    return ChildBall;
}());
var BallMaster = /** @class */ (function () {
    function BallMaster(component) {
        this.component = component;
    }
    BallMaster.prototype.upgrade = function () {
        return this.component.upgrade();
    };
    return BallMaster;
}());
var NormalBall = /** @class */ (function (_super) {
    __extends(NormalBall, _super);
    function NormalBall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalBall.prototype.upgrade = function () {
        return "Add nylon layer(".concat(_super.prototype.upgrade.call(this), ")");
    };
    return NormalBall;
}(BallMaster));
var ProfBall = /** @class */ (function (_super) {
    __extends(ProfBall, _super);
    function ProfBall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfBall.prototype.upgrade = function () {
        return "Add natural layer(".concat(_super.prototype.upgrade.call(this), ")");
    };
    return ProfBall;
}(BallMaster));
function clientCode(component) {
    console.log("RESULT: ".concat(component.upgrade()));
}
var simple = new ChildBall();
var decorator1 = new NormalBall(simple);
var decorator2 = new ProfBall(decorator1);
console.log('');
console.log('I\'ve got a child ball');
clientCode(simple);
console.log('');
console.log('Now I\'ve got a normal ball');
clientCode(decorator1);
console.log('');
console.log('Now I\'ve got a professional ball:');
clientCode(decorator2);

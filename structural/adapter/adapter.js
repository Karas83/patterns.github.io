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
var Targetmm = /** @class */ (function () {
    function Targetmm() {
    }
    Targetmm.prototype.requestmm = function (a) {
        return a;
    };
    return Targetmm;
}());
var DimensionInch = /** @class */ (function () {
    function DimensionInch() {
    }
    DimensionInch.prototype.DimensionRequestInch = function (a) {
        return a;
    };
    return DimensionInch;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(adaptee) {
        var _this = _super.call(this) || this;
        _this.adaptee = adaptee;
        return _this;
    }
    Adapter.prototype.requestmm = function (a) {
        var result = this.adaptee.DimensionRequestInch(a);
        return a = a / 25.4;
    };
    return Adapter;
}(Targetmm));
function clientCode(target) {
    console.log(target.requestmm(25.4));
}
console.log('Can work in mm');
console.log('');
var adaptee = new DimensionInch();
console.log('This is inch,cant work');
console.log("".concat(adaptee.DimensionRequestInch(25.4)));
console.log('');
console.log('Now i can work');
var adapter = new Adapter(adaptee);
clientCode(adapter);

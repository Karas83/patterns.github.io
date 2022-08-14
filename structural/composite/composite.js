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
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    Component.prototype.getParent = function () {
        return this.parent;
    };
    Component.prototype.add = function (component) { };
    Component.prototype.remove = function (component) { };
    Component.prototype.isComposite = function () {
        return false;
    };
    return Component;
}());
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ball.prototype.name = function () {
        return "New Ball";
    };
    return Ball;
}(Component));
var ballStore = /** @class */ (function (_super) {
    __extends(ballStore, _super);
    function ballStore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    ballStore.prototype.add = function (component) {
        this.children.push(component);
        component.setParent(this);
    };
    ballStore.prototype.remove = function (component) {
        var componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);
    };
    ballStore.prototype.isComposite = function () {
        return true;
    };
    ballStore.prototype.name = function () {
        var results = [];
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            results.push(child.name());
        }
        return "In this shop we have (".concat(results.join('+'), ")");
    };
    return ballStore;
}(Component));
function clientCode(component) {
    console.log("RESULT: ".concat(component.name()));
}
var simple = new Ball();
clientCode(simple);
console.log('');
var tree = new ballStore();
var branch1 = new ballStore();
branch1.add(new Ball());
branch1.add(new Ball());
var branch2 = new ballStore();
branch2.add(new Ball());
tree.add(branch1);
tree.add(branch2);
clientCode(tree);
console.log('');

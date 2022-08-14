var Brigadier = /** @class */ (function () {
    function Brigadier(turner, miller, grinder) {
        this.turner = turner || new Turner();
        this.miller = miller || new Miller();
        this.grinder = grinder || new Grinder();
    }
    Brigadier.prototype.operation = function () {
        var result = 'Brigadier give work\n';
        result += this.turner.operation1();
        result += this.miller.operation1();
        result += this.grinder.operation1();
        result += 'Brigadier chek work process\n';
        result += this.turner.operation2();
        result += this.miller.operation2();
        result += this.grinder.operation2();
        return result;
    };
    return Brigadier;
}());
var Turner = /** @class */ (function () {
    function Turner() {
    }
    Turner.prototype.operation1 = function () {
        return 'Turner start work\n';
    };
    Turner.prototype.operation2 = function () {
        return 'Turner end work\n';
    };
    return Turner;
}());
var Miller = /** @class */ (function () {
    function Miller() {
    }
    Miller.prototype.operation1 = function () {
        return 'Miller start work\n';
    };
    Miller.prototype.operation2 = function () {
        return 'Miller isnt finished yet\n';
    };
    return Miller;
}());
var Grinder = /** @class */ (function () {
    function Grinder() {
    }
    Grinder.prototype.operation1 = function () {
        return 'Grinder start work\n';
    };
    Grinder.prototype.operation2 = function () {
        return 'Grinder cant work\n';
    };
    return Grinder;
}());
function clientCode(brigadier) {
    console.log(brigadier.operation());
}
var turner = new Turner();
var miller = new Miller();
var grinder = new Grinder();
var brigadier = new Brigadier(turner, miller, grinder);
clientCode(brigadier);

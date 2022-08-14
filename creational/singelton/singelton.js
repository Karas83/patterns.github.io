var jabulani = /** @class */ (function () {
    function jabulani() {
    }
    jabulani.getInstance = function () {
        if (!jabulani.instance) {
            jabulani.instance = new jabulani();
        }
        return jabulani.instance;
    };
    jabulani.ballColorFinal = function () {
        console.log("green");
    };
    jabulani.ballColorGroup = function () {
        console.log("white");
    };
    return jabulani;
}());
function matchDay() {
    var ball1 = jabulani.getInstance();
    var ball2 = jabulani.getInstance();
    if (ball1 === ball1) {
        console.log('Работает,джабулани только один');
    }
    else {
        console.log('Упс,два мяча на поле');
    }
}
matchDay();
jabulani.ballColorFinal();
jabulani.ballColorGroup();

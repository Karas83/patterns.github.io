var Assistant = /** @class */ (function () {
    function Assistant(train) {
        this.train = train;
    }
    Assistant.prototype.execute = function () {
        console.log("Assistant: I can train one player like ".concat(this.train));
    };
    return Assistant;
}());
var Coach = /** @class */ (function () {
    function Coach(coachassis, a, b) {
        this.coachassis = coachassis;
        this.a = a;
        this.b = b;
    }
    Coach.prototype.execute = function () {
        console.log('Coach: My assistant must train many players.');
        this.coachassis.train1(this.a);
        this.coachassis.train2(this.b);
    };
    return Coach;
}());
var Coachassis = /** @class */ (function () {
    function Coachassis() {
    }
    Coachassis.prototype.train1 = function (a) {
        console.log("Coach assistant: train our ".concat(a, "."));
    };
    Coachassis.prototype.train2 = function (b) {
        console.log("Coach assistant: also train our ".concat(b, "."));
    };
    return Coachassis;
}());
var MainCoach = /** @class */ (function () {
    function MainCoach() {
    }
    MainCoach.prototype.setOnStart = function (command) {
        this.onStart = command;
    };
    MainCoach.prototype.setOnFinish = function (command) {
        this.onFinish = command;
    };
    MainCoach.prototype.trainTeam = function () {
        console.log('MainCoach: We must train all our team!');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
        console.log('MainCoach: this is not enough');
        console.log('MainCoach: Where my assistant? He will do much more!');
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    };
    MainCoach.prototype.isCommand = function (object) {
        return object.execute !== undefined;
    };
    return MainCoach;
}());
var mainCoach = new MainCoach();
mainCoach.setOnStart(new Assistant('goalkeeper'));
var coachassis = new Coachassis();
mainCoach.setOnFinish(new Coach(coachassis, 'defenders', 'mid players'));
mainCoach.trainTeam();

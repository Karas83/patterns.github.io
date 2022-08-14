var Forward = /** @class */ (function () {
    function Forward() {
    }
    Forward.prototype.accept = function (agent) {
        agent.checkExclusiveSkillofForward(this);
    };
    Forward.prototype.checkExclusiveSkillofForward = function () {
        return 'Has incredible dribbling';
    };
    return Forward;
}());
var Defender = /** @class */ (function () {
    function Defender() {
    }
    Defender.prototype.accept = function (agent) {
        agent.checkExclusiveSkillofDefender(this);
    };
    Defender.prototype.checkExclusiveSkillofDefender = function () {
        return 'Has incredible strength';
    };
    return Defender;
}());
var Agent1 = /** @class */ (function () {
    function Agent1() {
    }
    Agent1.prototype.checkExclusiveSkillofForward = function (element) {
        console.log("".concat(element.checkExclusiveSkillofForward(), " and fantastic speed"));
    };
    Agent1.prototype.checkExclusiveSkillofDefender = function (element) {
        console.log("".concat(element.checkExclusiveSkillofDefender(), " and fantastic speed"));
    };
    return Agent1;
}());
var Agent2 = /** @class */ (function () {
    function Agent2() {
    }
    Agent2.prototype.checkExclusiveSkillofForward = function (element) {
        console.log("".concat(element.checkExclusiveSkillofForward(), " and infinite stamina"));
    };
    Agent2.prototype.checkExclusiveSkillofDefender = function (element) {
        console.log("".concat(element.checkExclusiveSkillofDefender(), " and infinite stamina"));
    };
    return Agent2;
}());
function clientCode(players, agent) {
    for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
        var player = players_1[_i];
        player.accept(agent);
    }
}
var players = [
    new Forward(),
    new Defender(),
];
console.log('');
console.log('Professional team work with agent');
var agent1 = new Agent1();
clientCode(players, agent1);
console.log('');
console.log('Professional team also work with special agent');
var agent2 = new Agent2();
clientCode(players, agent2);
console.log('');

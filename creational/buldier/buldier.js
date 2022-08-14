var ProClubBuilder = /** @class */ (function () {
    function ProClubBuilder() {
        this.reset();
    }
    ProClubBuilder.prototype.reset = function () {
        this.club = new ProClub();
    };
    ProClubBuilder.prototype.setDefendrs = function () {
        this.club.parts.push('4 defenders');
    };
    ProClubBuilder.prototype.setMid = function () {
        this.club.parts.push('3 mis');
    };
    ProClubBuilder.prototype.setAttack = function () {
        this.club.parts.push('3 Attackers');
    };
    ProClubBuilder.prototype.setCouch = function () {
        this.club.parts.push('Lampard');
    };
    ProClubBuilder.prototype.getProduct = function () {
        var result = this.club;
        this.reset();
        return result;
    };
    return ProClubBuilder;
}());
var ProClub = /** @class */ (function () {
    function ProClub() {
        this.parts = [];
    }
    ProClub.prototype.listParts = function () {
        console.log("Club parts: ".concat(this.parts.join(', '), "\n"));
    };
    return ProClub;
}());
var MiniClubBuilder = /** @class */ (function () {
    function MiniClubBuilder() {
        this.reset();
    }
    MiniClubBuilder.prototype.reset = function () {
        this.club = new MiniClub();
    };
    MiniClubBuilder.prototype.setDefendrs = function () {
        this.club.parts.push('4 defenders');
    };
    MiniClubBuilder.prototype.setMid = function () {
        this.club.parts.push('3 mis');
    };
    MiniClubBuilder.prototype.setAttack = function () {
        this.club.parts.push('3 Attackers');
    };
    MiniClubBuilder.prototype.setCouch = function () {
        this.club.parts.push('Lampard');
    };
    MiniClubBuilder.prototype.getProduct = function () {
        var result = this.club;
        this.reset();
        return result;
    };
    return MiniClubBuilder;
}());
var MiniClub = /** @class */ (function () {
    function MiniClub() {
        this.parts = [];
    }
    MiniClub.prototype.listParts = function () {
        console.log("Club parts: ".concat(this.parts.join(', '), "\n"));
    };
    return MiniClub;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder1 = function (builder1) {
        this.builder1 = builder1;
    };
    Director.prototype.setBuilder2 = function (builder2) {
        this.builder2 = builder2;
    };
    Director.prototype.buildProTeam = function () {
        this.builder1.setDefendrs();
        this.builder1.setMid();
        this.builder1.setAttack();
        this.builder1.setCouch();
    };
    Director.prototype.buildMiniFootballTeam = function () {
        this.builder2.setDefendrs();
        this.builder2.setAttack();
    };
    return Director;
}());
function test(director) {
    var builder1 = new ProClubBuilder();
    var builder2 = new MiniClubBuilder();
    director.setBuilder1(builder1);
    director.setBuilder2(builder2);
    console.log('ProTeam');
    director.buildProTeam();
    builder1.getProduct().listParts();
    console.log('MiniTeam');
    director.buildMiniFootballTeam();
    builder2.getProduct().listParts();
}
var director = new Director();
test(director);

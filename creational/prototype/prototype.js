var FootballBall = /** @class */ (function () {
    function FootballBall(ballCamera, material, size, color) {
        this.ballCamera = ballCamera;
        this.material = material;
        this.size = size;
        this.color = color;
    }
    FootballBall.prototype.clone = function () {
        return new FootballBall(this.ballCamera, this.material, this.size, this.color);
    };
    return FootballBall;
}());
var prototypeBall = new FootballBall(true, "natural", 6, "white");
var Nike = prototypeBall.clone();
Nike.color = "black";
var Puma = prototypeBall.clone();
Puma.material = "syntethic";
var Select = prototypeBall.clone();
Select.ballCamera = false;
Select.size = 4;
Select.color = "green";
console.log(Nike);
console.log(Puma);
console.log(Select);

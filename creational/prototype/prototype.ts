class FootballBall {
    constructor(
        public ballCamera: boolean,
        public material: string,
        public size: number,
        public color: string
    ) { }
    clone() {
        return new FootballBall(this.ballCamera, this.material, this.size, this.color);
    }
}
const prototypeBall = new FootballBall(true, "natural", 6, "white");

const Nike = prototypeBall.clone();
Nike.color = "black";

const Puma = prototypeBall.clone();
Puma.material = "syntethic";

const Select = prototypeBall.clone();
Select.ballCamera = false;
Select.size = 4;
Select.color = "green";

console.log(Nike);
console.log(Puma);
console.log(Select);

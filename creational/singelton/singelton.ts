class jabulani{
    private static instance: jabulani;
    static getInstance() {
        if (!jabulani.instance) {
            jabulani.instance = new jabulani();
        }
        return jabulani.instance;
    }
    
    private final:string;

    static ballColorFinal(){
        console.log("green");
    }
    static ballColorGroup(){
        console.log("white");
    }
}


function matchDay() {
    const ball1 = jabulani.getInstance();
    const ball2 = jabulani.getInstance();

    if (ball1 === ball1) {
        console.log('Работает,джабулани только один');
    } else {
        console.log('Упс,два мяча на поле');
    }
}


matchDay();
jabulani.ballColorFinal();
jabulani.ballColorGroup(); 
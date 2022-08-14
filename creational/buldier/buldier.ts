interface FC_Builder {
    reset(): void;
    setDefendrs(): void;
    setMid(): void;
    setAttack(): void;
    setCouch(): void;
}

class ProClubBuilder implements FC_Builder {

    private club: ProClub;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.club = new ProClub();
    }

    public setDefendrs(): void {
        this.club.parts.push('4 defenders');
    }
    public setMid(): void {
        this.club.parts.push('3 mis');
    }
    public setAttack(): void {
        this.club.parts.push('3 Attackers');
    }
    public setCouch(): void {
        this.club.parts.push('Lampard');
    }

    public getProduct(): ProClub {
        const result = this.club;
        this.reset();
        return result;
    }
}

class ProClub {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Club parts: ${this.parts.join(', ')}\n`);
    }
}


class MiniClubBuilder implements FC_Builder {

    private club: MiniClub;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.club = new MiniClub();
    }

    public setDefendrs(): void {
        this.club.parts.push('4 defenders');
    }

    public setAttack(): void {
        this.club.parts.push('3 Attackers');
    }
    public setCouch(): void {
        this.club.parts.push('Lampard');
    }

    public getProduct(): MiniClub {
        const result = this.club;
        this.reset();
        return result;
    }
}

class MiniClub {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Club parts: ${this.parts.join(', ')}\n`);
    }
}







class Director {
    private builder1: ProClubBuilder;
    private builder2: MiniClubBuilder;

    public setBuilder1(builder1: ProClubBuilder): void {
        this.builder1 = builder1;
    }
    public setBuilder2(builder2: MiniClubBuilder): void {
        this.builder2 = builder2;
    }



    public buildProTeam(): void {
        this.builder1.setDefendrs();
        this.builder1.setMid();
        this.builder1.setAttack();
        this.builder1.setCouch();
    }

    public buildMiniFootballTeam(): void {
        this.builder2.setDefendrs();
        this.builder2.setAttack();
    }
}


function test(director: Director) {
    const builder1 = new ProClubBuilder();
    const builder2 = new MiniClubBuilder();
    director.setBuilder1(builder1);
    director.setBuilder2(builder2);

    console.log('ProTeam');
    director.buildProTeam();
    builder1.getProduct().listParts();

    console.log('MiniTeam');
    director.buildMiniFootballTeam();
    builder2.getProduct().listParts();

}

const director = new Director();
test(director);
 abstract class FootballAcademy {

    public train(): void {
        this.trainpassing();
        this.trainstamina();
        this.traintackles();
        this.trainshooting();
        this.traindefending();
        this.trainadditionalskill1();
        this.trainadditionalskill2();
    }

    protected trainstamina(): void {
        console.log('All players must train stamina');
    }

    protected trainpassing(): void {
        console.log('All players must train passing');
    }

    protected traintackles(): void {
        console.log('All players must train tackles');
    }

    protected abstract trainshooting(): void;

    protected abstract traindefending(): void;

    protected trainadditionalskill1(): void { }

    protected trainadditionalskill2(): void { }
}

class AtackingFootballAcademy extends FootballAcademy {
    protected trainshooting(): void {
        console.log('AtackingFootballAcadem: Atackers must have good shoting with they legs');
    }

    protected traindefending(): void {
        console.log('AtackingFootballAcadem: Atackers must have base defending skils');
    }
    protected trainadditionalskill1(): void {
        console.log('AtackingFootballAcadem: Atackers must be quick');
    }
}

class DefendingFootballAcademy extends FootballAcademy {
    protected trainshooting(): void {
        console.log('DefendingFootballAcademy: Defenders must have good shoting with they head');
    }

    protected traindefending(): void {
        console.log('DefendingFootballAcademy: Defenders must have all defending skils');
    }

    protected trainadditionalskill2(): void {
        console.log('DefendingFootballAcademy: Defenders must be strong');
    }
}

function clientCode(abstractClass: FootballAcademy) {
    abstractClass.train();
}
console.log('');
console.log('Professional team need defender');
clientCode(new AtackingFootballAcademy());
console.log('');

console.log('Professional team need atacker');
clientCode(new DefendingFootballAcademy());
console.log('');
interface Match {
    play(): void;
}

class OnlineMatch implements Match {
    public play(): void {
        console.log('Reward for match');
    }
}

class OfflineMatch implements Match {
    private onlineMatch: OnlineMatch;

    constructor(onlineMatch: OnlineMatch) {
        this.onlineMatch = onlineMatch;
    }

    public play(): void {
        if (this.checkWoL()) {
            this.logWoL();
            this.onlineMatch.play();
        }
    }

    private checkWoL(): boolean {
        console.log('OfflineMatch: Wait connection for checking win or lose');

        return true;
    }

    private logWoL(): void {
        console.log('OfflineMatch: You win');
    }
}

function clientCode(subject: Match) {
    subject.play();
}

console.log('Play online match');
const onlineMatch = new OnlineMatch();
clientCode(onlineMatch);

console.log('');

console.log('Play offline match');
const offlineMatch = new OfflineMatch(onlineMatch);
clientCode(offlineMatch);
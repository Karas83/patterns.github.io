var OnlineMatch = /** @class */ (function () {
    function OnlineMatch() {
    }
    OnlineMatch.prototype.play = function () {
        console.log('Reward for match');
    };
    return OnlineMatch;
}());
var OfflineMatch = /** @class */ (function () {
    function OfflineMatch(onlineMatch) {
        this.onlineMatch = onlineMatch;
    }
    OfflineMatch.prototype.play = function () {
        if (this.checkWoL()) {
            this.logWoL();
            this.onlineMatch.play();
        }
    };
    OfflineMatch.prototype.checkWoL = function () {
        console.log('OfflineMatch: Wait connection for checking win or lose');
        return true;
    };
    OfflineMatch.prototype.logWoL = function () {
        console.log('OfflineMatch: You win');
    };
    return OfflineMatch;
}());
function clientCode(subject) {
    subject.play();
}
console.log('Play online match');
var onlineMatch = new OnlineMatch();
clientCode(onlineMatch);
console.log('');
console.log('Play offline match');
var offlineMatch = new OfflineMatch(onlineMatch);
clientCode(offlineMatch);

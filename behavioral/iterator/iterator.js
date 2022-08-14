var IteratorForNumbers = /** @class */ (function () {
    function IteratorForNumbers(collection, reverse) {
        if (reverse === void 0) { reverse = false; }
        this.position = 0;
        this.reverse = false;
        this.collection = collection;
        this.reverse = reverse;
        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }
    IteratorForNumbers.prototype.rewind = function () {
        this.position = this.reverse ?
            this.collection.getCount() - 1 :
            0;
    };
    IteratorForNumbers.prototype.current = function () {
        return this.collection.getItems()[this.position];
    };
    IteratorForNumbers.prototype.key = function () {
        return this.position;
    };
    IteratorForNumbers.prototype.next = function () {
        var item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    };
    IteratorForNumbers.prototype.valid = function () {
        if (this.reverse) {
            return this.position >= 0;
        }
        return this.position < this.collection.getCount();
    };
    return IteratorForNumbers;
}());
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection() {
        this.items = [];
    }
    NumbersCollection.prototype.getItems = function () {
        return this.items;
    };
    NumbersCollection.prototype.getCount = function () {
        return this.items.length;
    };
    NumbersCollection.prototype.addItem = function (item) {
        this.items.push(item);
    };
    NumbersCollection.prototype.getIterator = function () {
        return new IteratorForNumbers(this);
    };
    NumbersCollection.prototype.getReverseIterator = function () {
        return new IteratorForNumbers(this, true);
    };
    return NumbersCollection;
}());
var collection = new NumbersCollection();
collection.addItem('1');
collection.addItem('2');
collection.addItem('3');
collection.addItem('4');
collection.addItem('5');
collection.addItem('6');
var iterator = collection.getIterator();
console.log('Iterate:');
while (iterator.valid()) {
    console.log(iterator.next());
}
console.log('');
console.log('Reverse Iterate:');
var reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}

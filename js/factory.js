let counter = createCounter();
let counter1 = createCounter();

function createCounter() {
    return {
        count: 0,
        inc: function () {
            this.count++;
            console.log(this);
        },
    };
}
console.log(this)
counter.inc();

console.log(counter.count);

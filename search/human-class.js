class Human {
    constructor() {
        this.man = [];
    }

    setHuman(id, name) {
        this.man.push({ id, name });
    }

    getHuman(id) {
        for (let i = 0; i < this.man.length; i++) {
            if (this.man[i].id === id) {
                return this.man[i];
            }
        }
    }
}

const person = new Human();
person.setHuman(1, "Mohammad");
person.setHuman(2, "Hardeep");
console.log(person.getHuman(2));

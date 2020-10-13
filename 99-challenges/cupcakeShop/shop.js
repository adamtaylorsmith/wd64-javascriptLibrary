
//const Cupcake = require('./cupcake'); //.js is unneccesary here
class Cupcake {
    constructor (icing, cake, price) {
        this.icing = icing;
        this.cake = cake;
        this.price = price;
    }
    getDescription() {
        console.log(`A ${this.icing} topped ${this.cake} for $${this.price}`);
    }
}

class Shop {
    constructor (location, owner) {
        this.location = location;
        this.owner = owner;
    }
    getLocation() {
        console.log(`located at: ${this.location}`);
    }
    getOwner() {
        console.log(`owned by: ${this.owner}`);
    }
    changeOwner(newOwner) {
        this.owner = newOwner;
    }
};

class CupcakeShop extends Shop {
    constructor(location, owner, name) {
        super(location, owner);
        this.name = name;
        this.inventory = [];
        this.cash = 0;
    }
    bakeBatch(count, batter, icing, price) { // make COUNT cupcakes and add them to inventory
        for (let i=0; i<count; i++) {
            let newCupcake = new Cupcake(icing, batter, price);
            this.inventory.push(newCupcake);
        }
    }
    sellCupcake() { // remove cupcake from inventory and increase cash by price of cupcake
        let soldCupcake = this.inventory.pop();
        this.cash += soldCupcake.price;
    }
};

let newShit = new CupcakeShop('Indianapolis', 'Me Dummy', 'Cupcakes In Your Face!');
newShit.bakeBatch(12, 'yes', 'yes', 4);
newShit.sellCupcake();
newShit.sellCupcake();
newShit.sellCupcake();
console.log(newShit);
console.log(newShit.cash);
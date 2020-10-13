
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

/* APIE
A - abstraction: hide complicated detail behind an easy interface
P - polymorphism: one interaction with many inplementations (i.e.; string.length, array.length)
I - inheritance: class heirarchy that shares functionality and attributes
E - encapsulation: data and functionality to manipulate that data are bundled together
*/

module.exports = Cupcake;
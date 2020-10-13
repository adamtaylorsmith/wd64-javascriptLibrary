/* 
Classes can be defined by either expression or declaration.
Classes are functions.
They act as a blueprint for creating objects
    -ex: model could be a property of a class of automobile. each new auto we create is a copy of our original class and could have a different value for the property model.
Body of a class is between {}
Constructor method is a special method for creating and initializing an object that was created with a class
    -there can only be ONE constructor method
    -can use the keyword 'super'
    -the super keyword is used to access and call functions on an object parent
New way to write previous prototype-based inheritance. considered OOP
Class declarations are not hoisted. so needs to be declared before accessing
*/
class automobile {
    constructor(make, model) {
        // instanced properties must be defined inside of class methods, like the constructor method
        this.make = make;
        this.model = model;
    }
}


/* expressions
can be named or not
the name given to an unnmaed class expression is local to the class's body
    the name of a named class can be retrieved thru the class's name property
*/
//unnamed:
let Vehicle = class {
    constructor(make, model) {
        // instanced properties must be defined inside of class methods, like the constructor method
        this.make = make;
        this.model = model;
    }
};
console.log(Vehicle.name); // returns name of variable

// named:
let Auto = class Mobile {
    constructor(make, model) {
        // instanced properties must be defined inside of class methods, like the constructor method
        this.make = make;
        this.model = model;
    }
};
console.log(Auto.name); // returns name of class


/* Methods
OLD syntax-
const automobile = {
    start: function() {}
    stop: function() {}
}*/
// NEW syntax:
// const automobile = {
//     start() {}
//     stop() {}
// };

class AutoMobile {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    //method 1
    start() {
        console.log(`this ${this.make} ${this.model}'s engine started.`);
    }
    //method 2
    stop() {
        console.log(`this ${this.make} ${this.model}'s engine stopped.`);
    }
};

/* New Instance
using the keyword 'new' we can create a new object/instance of the AutoMobile class
*/
let hondaCivic = new AutoMobile('honda', 'civic');
hondaCivic.start();
let fordEscape = new AutoMobile('ford', 'escape');
fordEscape.start();
fordEscape.stop();


/* Constructor method
Helps create and initialize an object created from a class
works along with the 'new' keyword
needs to be included to create new objects and instances of our class
    set properties
    passes values for properties
*/
class cookie {
    constructor(type, icing, shape) {
        this.t = type;
        this.i = icing;
        this.s = shape;
    // left side assigning keys for the values we pass in
    } // right side the accepted values from our parameters
}
let chocolateChip = new cookie('chocolate chip', false, 'circle');
console.log(chocolateChip.i);
console.log(chocolateChip);


/* Extends
Keyword used in class declarations/expressions to create a new class
Each new class created inherits the properties and methods from the parent class
Can also have its own properties and methods
    also known as a sunblass
*/
// Parent
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eats their food.`);
    }
}
// Subclass
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // 'super' before 'this'
        this.type = breed;
    }
    play() {
        console.log(`the ${this.type} named ${this.name} fetches the ball.`);
    }
}
let Fido = new Dog('fido', 'mutt');
Fido.eat();
Fido.play();
// Animal.play(); -> returns error, cant access method within Dog
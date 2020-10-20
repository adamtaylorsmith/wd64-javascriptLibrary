class User {
    constructor(name) {
        this.name = name;
        this.type = "trial user"
    }
    //method 1
    greet() {
        console.log('welcome back, '+this.name)
    }
    //method 2
    status() {
        console.log('current status: '+this.type)
    }
}

//instance of the class/ new object
var anonDude = new User("anonymous dude");

//we can now use the instance and the . operator to access our methods
anonDude.greet();
anonDude.status();

//another instance
var jeff = new User("Jeff");
jeff.greet();
jeff.status();
/* Constructor functions
allow us to easily create a unique solution for different circumstances by using parameters.
creating several different objects with the same keys but different values.
*/
let person1 = {
    name: 'randall',
    age: 33,
    canVote: true
}
let person2 = {
    name: 'freddy',
    age: 15,
    canVote: false
}
let person3 = {
    name: 'jenny',
    age: 45,
    canVote: true
}
// (1)    (2)         (3)
function Person(name, age, canVote) {
//  (4)  (5)    (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
//            (7)   (8)
let person4 = new Person('james', 99, true);
console.log(person4);
/*
1- keyword
2- the function Name. for constructors name should be capitalized
3- parameters. these will be the values of the object once this function is in use
4- the 'this' keyword refers to the owner or activator (Person in this case)
5- the key of the new object we will create
6- refering to the parameter
7 & 8- this 'new' keyword is calling our Person function, creating a new Person with the values we are passing as arguments, and storing that Person in a variable
*/
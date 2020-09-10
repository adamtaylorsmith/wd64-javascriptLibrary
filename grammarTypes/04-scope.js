/* SCOPE is how a computer keeps track of all the variables in a program.
Scopes can also be nested, where there is an outer scope (global) that encloses an inner scope (local) 
*/

let x=12;
function scope(){
    let x=33;                   //not the same as just 'x=33'. if you take out 'let' the value is being reassigned.
    console.log("local:", x);
    return x;
}
console.log("global:", x);
console.log(scope()); // this thrown in at the end of the lesson

/* DIFFERENCE BETWEEN var AND let:
var is scoped to the nearest function block aka nearest function curly boi
let is scoped to the nearest enclosing block aka nearest curly boi
Here's an example: */
var x=12;
function varTest () {
    var x=33;
    if (true) {
        var x=45;
        console.log("conditional", x);
    }
    console.log("function:", x);
}
varTest();
console.log("global:", x);

// And the following example runs as expected:
let x=12;
function varTest () {
    let x=33;
    if (true) {
        let x=45;
        console.log("conditional", x);
    }
    console.log("function:", x);
}
varTest();
console.log("global:", x);

// And this works as expected too:
const x=12;
function varTest () {
    const x=33;
    if (true) {
        const x=45;
        console.log("conditional", x);
    }
    console.log("function:", x);
}
varTest();
console.log("global:", x);

// Also default keyword is var
/*
scope is how a computer keeps track of variables
scope can be nested, global and inner
*/

const scope = 'earth';

function localScope() {
    let scope = 'indiana';
    console.log(`${scope} marks local`);

    let place = 'bloomington';

    function veryLocalScope() {
        let scope = 'indianapolis';
        console.log(`${scope} is the capital of IN`);
        console.log(`just outside we went to ${place}`);
    }
    veryLocalScope();
}
console.log(`${scope} marks global`);
localScope();
//console.log(place); - will return an error! not defined
//if variable is not found, JS will locate the info outside


/* Order matters!
JS reads from top to bottom and it can only execute a single task at a time
*/
let ordered = 1;
function layerOne() {
    let ordered = 2;
    function layerTwo() {
        let ordered = 3;
        console.log(ordered);
    }
    layerTwo();
    console.log(ordered);
}
layerOne();
console.log(ordered);


/* Reassignments / VAR vs LET
VAR is scoped to the nearest function block
LET is scoped to the nearest enclosing black
*/
let a = 10;
function reassign() {
    a = 30; //with let we are able to change the variable
    console.log(`a is set to ${a} in this function`);
}
console.log(`before reassign function: ${a}`);
reassign();
console.log(`after reassign function: ${a}`);


var x = 2;
function varScope() {
    var x = 4;
    if(true) {
        var x = 5;
        console.log(x);
    };
    console.log(`var block scope: ${x}`)
}
varScope();
console.log(x);
// statements like 'if' or loops dont create a new scope. if a variable is defined inside a block element, it will remain in that scope. however, we can utilize let and const as keywords to help us control how our variables are viewed
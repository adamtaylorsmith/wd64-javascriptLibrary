/* first pass stores our variable declarations but does not assign them their value and does hoisting
second pass: assigns the values of our variables and executes our hoisted code
*/

//the following will return 'undefined' var gets hoisted
console.log(name);
var name="Adam"; 

//the following will return as expected. let/const does not get hoisted
console.log(name);
let name="Adam"; 

//the following will return as expected. functions get hoisted
b();
function b() {
    console.log("I have been hoisted");
}

//the following will return 'undefined' function EXPRESSIONS get hoisted
newFunction();
let newFunction = () => {
    console.log("I have not been hoisted");
}
newFunction(); //but add newFunction(); below the function and it works as expected

/* 
HOISTING CHALLENGE*/
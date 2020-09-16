/*
JS pulls all variables adn function calls to the 'top' of the respective scope prior to being executed.
only the declaration is hoisted, NOT the assignment
*/
console.log(hoistedVar);
console.log('how JS sees hoistedVar: ', typeof hoistedVar);
var hoistedVar = 'using var';
let hoistedVar = 'using let';


var declaration;
console.log(usage);
declaration = 10;
console.log(usage);
var usage = declaration + 10;
console.log(usage);


/* hoisting in a function
this process is considered the same within a function. on the first pass, it reads it, pushes the declarations to the top and then executes them in order that they are written 
*/
function testHoist() {
    becomesGlobal = 'not declared, becomes part of the global scope';
    console.log('prior to declaring', insideFunc);
    var insideFunc = 'rules still apply here';
    console.log(insideFunc);
}
testHoist();
console.log(becomesGlobal);
// it is best rpactice to ALWAYS declare variables regardless of whether they are in a function or global scope. this makes it clear how it should be handled.


//using LET - LET is block scoped, not function scoped
console.log(letVariable);
let letVariable = 'using let';
//this throws error becuase we must ALWAYS declare our variables first


//hoisting functions
hoistedFunc();
function hoistedFunc() {
    console.log('this is a hoisted function');
}


// function expressions - NOT hoisted
expressionFunc();
let expressionFunc = function() {
    console.log('works?!');
}
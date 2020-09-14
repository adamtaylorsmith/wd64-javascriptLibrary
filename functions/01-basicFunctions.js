/* functions are a process that we call upon to run an action
-take an input so that it can process it, modify it or just respond to it
-return a value (but not always)
-can be invoked (called upon) as often as we need 
*/


// (1)      (2)        (3)
function functionName () {
    //  (4)
    return value
};
//  (5)
functionName();

/* 1- keyword
2- name of function
3- parameter
4- statement
5- invoke / on switch

function decalaration:
a chunk of code that performs a set action when it is invoked */
function hi() {
    console.log('hi nerd');
};
hi();

// function expression - when we assign a function to a variable
let express = function hi() {
    console.log('hi nerd');
};
express();

//anonymous functions are stored in memory but doesnt automatically create a reference to it. perhaps for a one-time use

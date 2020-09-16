/* arrow functions
arrow functions are expressional functions that can be simplified into one of two forms, CONCISE and BLOCK BODY.
arrow functions do not get hoisted.
*/
function regularFunc() {
    console.log('regular');
}
regularFunc();

//     (1)     (2)(3)      (4)
let arrowFunc = () => console.log('arrow function');
arrowFunc();
/*
1- arrow functions are always anonymous. need a variable
2- parameters are still capable of being injected
    if we only have ONE parameter we technically dont need the parans()
    but if we are not passing any parameters, parans are required
3- this syntax tells JS that we are about to process a function
4- within this format, JS assumes the return statement
*/

//Concise
let conciseBody = (x,y) => console.log(x+y);
conciseBody(1,2);
let slightlyComplex = (x,y) => x>2 && y<2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : console.log(`${x} and ${y} are where we want them`);
slightlyComplex(3,1);
slightlyComplex(1,5);

//Block
let blockArrow = (x,y) => {
    return `${x} are within ${y}`
}
console.log(blockArrow('We', 'Block Body'));
let sampleBlock = (x) => { //parans around (x) are not needed when its just one parameter
    console.log(x);
}
sampleBlock(99);
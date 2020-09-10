// functions perform a task or calculate a value
// function name(parameter){} and 
// argument is the specific value of the parameter
// When JS reaches a return statement, execution stops.

function add(x, y){
    let sum = x + y;
    return sum;
}
console.log(add(9,99)); 

function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName; 
}
console.log(fullName("Adam", "Taylor"));

function calculatePrice(quantity, price){
    var total = quantity * price;
    return total;
}
console.log(calculatePrice(4,1.99));

function square(number){
    return number * number;
}
console.log(square(16));

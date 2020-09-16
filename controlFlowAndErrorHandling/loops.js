/* For loops - 
create an index
run a condition
change to the indexing variable

for loop is a function
(create index variable; run condition; change index){
    return results}
    will continue until condition is met
*/

for(let i=0; i <= 10; i++) {
    console.log(i);
}

let word = 'drsgrerebyyujryverwcec';
for(let i=0; i<word.length; i++) {
    console.log(i, word[i]);
}

// for in loop
let city = {
    name: 'indpls',
    pop: 900000,
    speedway: 'boring'
};
for(junk in city) {
    console.log(junk);
    console.log(city[junk]);
}
let list = ['milk', 'eggs', 'beans', 'bread', 'nanas'];
for(item in list) {
    console.log(item, list[item]);
    //console.log(list[item]);
};

//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.
//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.
let name = 'piCard';
let fullName;
for(char in name) {
char==0 ? fullName = name[char].toUpperCase() : fullName += name[char].toLowerCase();
//console.log(char);
console.log(fullName);
}
/*
  1) We are taking the value of the "n" index and declaring the position of 0
  2) We assign our empty varibale to equal that positioned value.
  3) If that index is 0, we will take that value and run a ".toUpperCase()"" method on it. 
  4) If the index is NOT 0, we still want to include it into our empty variable and utilize our += expression so it knows to add the next value (or n++).
  5) If the index is NOT 0, we want t run a ".toLowerCase()" method so that all letters are in proper case.
*/

// for of loop
// must be numbered like an array or string. no objects!!
let indexArr = ['spot 1', 2, true, 'four'];
for(item of indexArr) {
    console.log(item);
};

/*recap
for loop: loops thru a block of code until the counter reaches a specified number
for in: loops thru properties of an object
for of: loops over iterable objects like arrays and strings
*/
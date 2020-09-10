// A string is anything enclosed in single or double quotes.
// Usernames, passwords, lists of products, and addresses are examples of strings
//Concatenation is adding two or more strings together.


// We can mix strings and numbers together. JavaScript turns numbers into strings. This is know as coercion. 

let ageInAugust = 40; 
let highSchool = "Bill Murray High School";
let graduatedHighSchool = 1994;
const commaWithSpace = ", ";

console.log(highSchool + commaWithSpace + graduatedHighSchool);
console.log("My age in August:", ageInAugust);



//length - returns the length of a string (including spaces)
console.log(highSchool.length); 

//lower or upper case
console.log(highSchool.toUpperCase()); //BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); //bill murray high school

console.log(highSchool.split(" ")); //splits the string into an array on each space['Bill', 'Murray', 'High', 'School' ]
console.log(highSchool.slice(0, 11)); // Extracts from highSchool[0] to and including highSchool[11]
// Data dn Structure Types
/* 
Primitive data types:
boolean
undefined - never set or not yet created
number
string (bigInt*, symbol*)
null -an empty container that has space to fill. intentionally nothing
object
function
*/

    let firstName = 'Adam';
    let lastName = 'Taylor';
    let houseNumber = 5008;
    let street = 'N Pennsylvania St';
    let city = 'Indianapolis';
    let state = 'Indiana';
    let zipcode = 46205;

    console.log("My address is " + houseNumber + " " + street + " " + city + " " + state);
    console.log(firstName, lastName, houseNumber, street, city, state, zipcode);

/* string properties and methods
methods are tools that help us manipulate data
*/
console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.includes('m'));

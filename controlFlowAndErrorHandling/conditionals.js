/* CONDITIONALS 

Falsy Values aka considered false
-false
-0
-empty strings
-null
-undefined
-NaN
When JS is expecting a boolean value and it is returned with one of these 6 values, evaluated as 'falsy'

If
If something is true, do 'this'
if else allow us to write a chain of events
*/
let light ='on';
if(light == 'on') {
    console.log('the light in on');
} else {
    console.log('the light in off');
}

let weather = 68;
let rain = true;
if(weather < 70 && rain != false) {
    console.log('chilly and rainy');
}

/*
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log 'my name is <name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/
let name = 'adam';
if(name == 'adam') {
    console.log ('hello ' + name);
} else {
    console.log('what is you name?');
}

//else if
let cookTime = 5;
if(cookTime === 45) {
    console.log('let us feast');
} else if(cookTime >= 30) {
    console.log(`it has only been ${cookTime} minutes bro`);
} else if(cookTime >= 20) {
    console.log(`it has only been ${cookTime} minutes dude`);
} else {
    console.log(`${cookTime}? Try cooking it bro`);
}

//! CHALLENGE
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/
age = 16;
if(age <= 17) {
    console.log('you are a baby');
} else if(age <= 20) {
    console.log('you can vote');
} else if(age <= 24) {
    console.log('you can drink');
} else {
    console.log('you can rent a car');
}

// Ternaries - condition ? if true : else result
let myName = 'adam';
myName === 'adam' ? console.log('hello ' + myName) : console.log('is your name ' + myName + '?');
// (condition)              (if true)                             (else false)


//! CHALLENGE
// Take this if/else statement and make it into a ternary.
let lampOn = false;
let daytime = true;
if(lampOn == true && daytime != true) {
    console.log('The lamp is on during the night')
} else if(lampOn != true && daytime != true) {
    console.log('The lamp is off during the night')
} else if(lampOn == true && daytime == true){
    console.log('The lamp is on during the day')
} else if(lampOn != true && daytime == true) {
    console.log('The lamp is off during the day')
} else {
    console.log('What lamp?')
}
// my answer guess:
let lampOn = true;
let daytime = true;
lampOn == true && daytime != true ? console.log('The lamp is on during the night') 
: lampOn != true && daytime != true ? console.log('The lamp is off during the night') 
: lampOn == true && daytime == true ? console.log('The lamp is on during the day') 
: lampOn != true && daytime == true ? console.log('The lamp is off during the day') 
: console.log('What lamp?');


// Switch
let instructor = 'adam';
switch(instructor) {
    case 'ing' :
        console.log(`${instructor} is part of the web dev team`);
        break;
    case 'zach' :
        console.log(`${instructor} is part of the web dev team`);
        break;
    case 'josh' :
        console.log(`${instructor} is part of the software dev team`);
        break;
    default:
        console.log(`i do not know who ${instructor} is`);
}

let newInstructor = 'butthead';
switch(newInstructor) {
    case 'ing':
    case 'adam':
    case 'zach':
    case 'donovan':
        console.log(`${newInstructor} is part of web dev`);
        break;
    case 'josh':
    case 'amanda':
    case 'casey':
        console.log(`${newInstructor} is part of software dev`);
        break;
    default:
        console.log(`i dont know ${newInstructor}`);
}
//! 
/*  Challenge 2: Take Home Challenge
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/
let studentGrade = 101;
switch(true) {
    case studentGrade <= 100 && studentGrade >= 89 : console.log('The student deserves an A'); break;
    case studentGrade <= 88 && studentGrade >= 79 : console.log('The student deserves an B'); break;
    case studentGrade <= 78 && studentGrade >= 66 : console.log('The student deserves an C'); break;
    case studentGrade <= 65 && studentGrade >= 59 : console.log('The student deserves an D'); break;
    case studentGrade <= 59 && studentGrade >= 0 : console.log('The student deserves an F'); break;
    case studentGrade > 100 || studentGrade < 0 : console.log('That mark is not possible'); break;
    default: console.log ('That is not a number');
}

// conditionals are introduced with the if statement.
// Conditional statements, using boolean variables, are in all JavaScript applications. Conditionals check conditions in your program

var weather = true;

if(weather){
    console.log("Wear shorts today! It's going to be hot!");
}

//1
var isOn = true;

//2   //3
if(isOn === true) {
    console.log("The light is on."); //4
}

var isOn = true;
    //1
if(isOn) { // same as if (isOn === true) 
    console.log("The light is on. It's bright.");
}
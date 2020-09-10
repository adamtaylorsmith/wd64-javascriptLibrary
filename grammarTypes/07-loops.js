// Loops allow us to repeatedly execute a block of code until a condition is met


// We create and initialize i to 1.
// Check: is i less than or equal to 4? i is 1, so the condition is true.
// Execute console.log("Who?");
// Next: i++. Continue to execute steps 2, 3, and 4 until i = 4
function adam(){
    console.log("Who?");
}
for (i=1; i<=4; i++) {
    adam();
}
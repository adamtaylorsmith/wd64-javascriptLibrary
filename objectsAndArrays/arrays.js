// populating and referring
let list = ['orange','banana','plum'];
console.log(list[1]); //square bracket notaion

let students = ['tony','marshall','rhys','ray',23,true,['ryan','tesha','will']];
console.log(typeof students); //returns 'object'
console.log(students instanceof Array); //returns a boolean. this instance returns true
console.log(students[2]);
/*? QUICK CHALLENGE
************
    - dive into the array and pull out the name 'Marshall'
    - dive into the nested array and pull the value 'Will'
    - print out (console log) "Hello Marshall!"
    - print out (console log) "Hello Will!" */
console.log('hello', students[1] + '!');
console.log('hello', students[6][2] + '!');


// array methods
let food = ['pie','pasta','queso','cake','yogurt'];
for(foodItem of food) {
    console.log(foodItem);
}
// add to array
food.push('pizza'); //appends to the end
// removing and inserting
food.splice(1,1,'nanas'); // the position, how many to remove, what to add
food.splice(2,0,'sweet potato'); //because of the '0' in position 2 we are just injecting a new item
food.pop(); //removes the last item
food.unshift('popcorn','eggplant'); //adds one or more items to the start
food.shift(); //removes the first element


// length property
let long = [1,2,3,4,5,6,7,8,9];
console.log(long.length);

// toString
let colors = ['red','orange','blue','green','violet']
console.log(colors.toString());

// iterating using forEach()
// runs three arguments - the value, the index, the array object itself
colors.forEach(colorItem => console.log(colorItem))
//(array obj)   (value)    (index)
colors.forEach((colorItem, index) => {
    console.log(colorItem);
    console.log(index);
})
// arrayObject.forEach((value, index) => return);


let movies = ['Batman','Spiderman','Harley Quinn','Wonder Woman'];
movies.forEach(movieItem => console.log(movieItem));
movies.push('Black Panther');
console.log(movies);
movies.splice(2,1,'Kill Bill');
console.log(movies);
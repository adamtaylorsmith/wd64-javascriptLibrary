/* 
keyword variableName = [...arrayName];
*/

const nameOne = ['adam', 'taylor'];
const nameTwo = ['ingebord', 'siegers'];
const copiedNames = ['married', ...nameOne, ...nameTwo];
console.log(copiedNames);
// const copiedNamesDiff = ['married', nameOne, nameTwo];
// console.log(copiedNamesDiff);

/* 
since the spread operator is pulling out all items of an array, we need to use the spread operator within a new array.
...arrName (if not within an array, it will throw error)
*/

nameOne.unshift('mr');
console.log("altered:", nameOne, "spread:", copiedNames);


console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 5.49];
console.log(Math.min(prices)); // prices is an array! returns NaN
console.log(Math.min(...prices)); // works! elements are pulled out of array


/* 
objects
*/
const persons = [
    {name: 'guy',
    species: 'all of them'},
    {name: 'lady',
    species: 'none of them'}
];
const copiedPeep = [...persons];
persons.push({name: 'nerd', species: 'garbage'});
console.log("obj", persons, "SO", copiedPeep );
/*  WE ARE ONLY CHANGING THE OG ARRAY. We copy it before we change it!
*/
copiedPeep[0].name = "data";
console.log('obj:', persons, 'SO:', copiedPeep);


// avoiding changing the origianl && copied array!!
const comics = [
    {title: 'spider-man', year: 1962},
    {title: 'detective stories', year: 1939}
];
const copiedComics = comics.map(comic => ({
    title: comic.title,
    year: comic.year
}));
comics.push({title: 'calvin hobbs', year: 1985});
console.log('before altering:', copiedComics);
copiedComics[1].title = 'detective stories #27';
console.log('after altering:', comics, copiedComics);
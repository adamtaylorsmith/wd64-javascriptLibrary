/* 
allows us to unpack values from arrays or properties from objects
similar syntax as array literals BUT is on the LEFT side of the assignment operator
great for pulling info out of an array/object and assigning that data to its own variable
*/
const boardGames = ['catan', 'pandemic','roll player'];
//const gameOne = boardGames[0];
const [gameOne, gameTwo, gameThree] = boardGames;
console.log(gameThree);

/* on left of the assignment operator we have our desired variable names. they coincide with each value within the array that is in the og variable */


// rest syntax - opposite of spread but looks exactly the same?!
// spread expands an array into its elements
// rest collects multiple elements and condenses into a single element 
// must be the last element defined when using array destructuring
// packing up the REST of the values in a new array
const hitchhikersGuide = ['arthur dent', 'triliian', 'babel fish', {day: 'thursday', answer: 42}];
let [charOne, charTwo, ...otherInfo] = hitchhikersGuide;
console.log(charTwo);
console.log(otherInfo);

hitchhikersGuide.push('marvin','deep throat','zaphod');
[charOne, charTwo, ...otherInfo] = hitchhikersGuide;
console.log(otherInfo);

[charOne, charTwo, , , ...otherInfo] = hitchhikersGuide;
console.log('SKIPPED');
console.log(charTwo);
console.log(otherInfo);


// object destructuring
const game ={
    title: 'fallout 76',
    developer: 'bethesda',
    platforms: ['pc','ps4','xbox']
};
const {title, platforms} = game;
console.log(`${title} is on ${platforms}`);

const games = [
    {   title: 'Fallout 76',
        developer: 'Bethesda Game Studios',
        platforms: [
        'PC', 'PS4', 'XBoxOne'
        ]},
    {   title: 'The Legend of Zelda: Breath of the Wild',
        developer: 'Nintendo',
        platforms: [
        'Nintendo Switch', 'Wii U'
        ]},
    {   title: 'Stardew Valley',
        developer: 'ConcernedApe',
        platforms: [
        'PC', 'macOS', 'Linux', 'PS4', 'Xbox One', 'Nintento Switch', 'PSVita', 'iOS', 'Android'
        ]},
];

const [{title: titleOne, developer: devOne}, ,{title: titleThree}] = games;
console.log(titleOne);
console.log(devOne);
console.log(titleThree);
for({title, developer} of games) {
    console.log(`${title} is developed by ${developer}`);
}
for({title, platforms} of games) {
    for(p in platforms) {
    console.log(`${title} is on ${platforms[p]}`);
    }
}
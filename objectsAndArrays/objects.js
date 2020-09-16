let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

// DOT NOTATION is used on objects
console.log(netflix);
console.log(netflix.season1.seasonInfo);
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);


/* JSON objects
-text only
-exists as a string
-needs to be converted to a JS object
*/
let spaceJam = {
    toonSquad: {
        human: 'mike jordan',
        rabbit1: 'bugs',
        rabbit2: 'lola',
        duck: 'daffy',
        tDevil: 'tasmanian',
        bird: 'tweety',
        cat: 'sylvester',
        pig: 'porky'
    }
}
//Object.keys() will return an array of strings that represent the properties
console.log(Object.keys(spaceJam.toonSquad)); //string of keys
console.log(Object.keys(spaceJam.toonSquad.tDevil)); //string of the index numbers of the string value
console.log(Object.values(spaceJam.toonSquad));


let garden = {
    vegetable: 'carrot',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};
let test = Object.keys(garden);
console.log(test[0]);
let testTwo = Object.values(garden);
console.log(testTwo[0]);
console.log(garden.vegetable);
console.log(garden['vegetable']);
let testAgain = Object.values(garden);
console.log(test, testAgain);


// we can set new key/value pairs using square brackets
let baking = {};
baking['zucchini'] = 'make bread';
console.log(baking);
console.log(baking[garden['vegetable']]); // UNDEFINED? - GRAB ERICS CODE STARTING HERE
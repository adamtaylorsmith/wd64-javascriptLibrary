/* ASYNC AWAIT
allows us to program in a synchronous manner while still allowing code to run in the background.
Async function:
-allows us to make a normal function async. can use await
-must use async keyword at the beginning
*/
async function myFn() {
    // await
}
const myAsynFn = async () => {
    // await
}

async function fn() {
    return 'hello';
}
fn().then(console.log);
fn().then(dataFromAsyncFunc => {
    console.log(dataFromAsyncFunc);
})


// AWAIT pauses at each 'await' expression
fetch('https://random.dog/woof.json')
    .then(results => results.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
// fetch is an asynchronous function


// PLUG THE FOLLOWING INTO AN HTML DOC
const request = async => {
    const response = await fetch('https://random.dog/woof.json');
    const json = await response.json();
    return json;
}
request().then(json => {
    console.log(json);
})
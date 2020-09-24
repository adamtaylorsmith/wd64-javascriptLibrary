/*
asynchronous programming allows a program to do more than one thing at a time.
makes it possible to run long-running actions without stopping the program to wait for response.
*/

// synchronous example: execution stack
const secondSync = () => {
    console.log('second hello');
}
const firstSync = () => {
    console.log('first hello');
    secondSync();
    console.log('end');
}
firstSync();

// asynchronous example:
const networkRequest = () => {
    setTimeout(() => {
        console.log('async code')
    }, 2000);
};
console.log('hello world');
networkRequest();
console.log('end');
/* event loop: looks into the call stack and determines if it is empty. If empty, it considers if there is any waiting callback that needs to be executed i.e console.log('async code') */


/*
API: not a database or a server. allows us access points to a server. ENDPOINTS direct us to sets of data.
REST API: creates an object of requested data, send values in response
    create - POST
    read - GET
    update - PUT
    delete - DELETE

FETCH
the fetch() method is asynchrounous. part of the browser not js.
the fect() method starts the processing of fetching, will retunr a promise and respond once the promise is fulfilled.
PROMISED
an unknown value when created. represents the eventual fulfilled or rejected.
pending / fulfilled / rejected
*/

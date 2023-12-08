/*
    ? Promises
    * An object that my produce a singular value in the futre
    
    ? Three States
    * Pending (unfinished
    * Fullfilled (copy with a value)
    * Rejected (error)
    
    * Promises allow other code to execture without having to wait for their completion
    
    
*/

function standard() {
    return "No promises here";
}

console.log(standard());

function getData () {
    setTimeout(() => {
        console.log("running after 3 seconds");
        return "Data";
    }, 3000);
}

let data = getData();
console.log(data);

function promiseFx () {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(value){
            resolve("data in promise"); // Resolved value can be returned outside of the promise
            } else {
                reject("cannot complete request");
            }
        }, 3000)
    });
}

console.log(promiseFx());

//? In order to get tangible data out of the Promise object, we MUST resolve it
// .then/.catch syntax

promiseFx(5)
.then((msg) => {
    console.log(msg);
    console.log("Congrats u have data");
})
.catch((err) => {
    console.log(err,"hey you hit an err");
});

/*
? Asychronous functions
* Introduced in ES7
*Alternative way to write promises
* A function that returns a promise object
* allows us to resolve or reject a promise

? Syntax

async function myFx(){} //? Traditional Function
const myFx = async function (){} //?functional Expression
const myFx = async () => {} //? Arrow function

*/

async function asyncFx() {
    return "Hello learners";
}
console.log(asyncFx());
//? How do we get values out of async functions?

//1. use a resolver
asyncFx().then((val) => console.log(val));

//2. use await keyword
async function start(){
    const val = await asyncFx();
    console.log(val);
}

start();

let networkStatus = false;

function promiseEx(networkConnection){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (networkConnection){
        resolve("This is data, woot woot!!");
    } else {
        reject("Please check your network connection");
    }
    }, 5000);
});
}

//?Async

async function handlePromiseAsync(){
    try {
        console.log(await promiseEx(networkStatus));
        // code below await, will wait until the above is resolved b4 executing
        console.log("Data recieved");
    } catch (err) {
        console.log("ERROR:", err);
    }
}

handlePromiseAsync();

//? .then() Syntax

promiseEx(networkStauts)
.then((data) => console.log(data))
.catch((err) => console.log("ERROR:", err));

const expensiveFunction = async () => {
    for(let i = 0; i <=1000000; i++){
        if(i === 1000000){
            return i;
        }
    }
};

// doing the loop asynchronously so that the other tasks can continue instead of waiting for the loop

const getDog = async () => {
    console.log("start");
    let result = await expensiveFunction();
    console.log("Loops done";)
}
 getDog();

 console.log("Continue doing other tasks..while we wait for the loop to finish");
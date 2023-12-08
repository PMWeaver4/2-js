/*
? IO & callbacks
* Process
    * An event that runs in the background or foreground of your machine
* We do this by using process.stdin and process.stdout
*/

//Import Statement
const process = require("process"); //? Importing our module from Node
/*console.log(`This is an output. From Node process PID ${process.pid}`);

/*
    ? Callback function
    * fx that is passed as an argument to another fx or method
    * Is a fx that runs when something occurs
        - Anonmyous Functions
        ex) function (parameter) {} or {parameter} => {}
            * Typically used in callbacks
            * Short lived
            * Non reusable
*/


// console.log("Please enter some input");
// // ? Anon arrow func
// // process.stdin.once("data", (input) => {console.log(input.toString());});

// // process.stdin.once("data", function(input) {console.log(input.toString());})

// const myFunction = (question, callback) => {
//     console.log("Question", question);

//     process.stdin.once("data", (input) => {
//         callback(input.toString().trim());
//     })
// };

// myFunction("What is your name?", (word) => {
//     console.log(word);
//     process.exit();
// });

// //? Passing function by reference

// function handleInput (input){
//     console.log(input.toString());
// }

// process.stdin.once("data", handleInput);
// */
/*  (1)     (2)   (3) (4)       (5)
    process.stdin.on("data", (input) => console.log(input.toString()))

    * 1. Node's process interface
    * 2. In data stream
    * 3. Event listender method
    * 4. Even that we are listened for
    * 5. Callback fx which runs when the event occurs


*/
/*
process.stdout.write("what is your username? \n");
process.stdin.on("data", (input) => {
    let value = input.toString().trim();
    console.log(value);
    value === 'Amit123' 
    ? process.stdout.write("Username Recognized") 
    : process.stdout.write("Username not recognized");

}
)*/

// ? Readline
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// rl.question("What is your favorite color? \n", (input) => {
//     console.log(`Your fav color is: ${input}`);
//     rl.prompt();
//     rl.close();
// });

// rl.question("What is your favorite car? \n", (input) => {
//     console.log(`Your fav car is ${input}`);
//     rl.prompt();
//     rl.close();
// });

function ask(questionText) {
    return new Promise((resolve, reject) => {
        if (questionText){
            rl.question(questionText + "\n", (input) => resolve(input));            
            } else {
                reject ("Provide a question please");
            }
            
        });
    };


const start = async () => {
    try{

        let response = await ask("What is your fav car?");
        console.log("Our data from promise?", response);
    } catch(err){
        console.log("Hey you hit an error?", err)

    }
};

start();

//I've given up on typing in code as we go. 
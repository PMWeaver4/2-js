/*
? Paramaters & Arguments
              (1)
function hi (name){
    console.log(`Hi, ${name}`)
}                       (2)

(3)
hi("Bruce");

1. The parameter(s) that the function is accepting or holding.
2. Using string interpolation, we can refer to the parameter that was given to the function.
3. This is where we define what the parameter's value will be.
    - known as an argument
*/

function order(sure){
    console.log(`I exchanged my ticket for a ${sure}`)
}
order("tickle me elmo");
order("humidifier");

/*
! Challenge
    - Write a function that takes two parameters
        - One paramter for a first name
        - The other paramter for a last name
        - Have them come together in a variable inside the function
        - console.log 'hello, my name is <your name>'
        - call (or invoke) our function

*/

function fullNameGreeting (fName, lName) {
    let fullName = fName + " " + lName;
    console.log(`hello my name is ${fullName}`);
}

fullNameGreeting ("x", "y");
fullNameGreeting ("Lebron", "Krystowak")

let test = function test1() {
    console.log("hi");
};

test();

let x = 1;

function one() {
    let x = 2;
    console.log("x's value inside of the function is:", x);
}

one();
console.log(x);

function calc(x,y,operator){
    switch(operator){
        case "+":
            console.log("Add",x,y)
            return x + y;
        case "*":
            console.log("Multiply",x, y)
            return x * y;

    }
}

console.log(calc(2,2,"+"));
console.log(calc(5,5,"*"));

let thisSum = calc(1, 9, "+");
console.log(thisSum);

console.log(typeof console);

let mockConsoleObject = {
    log: function (text) {
        process.stdout.write(text + "\n");
    },
    add: function (num1, num2){
        return num1 + num2;
    },
};

mockConsoleObject.log("hey will this display?");
console.log(mockConsoleObject.add(2, 3));


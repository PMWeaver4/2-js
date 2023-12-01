/*
? Variables
- containers that store data in memory
* declaration
    - allows memory space to be reserved by using an identifier
    - starts with keywords of (let, var, or const)
    - cannot start with a number, other than characters like ( $)
    - if no value is assigned, it will be 'undefined' by default
* initialization
    - assignment of a data value
    - can be any value or data type (str, int, arr, fx, class, etc.)
    - can be reassigned (except for the const)

*/

//  Variable declaration

let myVal;
console.log(myVal);

// Variable initialization
let myVal = "yeah";
let nextVal = "boi"
console.log(myVal);

console.log("The value of the myVal is:", myVal);
myVal = "Bob";
console.log("The value of myVal is now", myVal, "after reassignment.");

// String concatenation
console.log(myVal + " " + nextVal);

let userName = "iamagamer10";
// String interpolation
console.log(`Hey, your username is : ${userName}`);

//(a)   (b) (C) (d)
let address = "123 Main st, Salem, MA";
// a - keyword
// b - variable id
// c - assignment operator
// d - variable value assignment

console.log(testVar);
let testVar = 5;

if (true) {
    let myVar1 = 5;
}
console.log(myVar1);


const ssn = "555-55-5555";
// ssn = "something else"; //! Error Assignment to a const variable

/*
?   Coding practice for variables
    - Be concise (ex; firstName instead of usersFirstBornBlondHair)
    - Be specific (ex: item instead of i)
    - Utilize camelCase (most popular in JS)
    - snake_case
    - PascalCase
    - skewer-case
    - nocase
    - SCREAMING_CASE (used for environment variables)
*/

// ! Challenge
/*
    set variables of fName, lName, houseNumber, aptNum(ifapplicable)
    *street, city, state, post code
    * concatenate or interpolate them together
    * console log that result
    * Spicy Challenge
    * assign the state value to be lowercased, when you console.log it, it should capitalize it.
*/

let fName = "Paul"
let lName = "Weaver"
let houseNumber = "1000"
let street = "super rd"
let city = "bangin"
let state = "vt"
let post_code = "05824"

console.log(fName, lName,"\n",houseNumber, street, city, state.toUpperCase(), post_code);

console.log(Math.floor(0.175));
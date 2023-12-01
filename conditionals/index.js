/*
    ? Conditionals and Logic Gates
    * conditional statements check if an expression is truthy
    * the expression must always resolve to true
    * if it's truthy, a code within the statement executes
    * if it's falsy, nothing happens unless we specify otherwise

    ?Expressions vs Statements
    * Expression
        -Unprocessed value, grouped using ()
        - Evaluated to be truthy
        - Can also be empty
    ?Expressions evaluate
    * Statements
        - keyword
        - expression
        - {} - code block
    ? Statements evaluate and execute code blocks when invoked
        ! Conditional is an example of a statement
*/

/*
    ? If Statement
    * Checks if something is true and executes the code, if so
*/
if (true) console.log("This will print")

let lightSwitch = "on";
console.log("The value of the lightswitch variable is:", Boolean(lightSwitch));

if (lightSwitch == "on") 
{console.log("the light switch is on");
// additional code for switch being on...
}

/*
    ? Else
    * do the opposite of what our initial expression is checking
*/

if (lightSwitch == "on") 
{console.log("the light switch is on");
// additional code for switch being on...
} else {
    console.log("something went wrong or the switch is off?");
}

/*
    ? Else If
    * allow us to add additional condition(s) if the one prior has not been satisfied
*/

let temp = 52;

if(temp > 80) {
    console.log("It is very hot outside");
} else if ( temp > 70) {
    console.log ("is is warm outside");
} else if (temp > 50) {
    console.log("it is decent outside");
} else {
    console.log("something went wrong");
}

/*
    if(conditionIsTrue) {
        execute this code if the above condition has been met
    } else if (conditionIsTrue) {
        execute this code if the above condition has been met
    } else {
        if all else fails, run this code block
    }
*/

/*
    ? Logical Operators NOT AND OR
    * OR operator (||)
    * ex: I'll be happy if I go to the movies OR eat dinner
    * (dinner or movies = true)
    * (no dinner or movies = true)
    * (dinner or no movies = true)
    * (no dinner or no movies = false)
* AND Operator (&&)
    * true if both conditions are true
    * ex: I'll be happy if I go to the movies and eat dinner
    * (dinner and movies = true)
    * (no dinner AND movies = false)
    * (dinner AND no movies = false)
* NOT Operator (! or in an expression with !=)
    * Flip the logical expression

    */

lightSwitch = 0;
// Flip s the eval value
if (!lightSwitch) {
    console.log("the lightswitch is off");
}

lightSwitch = "off";

if(lightSwitch != "on"){
    console.log("the switch is off");
}

// ? AND OR Example

let sensor = "inactive";
let alarm = true;

if(sensor == "active" || alarm) //statement defaults to alarm == true
{
    console.log("The alarm may be on")
} else if (sensor =="inactive" && alarm) {
    console.log("Your sensor may be broken");
} else if (sensor == "inactive" && !alarm) {
    console.log("alarm is most likely off and sensor as well")
} else {
    console.log("Something went wrong");
}

let myName = "Snoop";
let length = 4;
if (myName[0] === "S") {
    console.log( `your name starts with an S and it is greater than or equal to ${length} characters`)
} else if (myName[0] === "S" && myName.length >= length) {
    console.log("your name starts with an S");
}

/*
!Challenge
* create an age variable with a number between 0-82
* check if the age is under 16, if so say they can't drive
* check if the age is between 16 and 18, say they can drive but not drink
* if the age is between 18 & 21, say they can vote but not drink
* if over 21, say they can drink
!Spicy
    -Handle invalid output ex. "potato"
*/

let age = Math.floor(Math.random() * 82);
// let age = "potato";
if (age <16) {
    console.log("You can't drive");
} else if (age < 18) {
    console.log("You can drive, but you can't drink");
} else if (age < 21) {
    console.log("You can vote, but you can't drink");
} else if (age >= 21) {
    console.log("You can vote, and drink, and drive but try not to do it all at the same time");
} else {
    console.log("Not a valid output");
}
console.log (`age is ${age}`);

/*
! Important thought
* if you want your condition to display ANY possible match, create separate if statements
* if you want your condition to display ONE exact match, chain your conditional statments
*/

/*
? Ternaries
* an expression
* quick way to write out if/else conditionals
* commonly use to check a quick condition
? Syntax
condition ? expr if true : expr if false
? Chaing syntax
conditional ? expr if true
||||||      : else if expr ? expr if true
*/

let ignition = true;
ignition ? console.log(`ignition is on`) : console.log("ignition is off");


let season = 3;

if (season == 1) {
    console.log ("Spring");
}
else if (season == 2) {
    console.log ("Summer");
}
else if (season == 3) {
    console.log ("Autumn");
}
else if (season == 4) {
    console.log ("Winter");
}

season == 1 ? console.log("Spring")
: season == 2 ? console.log("Summer")
: season == 3 ? console.log("Autumn")
: season == 4 ? console.log("Winter")
: null;


/*
!Challenge
* create an age variable with a number between 0-82
* check if the age is under 16, if so say they can't drive
* check if the age is between 16 and 18, say they can drive but not drink
* if the age is between 18 & 21, say they can vote but not drink
* if over 21, say they can drink
!Spicy
    -Handle invalid output ex. "potato"
*/

let age = Math.floor(Math.random() * 7) + 15;
// let age = "potato";
age < 16 ? console.log("You can't drive"):
age < 18 ? console.log("You can drive, but you can't drink"):
age < 21 ? console.log("You can vote, but you can't drink"):
age >= 21 ? console.log("You can vote, and drink, and drive but try not to do it all at the same time"):
console.log ("null");
console.log (`age is ${age}`);

/*
? Switch Statements
*execute a block of code dependent upon a different case
*/

let x = 5;

switch(true){
    case x > 2 :
        console.log("x is greater than 2");
        break;
        case x > 3:
            console.log("x is greater than 3"):
            default:
                console.log("something went wrong");

}

let month = new Date().getMonth() + 1;
console.log(month);

switch(month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Jun");
        break;
    case 7:
        console.log("Jul");
        break;
    case 8:
        console.log("Aug");
        break;
    case 9:
        console.log("Sept");
        break;
    case 10:
        console.log("Oct");
        break;
    case 11:
        console.log("Nov");
        break;
    case 12:
        console.log("Dec");
        break;
        default: console.log("error getting month");
}

let uprightStaff = "Paul";

switch(uprightStaff){
    case "Paul":
        console.log(`${uprightStaff} is our Program Staff Manager`);
        break;
        case "Amit":
            console.log(`${uprightStaff} is a SD instructor`);
            break:
            case "Max":
            console.log(`${uprightStaff} is our Program Manager`);
            break;
            default:
                console.log("Staff member not found in database");
}
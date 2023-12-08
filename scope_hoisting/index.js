//? Scope & Hoisting

/*
    ? scope
        * Used to determine how informatin in different code blocks can be accessed
            ? Five scope types
                * Global/Window
                * Block
                * Function
                * Module - if use external files
                * lexical
                 
                
*/

/*
    ? Global Scope
        * Outer most scope
        * window object when in the client/browser
        * in the js file when in Node
        * accessible from every other scope
        * 
*/

let globalScopedvariable = "This is a global scope variable";

{
    {
        {
            {
                {
                    {
                        console.log(globalScopedvariable);
                        let innerScopedVariable = "This is an inner scoped variable."//created within innerscope
                    }
                }
            }
        }
    }
}

//console.log(innerScopedVariable);//! Error: InnerScopedVariable is not defined

/*
    ? Function Scope
    * Accessible only inside of the function

*/

function scope(){
    let fxScopeVariable = "This is a function scope variable";
    console.log(fxScopeVariable);
}

scope();

//console.log(fxScopeVariable); //!Error, variable is only in function's 

//? Var vs let in scope
{
    let x= 5
}
// console.log(x);//!ERROR

{
    var y =5;
}

console.log(y); //! Var keyword in inner scope 'bleeds'/polutes into the outer scope
//! Avoid using "var", use let

/*
    ? Block Scope
    * Anywhere there are {}

*/

{
    let blockScopeVariable = "Block scope variable";
}
// console.log(blockScopeVariable);//! Error: Reference error

/*
    ? Lexical Scope
    * Variables are accessible by their nested position
    * Inner fx scope can access outer function scope
*/

function outerFx() {
    let ofxv = "Outer fx scope variable";
    function innerFx() {
        return ifxv = "Inner fx scope variable";
        console.log(ofxv);
    }
    return innerFx(); // === "Inner fx scope variable"
}

console.log(outerFx()); // === "Inner fx scope variable"

/*
    ? Hoisting
    * JS' parsing engine reads top to bottom, left to right
    * JS' inerpreter runs the code twice
        - First, it looks for VARiables and fx declarations and hoists them
        - It allocates memory space for those declarations
        - It then executes the code line-by-line

*/

// console.log(myDog);// ! Error cannot access 'myDog' before initialization
let myDog = "lab";
console.log(myDog);

console.log(age);//! Returns undefined
var age = 32;
console.log(age); // prints our value of 32


x(); // traditional functions get hoised, Able to call them before they are declared

function x () {
    console.log("function x executed");
}
//y(); //! Error, function expressions are not hoisted

let yfxExp = function (){
    console.log("functin Expression");
};

y();

function run() {
    var foo = "foo";
    let bar = "bar";
    var fxVariable = "test";
    console.log (foo, bar, fxVairalbe);

{ var moo = "moo"
let baz = "baz";
console.log(moo, baz);
}

console.log(baz); //! Error, trying to access a nested scope variable
}

run();
//console.log(fxVariable);//! ReferencError: faxVariable is not defined

//! Using var is bad practice, don't try to use hoisting to your benefit
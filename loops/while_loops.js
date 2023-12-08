/*
? While loop structure

    while (expression) {
        ...code to run if expression is true
    }

    - The main purpose for while loops are when iteration is uncertain
    - Ex) If we wanted to guess a spade from a randomized amount of cards, we can use a while loop to continuously go through until the condition is

*/

let numArr = [1,3,44,-23,0,3,10,4.34];
let index = 0;
let sum = 0;

while(index < numArr.length){
    console.log(numArr[index]);
    numArr[index] > 0 ? (sum+= numArr
    index++;
}
console.log(`the sum of all the positive integers is ${sum}`);

let city = [ "building","sign","window","bridge","lighthouse", "tree", "empty street",];
let structure = city[0];
let pos = 0;

while (structure != "empty street"){
    console.log(`Spiderman swings from the ${structure}`)
    pos++;
    structure = city[pos]
}

console.log(`Spiderman is hanging out in ${city[pos]}`);


let spidyHP = 20;
let badGuy = [
    {
        baddie: "Green Goblin", 
        hp: 15,
    },
    {
        baddie: "Venom",
        hp: 25,
    },
    {
        baddie: "Stilt-man",
        hp: 5,
    },
    {
        baddie: "Thug",
        hp: 0,
    },
];

let random = Math.floor(Math.random() * badGuy.length);
let villain = badGuy[random];
// console.log(villain);
console.log(`${villain.baddie} has appeared.`);

do {
    if (villain.baddie === "Thug"){
        console.log("Spider-Man webs the thug...EZPZ");
        break;
    }
    console.log(`${villain.baddie} hits Spider-Man!`);
    spidyHP--;
    console.log("Spider-Man HP:", spidyHP);

    let spidyHit = Math.floor(Math.random() * 3);
    villain.hp -= spidyHit;
    console.log(`Spider-Man hits ${villain.baddie} for ${spidyHit} damage`);

    villain.hp -= spidyHit;
    console.log("Villain HP", villain.hp);

    if(spidyHP === 0) {
        break;
    }
} while(villain.hp > 0);

villain.hp <= 0 ? console.log(`Spider-Man captures ${villain.baddie}`) : console.log(`${villain.baddie} has taken down Spider-Man`);

/*
? Do while
    do {
        ...code block
        while (epression)

        -works just like a while loop with the exception that it will run our code block
    }
*/

/*
!   Challenge - FIZZ BUZZ
    - Using a for loop, print out number (1-100 that increase by ,1 starting at 1)
    - Within the loop create a chain of if else statements that will check if a number is divisible by 3. If so, print tot the console: "Fizz", along with the value
    - If a number is divisble by 5, prin to the console: "Buzz, along with the value
        - If it is diviesible by both prin to the console fizz buzz along with the value"


*/

for (let i=1; i<=100; i++)
{
    if(i%3 == 0 && i%5 == 0) {
        console.log(`fizz, buzz ${i}`);
    
    } else if(i%3 == 0) {
            console.log(`fizz, ${i}`);

    } else if(i%5 == 0) {
            console.log(`buzz, ${i}`);

    }
};

function greeter (name) {
    if (name === 'darth vader') {
     console.log("Go Away!");
  } else {
      console.log(`Hello ${name}!`);
  }
}
  
  console.log(greeter('darth vader'));
  console.log(greeter('luke skywalker'));
  console.log(greeter('han solo'));
// ? Old Macdonald Sing Along

/* 
I want to create a function that takes in 2 paramenters
- The first parameter will be an animal
- The second parameter will be the sound the animal makes
*/

function oldMacdonald (animal, sound){
    console.log("Old MacDonald had a farm", "\n", "Ee i ee i o!", "\n", `And on his farm he had some ${animal}s`,"\n", "Ee i ee i o!", "\n",
    `With a ${sound}-${sound} here`, "\n", `and a ${sound}-${sound} there`,
    `here a ${sound}, there a ${sound}`, "\n",
    `everywhere a ${sound} - ${sound}`, "\n",
    "Old MacDonald had a farm", "\n", "Ee i ee i o!"
    )
}

// oldMacdonald("cow", "moo");
oldMacdonald("cat", "meow");
// oldMacdonald("zebra", "toodle-loo");


/*
Create a function that takes those parameters and will output a verse from the song:
! "Old MacDonald Had A Farm"
-Use string interpolation, to incorperate your parametes into the song.
-Call the function at least 3 times, with 3 different animals and sounds.


! Example with "cow" & "moo"
Old MacDonald had a farm,
    Ee i ee i o!
And on his farm he had some cows,
    Ee i ee i oh!
With a moo-moo here,
    And a moo-moo there.
Here a moo, there a moo,
    Everywhere a moo-moo.
Old MacDonald had a farm,
    Ee i ee i o!!!


TODO Bonus Challanges
1 - Have the function return it, and then Output the song to the window

2- If(you wrote a Traditional Function === true){
    return (create a new version that utilizes Arrow Functions)
} else{
    return (create a Traditional function from your arrow function)
}

 */
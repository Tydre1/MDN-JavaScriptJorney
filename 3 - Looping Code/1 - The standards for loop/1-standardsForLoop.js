// In the "drawing circles" example above, you don't have a collection of items to loop through: you really just want to run the same code 100 times. In a case like that, you should use the for loop. This has the following syntax

//for (inicializer; condition, final-expression) { code to run };

// Calculating squares: Let's look at a real example so we can visualize what these do more clearly.

const results = document.querySelector("#results");

function calculate () {
    for (i = 1; i < 10; i++) {
        const newResult = `${i} x ${i} = ${i * i}`;
        results.textContent += `${newResult}`;
    }
    results.textContent += "\nFinished!";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));

// Looping through collections with a for loop
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// "for of" example
for (const cat of cats) {
  console.log(cat);
}
 // or "for" example

const cats2 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats2.length; i++) {
  console.log(cats2[i]);
}
// In this loop we're starting i at 0, and stopping when i reaches the length of the array. Then inside the loop, we're using i to access each item in the array in turn.

// However, it offers more chances to introduce bugs into your code. For example: you might start i at 1, forgetting that the first array index is zero, not 1. / you might stop at i <= cats.length, forgetting that the last array index is at length - 1.

// For reasons like this, it's usually best to use for...of if you can.

// Sometimes you still need to use a for loop to iterate through an array. For example, in the code below we want to log a message listing our cats:
const cats3 = ["Pete", "Beagles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
    myFavoriteCats += `${cat}`;
} 

console.log(myFavoriteCats); // "My cats are called Pete, Beagles, Jasmine, ". As u can see, this is writen wrong, To arrange that u can use the "for", like this:

const cats4 = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats3 = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

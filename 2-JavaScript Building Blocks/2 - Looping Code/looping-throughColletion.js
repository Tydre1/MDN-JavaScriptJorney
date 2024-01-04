const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
    console.log(cat);
};
// In this example, for (const cat of cats) says:
// Given the collection cats, get the first item in the collection.
// Assign it to the variable cat and then run the code between the curly braces {}.
// Get the next item, and repeat (2) until you've reached the end of the collection.

// map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array. In this case the function we provide converts the item to uppercase, so the resulting array contains all our cats in uppercase.
function toUpper (string) {
    return string.toUpperCase();
};

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats); // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]


// You can use filter() to test each item in a collection, and create a new collection containing only items that match
function ICat(cat) {
    return cat.startsWith("L");
};

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(ICat);
console.log(filtered); // // [ "Leopard", "Lion" ]
// This looks a lot like map(), except the function we pass in returns a boolean: if it returns true, then the item is included in the new array. Our function tests that the item starts with the letter "L", so the result is an array containing only cats whose names start with "L"

// compacted example:
const cats2 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const filtered2 = cats.filter((cat2) => cat2.startsWith("L"));
console.log(filtered2);
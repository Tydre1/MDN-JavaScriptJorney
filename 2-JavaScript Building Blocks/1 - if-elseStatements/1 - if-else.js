//  this file is to show how work if...else statement

if (condition) {
    /* code to run if condition is true */
} else {
    /* run some other code instead*/ 
}

if (condition) {
    /* code to run if condition is true */
  }
  
  /* run some other code */

  //  in this case, the second block of code is not controlled by the conditional statement, so it always runs, regardless of whether the condition returns true or false. This is not necessarily a bad thing, but it might not be what you want — often you want to run one block of code or the other, not both.

  
// A REAL EXAMPLE:

// To understand this syntax better, let's consider a real example. Imagine a child being asked for help with a chore by their mother or father. The parent might say "Hey sweetheart! If you help me by going and doing the shopping, I'll give you some extra allowance so you can afford that toy you wanted." In JavaScript, we could represent this like so:

let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
 //This code as shown always results in the shoppingDone variable returning false, meaning disappointment for our poor child. It'd be up to us to provide a mechanism for the parent to set the shoppingDone variable to true if the child did the shopping.
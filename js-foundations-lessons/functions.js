//Functions, paramaters, and arguments...
let animal = "Tiger"; //variable declaration
function favoriteAnimal(animal) { // function has one parameter
    return animal + " is my favorite animal"; // returns a string value
}
console.log(favoriteAnimal("Goat")); // print statement inputs a string argument

/** essentially what a function is, is a block of code that performs a certain task
 *  which can referenced at multiple times. this is useful so you don't have to type 
 * same code out repeatedly. There are also several built-in functions in javascript
 */

// example of a built-in function
const myArray = ["I","love","chocolate","ducks"]; // an array of strings
const madeAString = myArray.join(" "); // the join function, joins each element of the array
console.log(madeAString); // printed a new string

// functions can have whatever code necessary in them to fulfill a task, even other
// functions.

/** invoking a functions */
function consolePrint() {
    console.log("hello, world");
}

consolePrint(); // functions can be invoked with or without paramaters depending on theri arguments

/** function with 'default' parameters */
function defaultParam(number = 4) {
    return number + number;
}

console.log(defaultParam()); // invoking without a parameter is optional
console.log(defaultParam(8)); // invoking with a parameter

/** you can create functions that don't have names called anonymous functions */
(function () {
    console.log("hello");
});

/** you can also pass them as arguments to other functions */
document.addEventListener("keydown", function (event) {
    console.log(`you pressed "${event.key}"`);
});

/** an alternative way to write an anonymous functions '(argument) => {function}' 
 * if the function only takes one parameter you can omit the parentheses around the parameter
*/
document.addEventListener("keydown", (event) => {
    console.log(`you pressed key "${event.key}"`)
});

/** if your function only contains one line thats a return statement you can omit
 * the return keyword and braces of the function e.g. 'function(parameter => anonFunc)'
 */

/** FUNCTION SCOPE AND CONFLICTS
 *  Scope describes the permission levels of functions, variables, objects, etc.
 *  i.e scope describes what parts of the code they can be accessed in.
 *  The top level of scope is 'global scope', meaning anything with a global scope
 *  can be accessed anywhere in the code.
 *  theres also local scope e.g. a variable declared in a function is local to the function
 *  Scope exists to provide a layer of security to your code, sometimes you don't want
 *  certain code to be accessible everywhere else.
 */

/** WHAT IS A RETURN VALUE
 *  It is as it sounds, it is the value returned before breaking out of a function.
 */

/** WHAT IS A FUNCTION EXPRESSION
 *  it is a an anonymous functions assigned to a named variable
 */
let aFunction = function() {
    return `function assigned to "${Object.keys({aFunction})[0]}"`;
};

console.log(aFunction());

/** what is an arrow function */
aFunction = (x, y) => {
    console.log(x + y);
}
aFunction(2,4);

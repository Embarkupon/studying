/** A value in JS is always of a certain Data type, however variable are not BOUND
 * to these types, they can store different types at any time during compile. 
 * Lanaguages that allow this behavior are know as dynamically typed.
 */

let variable = "string"; // variable stores String
let integer = 10; // var 'integer' stores numeric value
variable = integer; // variable now stores integer's held value
console.log(variable); // console prints variable's new value which is integer

/** There are several data types in JS:
 *  - numbers are both integers and floats, i.e integers and decimals.
 *      there are also special numeric values such as Infinity and NaN that belong to
 *      this type.
 */

let number = 11;
let decimal = 1.1;
number = decimal;

console.log(1/0); // undefined, but prints Infinity
let string = "not a number";
console.log(string / 11); // return NaN
console.log(NaN + number); // further operations on NaN return NaN

/** BigInt
 * in JS number value cannot represent Integers larger than (2^53 -1) or 9007199254740991
 * or less -(2^53 -1) for negatives. Calculations beyond this number will be imprecise.
 * BigInt was recently developed to handle such numbers, by appending and 'n' at the end
 * of a big number.
 */

const MAX_NUM = 9007199254740991;
console.log(MAX_NUM + 1); // precice calculation
console.log(MAX_NUM + 2); // imprecise, same as previous

let BigInt =  9007199254740991n; // appended n means this is a BigInt
console.log(BigInt + 2n); // calculates precicely

/** String
 * In JS there are 3 types of quotes:
 *  Double quotes: "Hello"
 *  Single quotes: 'Hello'
 *  Backticks: `Hello` (template literal)
 * can't mix and match the three types on a single string
 * 
 * Double and Single quotes ares practically the same in JS. BACKTICKS ARE EXTENDED
 * FUNCTIONALITY QUOTES, they allow us to embed variable and expressions into a string
 * by wrapping them in ${ }.
 */

string = "string";
console.log(`embedded variable value: ${string}`); // using backticks to embed a variable in a string
console.log(`embedded expression result: ${2+3}`); // using backticks to embed an expression in a string

console.log(`concatanating two variables: ${variable} ${string}`); // backticks concatenate

const button = document.querySelector("button"); // creating a button object which holds a reference to the button tag

function greet () { // creating a greet function
    const name = window.prompt("What is your name?"); // prompt returns user input as string to variable
    const greeting = document.querySelector("#greeting"); // creating an object to store the element with greeting id
    greeting.textContent = `Hello ${name}, nice to see you!`; // uses a method to print a greeting to user
}
try {
    button.addEventListener("click", greet); // button listener
} catch (error) {
    console.error(error)
}

let newline = "today's a good day,\nI'm looking forward to tomorrow";
console.log(newline); // \n is used to break lines in strings

newline = `One day I will have my revenge,
but today is not that day.`;
console.log(newline); // backticks apply hardcoded newlines

let quote = 'She said "I think so!"';
console.log(quote); // including quotation marks in string by wrapping it in a different quote character

quote = 'I\'ve got so much to look forwsrd to today';
console.log(quote); // using a backslash to denote punctuation inside string

string = "500"; // string integer
variable = Number(string); // turns a string into a number if possibel
console.log (typeof variable); // returns number

string = String(variable); // String() converts number to string
console.log(typeof string); // returns string

/** String methods are used to perform operations on string values, they take a string as input
 * and usually return a string.
 */

string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // english alphabet
let length = string.length; // returns the length of a string
console.log(length); // 26 characters

console.log(string.charAt(4)); // returns the character at given index, this returned E
console.log(string.charCodeAt(0)); // returns the unicode of a character at a given position
console.log(string.at(4)); // returns character at given index
// at() is fairly new, at() can handle negative index positions while charAt() cannot
console.log(string[4]); // returns the character at a position, looks like an array reference. it is not.

/** the following methods extract part of a string and returns it as a new string
 *  omitting the second paramater will slice the rest of the string.
 *  if the parameter is negative it will count from the end of the string.
 */
console.log(string.slice(0, 12)); // extracts the string from index 0 to 12
console.log(string.slice(-12)); // a negative parameter slices the string from the last index
console.log(string.substring(0, 12));
console.log(string.substring(12)); // extract the rest of the string after index 12
console.log(string.substr(0, 12)); // works similarly to slice()
console.log(string.substr(8, 4)); // except the second parameter works as the length to be extracted

string = string.toLowerCase(); // converts string to all lowercase
console.log(string);

string = string.toUpperCase(); // and vice versa, changes string to all uppercase
console.log(string);

variable = "     LARGE";
string = "MAN";

string = variable.concat(" ", string); // concatenates multiple strings into one
console.log(string);


string = string.trim(); // this method trims whitespace from both sides of a string
console.log(string);

//trimStart() only removes whitespace from the start of string
//you'll never guess what trimEnd() does...

console.log(string.padStart(14, "A")); // pads a string up to a specified length with a specified string
// padEnd() pads the string from the end

console.log(string.repeat(1)); // returns string value, returns the number of copies of a char at a given position

string = string.replace("LARGE", "SMALL"); // replaces a given substring with a new string
console.log(string);

string = string.replace(/small/i, "HEY,"); // use / /i to denote case insensitive, this is a regular expression
// regular expression are used without quotes / /g finds global matches
console.log(string);

string = string.concat(" ", string);
string = string.replaceAll("MAN", "GIRL"); // replaces all matching substrings
console.log(string);

// you can convert a string to an array using split()
variable = string.split(""); // this makes every character an element in the array
console.log(variable);

variable = string.split(","); // this splits substrings by the specified character into an array
console.log(variable);




// console.log("this causes an error: ${string}");

/** Boolean
 * only has two values true and false. commonly used as a flag to trigger an event.
 */
let bool = true; // boolean is true or false
if(bool) { // if true
    console.log("boolean is true");
} else if (!bool) { // if false
    console.log('boolean is false');
}

/** null
 * it's it own type, that is just 'null'. it represents empty or nothing.
 */

variable = null;
console.log(variable); // returns null

/** undefined
 *  it's its own type, it represent unassigned values.
 */

let unassigned; // unassigned variable
console.log(unassigned); // returns undefined

/** Objects and Symbols 
 * All of the data types discussed so far are referred to as 'primitive types'.
 * this is because they only store one value, Objects are a special data type that store
 * functions, collections of data etc.
 * 
 * Symbols are identifiers for objects.
 */

//discussed later

/** typeof operator returns the type of value a variable stores */
variable = "hello, world";
console.log(typeof variable); // returns string

/**
 * Comparisons and conditionals
 * Comparisons in JavaScript are written using math comparisons
 * - Greater/Less than : a>b, a<b
 * - Greater/less than equals : a>=, a<=b
 * - Equals : a == b
 * - Not equals : a != b
 * 
 * ALL COMPARISONS RETURN A BOOLEAN VALUE true/false
 */

let result = 8 < 10;
console.log(result); // prints true

/** Comparing string is done in lexicographical order, or, letter-by-letter */
result = "Z" > "A";
console.log(result); // returns true

/** for word strings the first letter is calculated, if the letters are the same 
 *  then the comparison checks the next letter until a conclusion is reached */

//comparing different types
result = '1' > 0; // converts values to numbers
console.log(result); // returns true

/** strict equality, when checking if a value is true or false 'var == false' would 
 *  be innacurate. a strict equality check uses '===' e.g. 'var === false'
 *
 */ 
console.log(result === true);
console.log(result !== false);

/**
 * null and undefined, you can do strict equality checks on these too.
 */

/** CONDITIONAL STATEMENTS, these are used as decision making in a program. */
if (result) { // if a statement is true, then perform this action
    console.log("result is true!");
} else { // if none of the above conditions are true, then perform default behavior
    console.log("result is false!");
}

if (1 > 2) {
    console.log("HUUUUUUUH????");
} else if (2 > 1) { //else if's are additional statements to check for in a conditional tree
    console.log("this is a true!");
} else {
    console.log("default");
}

/** LOGICAL OPERATIORS, there are four of them:
 *      || : OR
 *      && : AND
 *      !  : NOT
 *      ?? : Nullish Coalescing
 * Logical operators are normally used in conditionals to check for multiple conditions
    as a note, && has precedence over ||
*/

//examples
if (0 < 1 || 0 > 1) {
    console.log("one of these conditions is true");
}
if (0 < 1 && 1 > 0) {
    console.log("all of the conditions are true");
}
if (result == !null) {
    console.log(`result is not null, result is ${result}`);
}

//alert(null && 3);

let age = Math.round(Math.random() * (100 - 1) + 1);
if (age >= 14 && age <= 90) {
    console.log(`your age is ${age}`);
} else {
    console.log(`${age} is not within range`)
}

/** SWITCH STATEMENTS, can replace 'if' conditonal trees */

let randNum = Math.round(Math.random() * (4 - 1) + 1);

switch(randNum) { //compares switch paramater to case values
    case 1 :
        console.log('CASE 1');
        break;
    case 2:
        console.log('CASE 2');
        break;
    case 3:
        console.log('CASE 3');
        break;
    case 4:
        console.log('CASE 4');
        break;
    default:
        console.log("why are we here...");
        break;
}

switch(randNum) { //grouped case example
    case 1:
    case 2:
        console.log(`CASE ${randNum}`);
        break;
    case 3:
    case 4:
        console.log(`CASE ${randNum}`);
        break;
    default:
        console.log("why are we here...");
        break;
}


//ternary operator
result ? true : false;
//condition ? code to execute if true : code to execute if false;
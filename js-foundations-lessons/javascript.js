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
 * and usually return some other value.
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
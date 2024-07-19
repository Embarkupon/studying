console.log("Hola, Mundo");
// variables in javascript store data, use 'var', 'let' and 'const' to declare them
// the difference between var and let is that var ignores code blocks, it has a global scope
let message; // declare message as variable
message = "Hello"; // store a string to message variable
alert(message); // shows the variable content in browser alert

// concise declaration
let message_two = "Hey";
alert(message_two);

// declaring multiple variables in one line
// let user = "Jon", age = 26, message_jon = "I'm having fun!";

// it is still preferable to declare variable in multiple lines
let user = "Jon";
let age = 26;
let message_jon = "Graduated in 2022";

// when assign a variable with a value to another variable, the other variable will
// have the same value
// let var_one = 1;
// let var_two = var_one;

// the compiler reads code top to bottom, so if 'var_one' is assigned the value 'one'
// if we re-assign it's value as 'two', the previous value is overwritten
// let var_one = 'one';
// var_one = 'two';

// VARIABLE SHOULD ONLY BE DECLARED ONCE, any REFERENCES to a variable should be made
// with just the variables name

// FUNCTIONAL LANGAUGES (off-topic) such as Haskell, forbid changing variable values

// declaring variables has limitations, the name must only contain letter, digits or the $ symbol
// the first character must not be a digit

let $L337 = "leet"; // this is a valid declaration
let userName = "billy"; // an example of camelCase
let user_name = "bob"; // an example of underscore seperation
console.log($L337 + " man " + userName + " " + user_name);

//////////////////////////////////////////////////////////////////////////////////////

// Constant variablere declared with 'const', these variables CANNOT be reassigned
const myBirthday = '18.04.1982';
// myBirthday = null; would cause an error

// it is common practice to declare constants as aliases for difficult-to-remember values in UPPERCASE
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;
alert(color);

// WHEN DECLARING VARIABLES IT IS VERY IMPORTANT TO NAME THEM WELL
// poorly named variables make code much less readable, use meaningful names

// TASK
let admin; // declare admin
let name_; // declare name_
name_ = "John"; // assign 'John' to name_
admin = name_; // store name_'s value into admin
alert(admin); // display admin's value in alert

let planetEarth; // variable named after our planet, named as such because it's the most descriptive label
let current_user; // variable named to describe a current visitor of a website
// the above were not specific enough
let ourPlanetName = "Earth"; // correct variable naming
let currentUserName = "John"; //correct variable naming

// javascript numbers
/** javascript has only one type of number, numbers can be written with or without decimals
 *  Extra large or small number can be written with scientific notation e.g. let x = 123e-5
 *  JavaScript numbers are always 64-bit floating point (no ints, longs, doubles, short)
 *  (continued) this format stores  umbers its 0 - 51 the exponent in bit 52 - 62 and the sign is 63
 *  Integers are accurate up to 15 digits, afterwards it's rounded. the max number of decimals is 17.
 *  floating point arithmetic is not always 100% accurate
 *  NaN - Not a Number occurs when attempting to do arithemtic with non numeric string values
 *  HOWEVER if the string is numeric then the result will be a number
 *  use isNaN() to determine if a value is not a number
 *  'Infinity' or '-Infinity' is the value javascript will return if you calculate a number outside the largest possible number.
 *  JavaScript interprets numeric constants as hexadecimal if preceded by 0x.
 *  ARITHMETIC
 *  + - Addition
 *      - unary plus prefixed to string integer will convert the string to a number e.g +"10"
 *  - - Subtraction
 *  * - Multiplication
 *  ** - exponentiation
 *  ** - exponentiation
 *  / - Division
 *  % - Modulus (remainder)
 *  ++ - increment'
 *      - there are two forms prefix/postfix
 *      - prefix increments the value but returns the old value
 *      - postfix increments also, but returns the new value
 *  -- - decrement
 *  == - numbers are equal
 *  === - numbers NOT equal
 */



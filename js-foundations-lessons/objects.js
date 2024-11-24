/** compared to primtive variables, that store only one piece of
 * information. Objects are used to store keyed collections of various
 * data and complex entities. 
 * 
 */
// objects are created with {} with optional properties. with a property
// being a key: value pair where the key is a string (property name)
// and the value is anything. multiword names must be quoted.
let object1 = {key: "value", "A Key": 80};
let object2 = new Object();

//access object values with dot notation
console.log(object1.key); // read value
object2.key2 = "value2"; // write a value
console.log(object2.key2);
delete object2.key2; //delete a value
//access multi word properties with bracket notation
console.log(object1["A Key"]);
//also this is a thing, 'computed properties'
let thing = prompt("what is the value?", "this is the value");
let object3 = {[thing]: 5} //thing is the name

/**property value shorthand can be used whenever the property name
 * will be the same name as a variable that is assigned to it.
 * for example...
 */

function hello(num) {
    return {num,} // longform looks like num: num
}

// property names can match javascript keywords e.g. 'for', 'let', 'return'
// there are basically no limitations on property names.

//use the 'in' keyword to check if a name exists in an object
"key" in object1; //returns true if "key" is in object1

//theres a special for loop for keys in objects.
for (let keys in object1) {
    console.log(keys); // the keys names
    console.log([keys]); // the keys values
}

/** when using a for...in with objects properties are accessed
 * in ascending order when theye are integers, but when they're non-integers
 * they're accessed in creation order.
 */

/** making changes to a copy of a primitve value will not affect to original.
 * However making changes to another reference to a previous object, will
 * change the previous object as well.
 * 
 * changes made to an object anywhere in the program will affect the object.
 * if you create a reference to an object, and then reassign the original
 * object no changes will be made to the reference. i.e. it will still
 * contain a reference to the original object.
 */
let initArray = [0,1,2,3,4,5,6,7,8,9];
let sum_of_tripled_evens = sumOfTripledEvens(initArray);

function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < initArray.length; i++) {
        if (array[i] % 2 === 0) {
            let temp = array[i]*3;
            sum += temp;
        }
    }
    return sum;
}

/** callback is a function that expects a function as an argument */

/** arrays can use a map() function that iterates
 * over an array and runs a callback function
 *  on each value then pushing it into a new array.
 * 
 * filter() method iterates through array and expects callback to return
 * a boolean, and returns the original value in an array if true.
 */

let arrayAddOne = initArray.map((x) => x + 1); // result is [1,2,3,4,5,6,7,8,9,10]
let oddArray = initArray.filter((x) => x % 2 !== 0); // [1,3,5,7,9] all odd nums

/**
 * The reduce function is complicated.
 * in short, it also iterates through an array.
 * The reduce function takes two arguments, a callback and an initial value.
 * the callback has 2 arguments, the current total (starting from initial value),
 * and the current array index value. 
 * the second argument in the reduce function is the initial value,
 * from which the first argument of the callback would start from.
 */
//multiplies all numbers of array into  one product.
let product = initArray.reduce((currentTotal, currentValue) => {
    return accumulator * currentValue;
}, initArray[0]);


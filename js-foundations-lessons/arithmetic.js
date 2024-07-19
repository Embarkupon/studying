var x = 16;
var y = 18;

console.log(x + y);
console.log( x + y + x + y + x + y);

console.log((4+6+9) / 77);

let a = 10;
console.log(a);
console.log(9*a);
let b = 7 * a;
console.log(b)

const MAX = 57;
let actual = MAX - 13;
let percentage = actual/MAX;
console.log(percentage);

console.log(30 % 8);

for (let step = 0; step <5; step++) {
    console.log("increment postfix x: ");
    console.log(x++);
    console.log("increment prefix x: ");
    console.log(++x);
    //console.log(y--);
}
console.log(x + "10");
let z = x + +"10";
console.log(z);
"use strict";
//function decl
function add(x, y, z) {
    return x + y + z;
}
console.log(add(2, 4, 4));
// exp function
const add1 = function (x, y) {
    return x + y;
};
console.log(add1(12, 12));
// arrow func
const add2 = (x, y) => x + y;
console.log(add2(12, 12));
const add3 = (a, b) => {
    console.log(`hasil ${a} + ${b} : ${a + b} `);
};
add3(12, 12);

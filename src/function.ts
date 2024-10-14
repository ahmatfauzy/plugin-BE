//function decl
function add(x: number, y: number, z: number) {
  return x + y + z;
}
console.log(add(2, 4, 4));

// exp function
const add1 = function (x: number, y: number) {
  return x + y;
};
console.log(add1(12, 12));

// arrow func
const add2 = (x: number, y: number) => x + y;
console.log(add2(12, 12));


const add3 = (a: number, b: number) :void => {
    console.log(`hasil ${a} + ${b} : ${a+b} `);
}
add3(12,12)



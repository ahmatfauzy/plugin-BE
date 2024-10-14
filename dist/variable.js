"use strict";
let nama = "fauzi";
console.log("nama: ", nama);
let umur = 18;
console.log("umur: ", umur);
let mahasiswa = true;
console.log("ini mahasiswa: ", mahasiswa);
//
let matrix;
matrix = [
    [1, 2],
    [3, 4],
    [5, 6],
];
console.log(matrix);
//
let result = 123;
let result1 = "123";
console.log(typeof result);
console.log(typeof result1);
//
let matrix2;
matrix2 = [123, 123];
console.log(matrix2);
//
let matrix1;
matrix1 = [
    [1, 2],
    [3, 4],
    [5, 6],
];
console.log(matrix1);
//
let person = {
    name: "John",
    age: 38,
};
console.log("Person: ", person);
//
let randomValue = 10;
console.log("Random nilai (number): ", randomValue);
randomValue = "hello";
console.log("Random nilai (number): ", randomValue);
randomValue = true;
console.log("Random nilai (number): ", randomValue);
//
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let favoriteColor = Color.red;
console.log(favoriteColor);
//
let myTuple = [10, "hello"];
console.log(myTuple[0]);
console.log(myTuple[1]);
//
let typeUnion;
typeUnion = 101;
console.log("identifier (Number): ", typeUnion);
console.log("identifier (String): ", typeUnion);
console.log("identifier (Boolean): ", typeUnion);

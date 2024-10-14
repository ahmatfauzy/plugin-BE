let nama: string = "fauzi";
console.log("nama: ", nama);

let umur: number = 18;
console.log("umur: ", umur);

let mahasiswa: boolean = true;
console.log("ini mahasiswa: ", mahasiswa);

//
let matrix: number[][];
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
let matrix2: Array<number>;
matrix2 = [123, 123];
console.log(matrix2);

//
let matrix1: Array<Array<number>>;
matrix1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(matrix1);

//
let person: { name: string; age: number } = {
  name: "John",
  age: 38,
};
console.log("Person: ", person);

//
let randomValue: any = 10;
console.log("Random nilai (number): ", randomValue);
randomValue = "hello";
console.log("Random nilai (number): ", randomValue);
randomValue = true;
console.log("Random nilai (number): ", randomValue);

//
enum Color {
  red,
  green,
  blue,
}
let favoriteColor: Color = Color.red;
console.log(favoriteColor);

//
let myTuple: [number, string] = [10, "hello"];
console.log(myTuple[0]);
console.log(myTuple[1]);

//
let typeUnion: string | number | boolean;
typeUnion = 101;
console.log("identifier (Number): ", typeUnion);
console.log("identifier (String): ", typeUnion);
console.log("identifier (Boolean): ", typeUnion);

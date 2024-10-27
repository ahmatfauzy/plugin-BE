"use strict";
// function p1(): void {
//   console.log("p1 done");
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// function p2(): void {
//   console.log("p2 done");
// }
// function p3(): void {
//   console.log("p3 done");
// }
// p1();
// p2();
// p3();
// // asyncronous
// function w1(): void {
//   console.log("w1 done");
// }
// function w2(): void {
//   setTimeout(() => {
//     console.log("w2 done");
//   }, 4000);
// }
// function w3(): void {
//   console.log("w3 done");
// }
// w1();
// w2();
// w3();
// callback
// function r1(): void {
//   console.log("r1 done");
// }
// function r2(callback: () => void): void {
//   setTimeout(() => {
//     console.log("r2 done");
//     callback();
//   }, 4000);
// }
// function r3(): void {
//   console.log("r3 done");
// }
// r1();
// r2(r3);
// async wait
const fetchAPI = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("https://api-book-author.vercel.app/books");
        if (!response.ok) {
            throw new Error();
        }
        const data = yield response.json();
        // const title = data.data.map((book: { title: string }) => book.title);
        // const authorId = data.data.map(
        //   (book: { authorId: string }) => book.authorId
        // );
        // const id = data.data.map((book: { id: string }) => book.id);
        // const imageUrl = data.data.map((book: { imageUrl: string }) => book.imageUrl);
        const combine = data.data.map((book) => {
            return {
                title: book.title,
                authorId: book.authorId
            };
        });
        console.log(combine);
        // console.log(title);
        // console.log(authorId);
        // console.log(id);
        // console.log(imageUrl);
    }
    catch (e) {
        console.error(e);
    }
});
fetchAPI();

"use strict";
// nomor 1
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function mangkat() {
    let hitungan = 0;
    const mangkatPlugin = setInterval(() => {
        hitungan++;
        const a = "fauzi";
        const b = "rafi";
        if (hitungan === 1) {
            console.log(`${a} : cuy`);
        }
        else if (hitungan === 2) {
            console.log(`${b} : apa?`);
        }
        else if (hitungan === 3) {
            console.log(`${a} : mangkat plugin?`);
        }
        else if (hitungan === 4) {
            console.log(`${b} : gassss, otw ngebut`);
        }
        else {
            clearInterval(mangkatPlugin);
            console.log("selesai");
        }
    }, 2000);
}
mangkat();
//
function tampilkanWaktu(awal, akhir) {
    // let detik = 1;
    const mulai = setInterval(() => {
        console.log(`waktu: ${awal} detik`);
        awal++;
        if (awal === akhir + 1) {
            clearInterval(mulai);
            console.log("Proses selesai!");
        }
    }, 1000);
}
// tampilkanWaktu(1, 5);
// hitung mundur
function hitungMundur(durasi) {
    let waktu = durasi;
    const mulai = setInterval(() => {
        if (waktu > 0) {
            console.log(`Waktu tersisa: ${waktu} detik`);
            waktu--;
        }
        else {
            clearInterval(mulai);
            console.log("Waktu habis!");
        }
    }, 1000);
}
// hitungMundur(10);
///////////////// nomor 2  ///////////////////////////////////////
function manggilNama() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error("error");
            }
            const nama = yield response.json();
            nama.forEach((cuy) => {
                console.log(cuy.name);
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
// manggilNama();

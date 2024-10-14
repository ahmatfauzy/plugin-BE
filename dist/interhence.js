"use strict";
// parent
class Hewan46 {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
}
// child
class Hewan64 extends Hewan46 {
    constructor(nama, kaki, warna) {
        super(nama, kaki);
        this.warna = warna;
    }
}
const hewan01 = new Hewan64("tikus", 4, "hitam");
console.log(hewan01);

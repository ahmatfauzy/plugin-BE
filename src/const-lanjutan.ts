class Hewan4 {
  nama = "";
  kaki = 0;

  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

const hewan5 = new Hewan4("gajah", 4);
console.log(hewan5);

hewan5.nama = "jerapah";
hewan5.kaki = 4;
console.log(hewan5);

// ----------
class hewan23 {
  constructor(public nama: string, public kaki: number) {}
}
const hewan24 = new hewan23("kucing", 4);
console.log(hewan24);

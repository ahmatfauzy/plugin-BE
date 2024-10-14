class Hewan {
  nama: string = "";
  kaki: number = 0;

  bernafas() {
    console.log(
      `${this.nama} sedang bernafas. hewan ini mempunyai ${this.kaki} kaki`
    );
  }
}
const hewan1 = new Hewan();
console.log(hewan1);

hewan1.nama = "bebek";
hewan1.kaki = 2;

console.log(hewan1);
hewan1.bernafas();

const hewan2 = new Hewan();
hewan2.nama = "kadal";
hewan2.kaki = 4;
console.log(hewan2);

hewan2.bernafas()


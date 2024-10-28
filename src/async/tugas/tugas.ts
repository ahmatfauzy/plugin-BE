// nomor 1

function mangkat() {
  let hitungan = 0;

  const mangkatPlugin = setInterval(() => {
    hitungan++;

    const a = "fauzi";
    const b = "rafi";

    if (hitungan === 1) {
      console.log(`${a} : cuy`);
    } else if (hitungan === 2) {
      console.log(`${b} : apa?`);
    } else if (hitungan === 3) {
      console.log(`${a} : mangkat plugin?`);
    } else if (hitungan === 4) {
      console.log(`${b} : gassss, otw ngebut`);
    } else {
      clearInterval(mangkatPlugin);
      console.log("selesai");
    }
  }, 2000);
}
mangkat();

//
//
//
function tampilkanWaktu(awal: number, akhir: number) {
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
function hitungMundur(durasi: number) {
  let waktu = durasi;

  const mulai = setInterval(() => {
    if (waktu > 0) {
      console.log(`Waktu tersisa: ${waktu} detik`);
      waktu--;
    } else {
      clearInterval(mulai);
      console.log("Waktu habis!");
    }
  }, 1000);
}
// hitungMundur(10);

///////////////// nomor 2  //////////////////
async function manggilNama() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("error");
    }

    const nama = await response.json();

    nama.forEach((data: { name: string }) => {
      console.log(data.name);
    });
  } catch (error) {
    console.error(error);
  }
}

// manggilNama();

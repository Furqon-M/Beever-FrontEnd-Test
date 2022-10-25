/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

let uangRusli = 10000
let hasil = ''
for (let i = 1; 1 <= 12; i++) {
  let bunga = 0
  let sisih = 0
  if (i > 1) {
    bunga = (uangRusli * 6) / 100
    if (uangRusli + bunga > 15000) {
      sisih = (15000 * 3) / 100
    } else {
      sisih = ((uangAndi + bunga) * 3) / 100
    }
  }
  hasil +=
    'Tabungan Aawal : ${uangRusli.toFixed(2)} \n Bunga : ${bunga.toFixed(2)} \n Sisih : ${sisih.toFixed(2)} \n Uang Bulan ${i}; : ${((uangRusli+bunga)-sisih).toFixed(2)}\n-----------------\n'
  uangRusli = uangRusli + bunga - sisih
}

console.log(hasil)

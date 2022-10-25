function segitiga() {
  let words = 'beever'
  for (let i = 1; i <= baris; i++) {
    for (let j = 1; j <= i; j++) {
      pola += 'beever'
    }
    pola += '\n'
  }
  return pola
}

console.log(segitiga(s))
// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever

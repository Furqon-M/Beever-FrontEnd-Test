/**
 * ===============
 * Element Counter
 * ===============
 *
 * [Instruction]
 * buat sebuah function untuk menghitung jumlah masing-masing elemen yang muncul dari array input yang diberikan
 *
 * [Description]
 * 1. function menerima sebuah array sebagai input
 * 2. function Mengembalikan sebuah object sebagai output yang berisikan elemen yang muncul
 *    dan jumlah kemunculannya dari input yang diberikan.
 *
 * [Example]
 * @input = [1, 2, 3, 4, 5, 4, 3, 2, 4]
 *
 * @process
 * angka 1 muncul 1 kali
 * angka 2 muncul 2 kali
 * angka 3 muncul 2 kali
 * angka 4 muncul 3 kali
 * angka 5 muncul 1 kali
 *
 * @output
 * {
 *    1: 1,
 *    2: 2,
 *    3: 2,
 *    4: 3,
 *    5: 1,
 * }
 *
 * [Rules]
 * 1. `Dilarang` menggunakan built-in function kecuali .unshift() dan .push()
 * 2. `Wajib dikerjakan dengan pseudocode`.
 */

function counter(arr) {
  const dataArray = [1, 2, 3, 4, 5, 6, 4, 3, 2, 5, 6, 8, 7, 6, 9, 8, 7, 0, 8, 7, 6, 5, 4, 3]
  let dataArrayTampung = []
  let dataArrayCount = ''

  for (let i = 0; i < dataArray.length; i++) {
    let ketemu = false

    for (let a = 0; a < dataArrayTampung.length; a++) {
      if (dataArray[i] == dataArrayTampung[a]) {
        ketemu = true
      }
    }
    if (!ketemu) {
      dataArrayTampung = [...dataArrayTampung, dataArray[i]]

      for (let e = 0; e < dataArray.length; e++) {
        if (dataArray[i] == dataArray[e]) {
          totalKetemu = totalKetemu + 1
        }
      }
      dataArrayCount += 'Angka ${dataArray[i]} muncul ${totalKetemu}\n'
    }
  }
}

console.log(counter(['Joyful', 'Infinite', 'Humble', 'Joyful', 'Glory', 'King', 'Humble', 'Infinite']))
// { Joyful: 2, Infinite: 2, Humble: 2, Glory: 1, King: 1 }

console.log(counter([true, true, false, true, false, true, false, false, true, false]))
// { true: 5, false: 5 }

console.log(counter([1, 2, 3, 4, 5, 6, 4, 3, 2, 5, 6, 8, 7, 6, 9, 8, 7, 0, 8, 7, 6, 5, 4, 3]))
// {
//   '0': 1,
//   '1': 1,
//   '2': 2,
//   '3': 3,
//   '4': 3,
//   '5': 3,
//   '6': 4,
//   '7': 3,
//   '8': 3,
//   '9': 1
// }

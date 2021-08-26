let input = []

let kodePoli = {
  'poli anak': 'PA',
  'poli gigi': 'PG',
  'poli internis': 'PI',
  'poli bedah': 'PB',
  'poli umum': 'PU'
}
//ID berisi inisial nama, tanggal, dan nama poli. (ex. anak)
function generateId(nama, tgl, poli) {
  let id = `${nama[0].toUpperCase() + tgl + kodePoli[poli]}`
  return id
}
console.log(generateId('fathur', 10 , 'poli anak'))
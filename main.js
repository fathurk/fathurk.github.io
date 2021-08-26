// //jika sabtu minggu yang enable poliUmum 
// 09 s/d 18 diluar itu  jam istirahat atau di luar jam kerja
function infoAppointment(user) {     
  const dataBase = [         
      {namePoli: 'poli anak', dokter: ['Raihan','Matthew','fathur']},
      {namePoli: 'poli internis', dokter: ['Agnia','Arif','Colin']},
      {namePoli: 'poli gigi', dokter: ['Darwin','Yura','Huang']},
      {namePoli: 'poli umum', dokter:['Gilbert','Krisna','Juluis']},
      {namePoli: 'poli bedah', dokter:['Indra','Vina','Royan']}
  ]
  let hariKerja = ['senin','selasa','rabu','kamis','jumat']
  let hari = ['senin','selasa','rabu','kamis','jumat', 'sabtu', 'minggu']              
  let output = []     
  for (let i = 0; i < dataBase.length; i++) {         
      console.log(dataBase[i].dokter);
  }  
}

// Ambil Value dari HTML
let namaPengunjung = document.getElementById('nama') 
let genderPengunjung = document.getElementById('gender')
let tanggalLahir = document.getElementById('birthday')
let poliklinik = document.getElementById('poliklinik')
let tanggalAppointment = document.getElementById('appointmentDate')
let keluhan = document.getElementById('keluhan')
//----------------------

let dataPengunjung = {
name: namaPengunjung,     
tglLahir: tanggalLahir,     
gender: genderPengunjung,     
poli: poliklinik,     
keluhan,     
dateBooking: tanggalAppointment  
}  

//Masukin semua value terbaru ke dalam object
namaPengunjung.addEventListener('change', (event) => {
dataPengunjung.name = namaPengunjung.value
})
genderPengunjung.addEventListener('change', (event) => {
dataPengunjung.gender = genderPengunjung.value
})
tanggalLahir.addEventListener('change', (event) => {
dataPengunjung.tglLahir = tanggalLahir.value
})
poliklinik.addEventListener('change', (event) => {
dataPengunjung.poli = poliklinik.value
})
tanggalAppointment.addEventListener('change', (event) => {
dataPengunjung.dateBooking = tanggalAppointment.value
console.log(dataPengunjung.dateBooking)
})
keluhan.addEventListener('change', (event) => {
dataPengunjung.keluhan = keluhan.value
})

let tanggal = dataPengunjung.tglLahir[dataPengunjung.tglLahir.length - 2] + dataPengunjung.tglLahir[dataPengunjung.tglLahir.length - 1]
//Generate ID
let kodePoli = {
'poli anak': 'PA',
'poli gigi': 'PG',
'poli internis': 'PI',
'poli bedah': 'PB',
'poli umum': 'PU'
}

//ID berisi inisial nama, tanggal, dan nama poli. (ex. poli anak)
function generateId(nama, tgl, poli) {
let id = `${nama[0].toUpperCase() + tgl + kodePoli[poli]}`
return id
}
let idPengunjung = generateId(dataPengunjung.nama, tanggal, dataPengunjung.poli)




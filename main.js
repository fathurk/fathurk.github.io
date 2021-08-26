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

//----------------------



let dataPengunjung = {
  name: undefined,     
  tglLahir: undefined,     
  gender: undefined,     
  poli: undefined,     
  keluhan: undefined,
  dokter: undefined,
  jam: undefined,     
  dateBooking: undefined,
  idPengunjung: undefined
}  

//ID berisi inisial nama, tanggal, dan nama poli. (ex. poli anak)


let submit = document.getElementById('form-create')
submit.onsubmit = createAppointment

function generateId(nama, tgl, poli) {
  let id = `${nama[0].toUpperCase() + tgl + poli[0].toUpperCase() + poli[1].toUpperCase()}`

  return id
}

function createAppointment(event) {
  let namaPengunjung = document.getElementById('nama').value 
  let genderPengunjung = document.getElementById('gender').value
  let tanggalLahir = document.getElementById('birthday').value
  let poliklinik = document.getElementById('poliklinik').value
  let tanggalAppointment = document.getElementById('appointmentDate').value
  let keluhan = document.getElementById('keluhan').value
  let jam = document.getElementById('appointmentTime').value

  dataPengunjung.name = namaPengunjung.toLowerCase()
  dataPengunjung.gender = genderPengunjung
  dataPengunjung.tglLahir = tanggalLahir
  dataPengunjung.poli = poliklinik
  dataPengunjung.dateBooking = tanggalAppointment
  dataPengunjung.keluhan = keluhan
  dataPengunjung.jam = jam

  let tanggal = dataPengunjung.tglLahir[dataPengunjung.tglLahir.length - 2] + dataPengunjung.tglLahir[dataPengunjung.tglLahir.length - 1]

  dataPengunjung.idPengunjung = generateId(dataPengunjung.name, tanggal, dataPengunjung.poli)
  console.log(dataPengunjung)
  event.preventDefault()
}

function chooseDoc(user) {
  let dataDoc = avaliableDoc(user)
  let jam = Number(user.waktuAppointment)
  let output = ''
  if ( jam >= 8 && jam <= 10.59) {
    output = dataDoc[0]
  } else if (jam >= 11 && jam <= 13.59) {
    output = dataDoc[1]
  } else if ( jam >= 14 && jam <= 17) {
    output = dataDoc[2]
  } else {

    output = `yang tersedia hanya dokter poli umum `
  }
  return output

}

let pengunjung = {
  name: 'Surya',     
  tglLaahir: '18/06/1996',     
  gender: 'male',     
  poli: 'poli gigi',  
  waktuAppointment: '13:20',   
  keluhan: 'gusi bengkak',     
  dateBooking: '2021/08/21'
}  
// console.log(chooseDoc(pengunjung));

//Generate ID




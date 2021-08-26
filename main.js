// //jika sabtu minggu yang enable poliUmum 
// 09 s/d 18 diluar itu  jam istirahat atau di luar jam kerja
// const dataBase = [         
//     {namePoli: 'anak', dokter: ['Raihan','Matthew','fathur']},
//     {namePoli: 'internis', dokter: ['Agnia','Arif','Colin']},
//     {namePoli: 'gigi', dokter: ['Darwin','Yura','Huang']},
//     {namePoli: 'umum', dokter:['Gilbert','Krisna','Juluis']},
//     {namePoli: 'bedah', dokter:['Indra','Vina','Royan']}
// ]
const dataBase = {
  anak:  ['Raihan','Matthew','fathur'],
  internis:  ['Agnia','Arif','Colin'],
  gigi: ['Darwin','Yura','Huang'],
  umum: ['Gilbert','Krisna','Juluis'],
  bedah: ['Indra','Vina','Royan']
}

let arr = [
  {
    name: 'haha',     
    tglLahir: '02/07/2003',     
    gender: 'female',     
    poli: 'umum',     
    keluhan: 'sakit kepala',
    dokter: 'Vina',
    jam: '09:00',     
    dateBooking: '03/09/2021',
    idPengunjung: '01'
  },
  {
    name: 'haha',     
    tglLahir: '02/07/2003',     
    gender: 'female',     
    poli: 'umum',     
    keluhan: 'sakit kepala',
    dokter: 'Vina',
    jam: '09:00',     
    dateBooking: '03/09/2021',
    idPengunjung: '02'
  },
  {
    name: 'bhs',     
    tglLahir: '1992/05/11',     
    gender: 'female',     
    poli: 'umum',     
    keluhan: 'sakit perut',
    dokter: 'Vina',
    jam: '09:00',     
    dateBooking: '03/09/2021',
    idPengunjung: '03'
  },
  {
    name: 'haha',     
    tglLahir: '2003/07/21',     
    gender: 'female',     
    poli: 'poli bedah',     
    keluhan: 'sakit kepala',
    dokter: 'Vina',
    jam: '09:00',     
    dateBooking: '03/09/2021',
    idPengunjung: 'H'
  }
]
function infoAppointment(tglLahir, nama) {     
  let output = []
  output = arr.filter(function(value) {
   return nama === value.name && tglLahir === value.tglLahir
  })
  return output

}
console.log(infoAppointment('1992/05/11','bhs'));




// Ambil Value dari HTML


// let arr = []
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


function chooseDoc(event) {
  
  let jam = Number(event.target.value.replace(':', ''))
  let poli = document.getElementById('poliklinik').value

  if (jam >= 800 && jam <= 1059) {
    document.getElementById('dokter').value = dataBase[poli][0]
  } else if (jam >= 1100 && jam <= 1359) {
    document.getElementById('dokter').value = dataBase[poli][1]
  } else if ( jam >= 1400 && jam <= 1700) {
    document.getElementById('dokter').value = dataBase[poli][2]
  } else if (jam < 800) {
    document.getElementById('appointmentTime').value = '08:00'
    document.getElementById('dokter').value = dataBase[poli][0]
  } else if (jam > 1700) {
    document.getElementById('appointmentTime').value = '17:00'
    document.getElementById('dokter').value = dataBase[poli][2]
  }
}
document.getElementById('appointmentTime').addEventListener('change', chooseDoc)

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
  // console.log(dataPengunjung)
  arr.push(dataPengunjung)
  event.preventDefault()
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

// function delete data pengunjung

function deleteApp(idPengunjung){
  let temp = []

  temp = arr.filter(function(value){
    return value.idPengunjung !== idPengunjung
  })

  arr = temp
  console.log(arr)
}




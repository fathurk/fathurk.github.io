// //jika sabtu minggu yang enable poliUmum 
// 09 s/d 18 diluar itu  jam istirahat atau di luar jam kerja
function infoAppointment(user) {     
    const dataBase = [         
        {namePoli: 'poli anak', dokter: ['Raihan','Matthew','fathur']},         {namePoli: 'poli internis', dokter: ['Agnia','Arif','Colin']},
        {namePoli: 'poli gigi', dokter: ['Darwin','Yura','Huang']},
        {namePoli: 'poli umum', dokter:['Gilbert','Krisna','Juluis']},         {namePoli: 'poli bedah', dokter:['Indra','Vina','Royan']}
    ]
    let avaliable = ['senin','selsa','rabu','kamis','jumat']              
    let output = []     
    for (let i = 0; i < dataBase.length; i++) {         
        console.log(dataBase[i].dokter);
    }  
}  
let pengunjung = {
    name: 'Surya',     
    tglLaahir: '18/06/1996',     
    gender: 'male',     
    poli: 'poli gigi',     
    keluhan: 'gusi bengkak',     
    dateBooking: ['minggu', '31/08/2021']  
}  
console.log(infoAppointment(pengunjung));



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


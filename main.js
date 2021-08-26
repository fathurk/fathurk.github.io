// let input = []
// //jika sabtu minggu yang enable poliUmum

function infoAppointment(user) {
    // const dataBase = [
    //     {
    //     namePoli: 'poli anak', 
    //     dokter1: {
    //         name: 'Raihan',
    //         avaliable: ['senin','rabu','kamis']
    //         },
    //     dokter2: {
    //         name: 'Matthew',
    //         avaliable: ['selasa','kamis','jumat']
    //         },
    //     dokter3: {
    //         name: 'fathur',
    //         avaliable: ['senin','selasa','jumat']
    //         }
    //     },
    //     {
    //     namePoli: 'poli internis', 
    //     dokter1: {
    //         name: 'Agnia',
    //         avaliable: ['selasa','rabu','kamis']
    //         },
    //     dokter2: {
    //         name: 'Arif',
    //         avaliable: ['selasa','kamis','jumat']
    //         },
    //     dokter3: {
    //         name: 'Colin',
    //         avaliable: ['senin','rabu','kamis']
    //         }
    //     },
    //     {
    //     namePoli: 'poli gigi', 
    //     dokter1: {
    //         name: 'Darwin',
    //         avaliable: ['selasa','rabu','kamis']
    //         },
    //     dokter2: {
    //         name: 'Yura',
    //         avaliable: ['senin','kamis','jumat']
    //         },
    //     dokter3: {
    //         name: 'Huang',
    //         avaliable: ['senin','rabu','jumat']
    //         }
    //     },
    //     {
    //     namePoli: 'poli umum', 
    //     dokter1: {
    //         name: 'Agnia',
    //         avaliable: ['senin','kamis','jumat']
    //         },
    //     dokter2: {
    //         name: 'Arif',
    //         avaliable: ['selasa','rabu','jumat']
    //         },
    //     dokter3: {
    //         name: 'Colin',
    //         avaliable: ['senin','kamis','rabu']
    //         }
    //     },
    //     {
        // namePoli: 'poli bedah', 
        // dokter1: {
        //     name: 'Agnia',
        //     avaliable: ['selasa','rabu','kamis']
        //     },
        // dokter2: {
        //     name: 'Arif',
        //     avaliable: ['senin','selasa','jumat']
        //     },
        // dokter3: {
        //     name: 'Juluis',
        //     avaliable: ['senin','rabu','jumat']
        //     }
    //     }  
    // ]

    const dataBase = [
        namePoli:'poli anak', dokter : {attack: 890, defense: 700, agility: 800, magic: 870}}
    ]
    let output = []
    for ( let i = 0; i < dataBase.length; i++) {
        console.log(dataBase[i].dokter1);
    }

}

let pengunjung = {
    naame: 'Surya',
    tglLaahir: '18/06/1996',
    gender: 'male',
    poli: 'poli gigi',
    waktuAppointment: '14.30',
    keluhan: 'gusi bengkak',
    dateBooking: ['selasa', '31/08/2021']

}

console.log(infoAppointment(pengunjung));
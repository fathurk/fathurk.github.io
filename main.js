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
	anak: ['Raihan', 'Matthew', 'fathur'],
	internis: ['Agnia', 'Arif', 'Colin'],
	gigi: ['Darwin', 'Yura', 'Huang'],
	umum: ['Gilbert', 'Krisna', 'Juluis'],
	bedah: ['Indra', 'Vina', 'Royan'],
};

let arr = [
	{
		name: 'haha',
		tglLahir: '2003-07-02',
		gender: 'female',
		poli: 'umum',
		keluhan: 'sakit kepala',
		dokter: 'Vina',
		jam: '09:00',
		dateBooking: '03/09/2021',
		idPengunjung: '01',
	},
	{
		name: 'haha',
		tglLahir: '2003-07-02',
		gender: 'female',
		poli: 'umum',
		keluhan: 'sakit kepala',
		dokter: 'Vina',
		jam: '09:00',
		dateBooking: '03/09/2021',
		idPengunjung: '02',
	},
	{
		name: 'bhs',
		tglLahir: '1992-05-11',
		gender: 'female',
		poli: 'umum',
		keluhan: 'sakit perut',
		dokter: 'Vina',
		jam: '09:00',
		dateBooking: '03/09/2021',
		idPengunjung: '03',
	},
	{
		name: 'haha',
		tglLahir: '2003/07/21',
		gender: 'female',
		poli: 'bedah',
		keluhan: 'sakit kepala',
		dokter: 'Vina',
		jam: '09:00',
		dateBooking: '03/09/2021',
		idPengunjung: 'H',
	},
	{
		name: 'bhs',
		tglLahir: '1992-05-11',
		gender: 'female',
		poli: 'umum',
		keluhan: 'sakit perut',
		dokter: 'Vina',
		jam: '10:00',
		dateBooking: '03/09/2021',
		idPengunjung: '04',
	},
];

let submit = document.getElementById('form-create');
submit.onsubmit = createAppointment;

function chooseDoc(jam, poli) {
	if (jam >= 800 && jam <= 1059) {
		document.getElementById('dokter').value = dataBase[poli][0];
	} else if (jam >= 1100 && jam <= 1359) {
		document.getElementById('dokter').value = dataBase[poli][1];
	} else if (jam >= 1400 && jam <= 1700) {
		document.getElementById('dokter').value = dataBase[poli][2];
	} else if (jam < 800) {
		document.getElementById('appointmentTime').value = '08:00';
		document.getElementById('dokter').value = dataBase[poli][0];
	} else if (jam > 1700) {
		document.getElementById('appointmentTime').value = '17:00';
		document.getElementById('dokter').value = dataBase[poli][2];
	}
}

function choosePoli(event) {
	let jam = Number(
		document.getElementById('appointmentTime').value.replace(':', '')
	);
	let poli = event.target.value;
	chooseDoc(jam, poli);
}

function handleTimeChange(event) {
	let jam = Number(event.target.value.replace(':', ''));
	let poli = document.getElementById('poliklinik').value;
	chooseDoc(jam, poli);
}
document
	.getElementById('appointmentTime')
	.addEventListener('change', handleTimeChange);

document.getElementById('poliklinik').addEventListener('change', choosePoli);

function generateId(nama, tgl, poli) {
	let id = `${
		nama[0].toUpperCase() +
		tgl +
		poli[0].toUpperCase() +
		poli[1].toUpperCase()
	}`;
	return id;
}

function createAppointment(event) {
	let namaPengunjung = document.getElementById('nama').value;
	let genderPengunjung = document.getElementById('gender').value;
	let tanggalLahir = document.getElementById('birthday').value;
	let poliklinik = document.getElementById('poliklinik').value;
	let tanggalAppointment = document.getElementById('appointmentDate').value;
	let keluhan = document.getElementById('keluhan').value;
	let jam = document.getElementById('appointmentTime').value;

	dataPengunjung.name = namaPengunjung.toUpperCase();
	dataPengunjung.gender = genderPengunjung;
	dataPengunjung.tglLahir = tanggalLahir;
	dataPengunjung.poli = poliklinik;
	dataPengunjung.dateBooking = tanggalAppointment;
	dataPengunjung.keluhan = keluhan;
	dataPengunjung.jam = jam;

	let tanggal =
		dataPengunjung.tglLahir[dataPengunjung.tglLahir.length - 2] +
		dataPengunjung.tglLahir[dataPengunjung.tglLahir.length - 1];

	dataPengunjung.idPengunjung = generateId(
		dataPengunjung.name,
		tanggal,
		dataPengunjung.poli
	);
	arr.push(dataPengunjung);
	event.preventDefault();
}

let read = document.getElementById('form-read');
read.onsubmit = infoAppointment;

function infoAppointment(event) {
	event.preventDefault();
	let output = [];
	let nama = document.getElementById('nameSearch').value;
	let tglLahir = document.getElementById('birthdaySearch').value;

	output = arr.filter(function (value) {
		console.log(nama);
		console.log(tglLahir);
		return nama === value.name && tglLahir === value.tglLahir;
	});

	renderResult(output);
}

function handleDelete(event) {
	let id = event.target.id;

	let output = [];

	output = arr.filter(function (value) {
		return value.idPengunjung !== id;
	});

	arr = output;

	event.target.parentElement.remove();
}

function renderResult(arr) {
	let results = document.getElementsByClassName('wrapper')[0];
	results.textContent = '';

	for (const appointment of arr) {
		let card = document.createElement('div');
		card.classList.add('card');

		if (appointment.poli === 'umum') {
			card.classList.add('umum');
		} else if (appointment.poli === 'anak') {
			card.classList.add('anak');
		} else if (appointment.poli === 'internis') {
			card.classList.add('internis');
		} else if (appointment.poli === 'bedah') {
			card.classList.add('bedah');
		} else if (appointment.poli === 'gigi') {
			card.classList.add('gigi');
		}

		let nama = document.createElement('span');
		nama.style.fontWeight = '600';
		nama.textContent = appointment.name;

		let dataPasien = document.createElement('span');
		let birthday = new Date(appointment.tglLahir);
		birthday = `${birthday.getDate()}/${
			birthday.getMonth() + 1
		}/${birthday.getFullYear()}`;
		dataPasien.textContent = `${appointment.gender} - ${birthday}`;

		let poli = document.createElement('span');
		poli.style.fontWeight = '600';
		poli.textContent = appointment.poli;

		let dokter = document.createElement('span');
		dokter.textContent = appointment.dokter;

		let booking = document.createElement('span');
		let bookingDate = new Date(appointment.dateBooking);
		bookingDate = `${bookingDate.getDate()}/${
			bookingDate.getMonth() + 1
		}/${bookingDate.getFullYear()}`;
		booking.textContent = `${bookingDate} - ${appointment.jam}`;

		let keluhan = document.createElement('span');
		keluhan.textContent = appointment.keluhan;

		let button = document.createElement('button');
		button.classList.add('cancel');
		button.setAttribute('id', appointment.idPengunjung);
		button.textContent = 'Cancel Appointment';
		button.addEventListener('click', handleDelete);

		card.appendChild(nama);
		card.appendChild(dataPasien);
		card.appendChild(poli);
		card.appendChild(dokter);
		card.appendChild(booking);
		card.appendChild(keluhan);
		card.appendChild(button);

		results.appendChild(card);
	}
}

let dataPengunjung = {
	name: undefined,
	tglLahir: undefined,
	gender: undefined,
	poli: undefined,
	keluhan: undefined,
	dokter: undefined,
	jam: undefined,
	dateBooking: undefined,
	idPengunjung: undefined,
};

let pengunjung = {
	name: 'Surya',
	tglLaahir: '18/06/1996',
	gender: 'male',
	poli: 'poli gigi',
	waktuAppointment: '13:20',
	keluhan: 'gusi bengkak',
	dateBooking: '2021/08/21',
};

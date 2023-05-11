
const groups = ["Студент 1", "Студент 2", "Студент "];
const pairs = ["пара 1", "пара 2", "пара 3"];
const records = [];


const form = document.querySelector('form');
const recordList = document.getElementById('recordList');


form.addEventListener('submit', function (event) {
	event.preventDefault();

	let group = document.getElementById('group').value;
	let pair = document.getElementById('pair').value;
	let topic = document.getElementById('topic').value;
	let students = [];
	let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
	for (let i = 0; i < checkboxes.length; i++) {
		students.push(checkboxes[i].value);
	}


	records.push({
		group: group,
		pair: pair,
		topic: topic,
		students: students
	});


	form.reset();

	updateRecordList();
});


function updateRecordList() {
	recordList.innerHTML = '';
	for (let i = 0; i < records.length; i++) {
		let record = records[i];
		let listItem = document.createElement('li');
		listItem.innerText = record.group + ' - ' + record.pair + ' - ' + record.topic + ' - ' + record.students.join(', ');
		recordList.appendChild(listItem);
	}
}
updateRecordList();
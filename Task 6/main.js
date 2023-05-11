const bookings = [];

function bookTicket(event) {
	event.preventDefault();
	let destination = document.getElementById("destination").value;
	let date = document.getElementById("date").value;
	let seats = [];
	let checkboxes = document.getElementsByName("seat");
	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			seats.push(parseInt(checkboxes[i].value));
		}
	}
	bookings.push({ destination: destination, date: date, seats: seats });
	updateBookings();
}

function updateBookings() {
	let tableBody = document.getElementById("bookings");
	tableBody.innerHTML = "";
	for (let i = 0; i < bookings.length; i++) {
		let row = document.createElement("tr");
		let destinationCell = document.createElement("td");
		destinationCell.textContent = bookings[i].destination;
		let dateCell = document.createElement("td");
		dateCell.textContent = bookings[i].date;
		let seatsCell = document.createElement("td");
		seatsCell.textContent = bookings[i].seats.join(", ");
		row.appendChild(destinationCell);
		row.appendChild(dateCell);
		row.appendChild(seatsCell);
		tableBody.appendChild(row);
	}
}

updateBookings();

const form = document.querySelector("form");
form.addEventListener("submit", bookTicket);
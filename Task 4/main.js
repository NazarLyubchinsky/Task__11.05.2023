let shopBooks = {};

const addToCart = book => {
	shopBooks[book] = (shopBooks[book] || 0) + 1;
	alert(`${book} в кошику`);
};


function submitOrder() {

	const book = document.getElementById("book").value;
	const name = document.getElementById("name").value;
	const deliveryDate = document.getElementById("delivery_date").value;
	const address = document.getElementById("address").value;
	const comment = document.getElementById("comment").value;

	const message = `${name}, замовлення ${book} буде доставлено ${deliveryDate} за адресою ${address}. Коментар: ${comment}`;

	alert(message);

	document.getElementById("ALL").value = "";
	shopBooks = {};
}
const messageList = document.querySelector("#message__form ul");
const form = document.querySelector("#add__message form");


form.addEventListener("submit", function (event) {

	event.preventDefault();
	const usernameInput = form.querySelector("#username");
	const messageInput = form.querySelector("#message");
	const li = document.createElement("li");
	const usernameSpan = document.createElement("span");
	const messageSpan = document.createElement("div");

	usernameSpan.textContent = "name: " + usernameInput.value + " ";
	messageSpan.textContent = "message:" + messageInput.value;
	li.appendChild(usernameSpan);
	li.appendChild(messageSpan);

	messageList.appendChild(li);


	form.reset();
});
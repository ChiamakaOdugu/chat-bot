document.addEventListener("DOMContentLoaded", function () {
const userInput = document.getElementById("user-input");
const chatContainer = document.querySelector(".top-content");
let botResponseIndex = 0; // Keep track of the index for the next bot response

userInput.addEventListener("keydown", function (event) {
if (event.key === "Enter") {
const userMessage = userInput.value;

displayMessage("user", userMessage);

const botMessage = getBotResponse(userMessage);

displayMessage("bot", botMessage);

userInput.value = "";
}
});

function displayMessage(sender, message) {
const messageContainer = document.createElement("div");
messageContainer.classList.add("message-container", sender);

const messageText = document.createElement("p");
messageText.textContent = message;

messageContainer.appendChild(messageText);
chatContainer.appendChild(messageContainer);

chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getBotResponse(userMessage) {
const responses = [
"👋 Hi there! I am a friendly chatbot",
"How may I help you?",
"No problem! Let me connect you to a customer support agent."
];

const currentResponse = responses[botResponseIndex];
botResponseIndex = (botResponseIndex + 1) % responses.length;

return " " + currentResponse;
}
});

const inputField = document.getElementById("input");
const chatlog = document.getElementById("chat-log");

function SendMessage() {
    let input = inputField.value.toLowerCase();

    let userMsg = document.createElement("p");
    userMsg.classList.add('user-msg')
    userMsg.textContent = input;

    chatlog.appendChild(userMsg);

    BotResponse(input);
}

function BotResponse(input) {
    if(input.includes("hello") || input.includes("hi")) {
        let botMsg = document.createElement("p");
        botMsg.classList.add('bot-msg')
        botMsg.textContent = "Hello! How are you?";

        chatlog.appendChild(botMsg);
    } else if(input.includes("cricket")) {
        let botMsg = document.createElement("p");
        botMsg.classList.add('bot-msg')
        botMsg.textContent = "Cricket is a very popular sport especially in south asian countries like india and pakistan!";

        chatlog.appendChild(botMsg);
    }
}
import { renderMessages } from "./render.js";

const messages = [];

const updateData = (message, data) => {
  const messages = [...data];

  const newMessage = { time: "6:00", message, source: "you" };
  messages.push(newMessage);

  return messages;
};

const sendMessage = (messages) => {
  const messageInput = document.querySelector("#message-input");
  const message = messageInput.value
  
  const updatedMessages = message === "" ? messages : updateData(message, messages);
  
  messageInput.value = "";

  const chatBox = document.querySelector(".chat-box");
  renderMessages(updatedMessages, chatBox);

  messageInput.focus();
};

const main = () => {
  const chatContainer = document.querySelector(".chat-container");

  chatContainer.addEventListener("click", (event) => {
    const targetElement = event.target.closest(".action")
    const target = targetElement?.name;

    if(target === "send") {
      sendMessage(messages);
    }
  });
};

window.onload = main;

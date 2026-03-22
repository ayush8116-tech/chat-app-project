import { renderMessages } from "./render.js";

const messages = [];

const updateData = (message, data) => {
  const messages = [...data];

  const newMessage = { time: "6:00", message, source: "you" };
  messages.push(newMessage);

  return messages;
};

const sendMessage = (messages) => {
  const message = document.querySelector("#message-input").value;
  const updatedMessages = updateData(message, messages);

  const chatBox = document.querySelector(".chat-box");
  renderMessages(updatedMessages, chatBox);
};

const main = () => {
  const chatContainer = document.querySelector(".chat-container");

  chatContainer.addEventListener("click", (event) => {
    const target = event.target.closest(".action")?.name;
    if(target === "send") {
      sendMessage(messages);
    }
  });
};

globalThis.onload = main;

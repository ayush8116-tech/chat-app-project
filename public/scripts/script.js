import { createFragment, ELEMENT } from "./generate_fragment.js";

const { ARTICLE } = ELEMENT;

const messages = [
  { time: "10:30", message: "hello 7", source: "sender" },
  { time: "10:30", message: "hello 6", source: "sender" },
  { time: "10:30", message: "hello 5", source: "sender" },
  { time: "10:30", message: "hello 4", source: "sender" },
  { time: "10:30", message: "hello 3", source: "sender" },
  { time: "10:30", message: "hello 2", source: "sender" },
  { time: "10:30", message: "hello 1", source: "sender" },
  { time: "10:30", message: "hello 0", source: "sender" },
  { time: "10:30", message: "hello ", source: "sender" },
  { time: "10:30", message: "hello ", source: "sender" },
  { time: "10:30", message: "hello ", source: "sender" },
  { time: "10:30", message: "hello ", source: "sender" },
  { time: "10:30", message: "hello ", source: "sender" },
  { time: "10:30", message: "hello ", source: "sender" },
  { time: "10:30", message: "hello ", source: "sender" },
  { time: "10:30", message: "hello ", source: "sender" },
  { time: "10:30", message: "hello ", source: "sender" },
];

const createMessageFragment = ({ message }) => {
  const messageStructure = [
    ARTICLE,
    { class: "message" },
    message,
  ];

  const fragment = createFragment(messageStructure);
  return fragment;
};

const renderMessages = (messages, container) => {
  const messageFragments = messages.map(createMessageFragment);
  
  container.prepend(...messageFragments);
}

const main = () => {
  const chatContainer = document.querySelector(".chat-container");
  
  chatContainer.addEventListener("click", (event) => {
    const target = event.target.closest(".action")?.name;
    console.log(target);
  })
  
  const chatBox = document.querySelector(".chat-box");
  renderMessages(messages, chatBox);
};

globalThis.onload = main;

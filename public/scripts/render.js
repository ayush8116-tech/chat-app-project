import { createFragment, ELEMENT } from "./generate_fragment.js";

const { ARTICLE } = ELEMENT;

const createMessageFragment = ({ message }) => {
  const messageStructure = [
    ARTICLE,
    { class: "message" },
    message,
  ];

  const fragment = createFragment(messageStructure);
  return fragment;
};

export const renderMessages = (messages, container) => {
  const messageFragments = messages.map(createMessageFragment);

  container.append(...messageFragments);
};

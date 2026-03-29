export const createFragment = ([tag, attributes, ...content]) => {
  const element = document.createElement(tag);

  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  if (content[0] && !Array.isArray(content[0])) { element.innerText = content[0].toString(); return element;  }

  const children = content.map(createFragment);
  element.append(...children);

  return element;
};

export const ELEMENT = {
  DIV: "div",
  INPUT: "input",
  BUTTON: "button",
  HEADER: "header",
  SECTION: "section",
  ARTICLE: "article",
};

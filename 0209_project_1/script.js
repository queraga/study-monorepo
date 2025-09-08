const data = [
  {
    id: 1,
    title: "1О компании",
    text: "text text 1О Kомпании text text",
  },
  {
    id: 2,
    title: "2О компании",
    text: "text text 2О Kомпании text text",
  },
  {
    id: 3,
    title: "3О компании",
    text: "text text 3О Kомпании text text",
  },
  {
    id: 4,
    title: "4О компании",
    text: "text text 4О Kомпании text text",
  },
  {
    id: 5,
    title: "5О компании",
    text: "text text 5О Kомпании text text",
  },
  {
    id: 6,
    title: "6О компании",
    text: "text text 6О Kомпании text text",
  },
];

const root = document.querySelector(".root");
const btnBox = document.createElement("div");

const textBox = document.createElement("div");
textBox.classList.add("textCss");

data.forEach((elem) => {
  const btn = document.createElement("button");
  btn.textContent = elem.title;

  btn.addEventListener("click", () => {
    textBox.textContent = elem.text;
  });
  btnBox.append(btn);
});

root.append(btnBox, textBox);

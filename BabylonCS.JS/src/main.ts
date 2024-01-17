import "./style.css";
import { changePersonName, getPerson, printPerson } from "../lib";

const main = () => {
  const paragraph = document.querySelector<HTMLParagraphElement>("p#msg");
  if (!paragraph) {
    return;
  }

  const person = getPerson("Alice");
  changePersonName(person, "Bob");
  paragraph.textContent = printPerson(person);
  console.log(person);
};

main();

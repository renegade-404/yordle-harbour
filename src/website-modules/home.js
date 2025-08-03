import { makeElements } from "./functions";
import chickpeaMain from "../imgs/chickpea-main.png"

export const homePage = function () {
  const content = document.querySelector("#content");

  // create parent elements
  const mainElements = [
    ["h2", "welcome-sign", "heading", "Welcome to Yordles' Harbour!"],
    ["div", "welcome-message", "messageBox"],
    ["div", "opening-hours", "hoursBox"],
  ];
  const createdMainElements = makeElements(mainElements, content);

  // append content to one of the main elements
  const welcomeElements = [
    ["p", "message", "", `Welcome to our little outpost! 🐾
    I've gathered some quests, but they're too tough for me alone... Will you help?
    Head to the missions tab and let's get started!`],
    ["img", "chickpea-main"]
  ];
  makeElements(welcomeElements, createdMainElements.messageBox);
  const mainImg = document.querySelector(".chickpea-main");
  mainImg.src = chickpeaMain;

  // append content to one of the main elements
  const hoursListItems = [
    ["li", "weekdays", "", "Monday ~ Friday: 6AM - 22PM"],
    ["li", "weekend", "", "Saturday: 10AM - 18PM (let me sleep 😿)"],
    ["li", "day-off", "", "Sunday: No work!!! (but please come to have a drink! 🍻)"],
  ];

  const hoursBoxElements = [
    ["h3", "hours-para", "", "Opening hours:"],
    ["ul", "hours-ul"]
]
  makeElements(hoursBoxElements, createdMainElements.hoursBox);
  makeElements(hoursListItems, createdMainElements.hoursBox.querySelector("ul"));

};
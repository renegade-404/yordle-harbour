import "./styles.css";
import { homePage } from "./website-modules/home";
import { missionBoard } from "./website-modules/missions";
import { contactPage } from "./website-modules/contact";

const runningPage = (function() {
    homePage();
    const pageModules = {
        home: homePage,
        missions: missionBoard,
        contact: contactPage,
    }

    const allButtons = document.querySelectorAll(".nav-button");

    allButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            let classList = e.target.classList;
            for (let key in pageModules) {
                if (classList.contains(key)) { 
                    const content = document.querySelector("#content");
                    if (key == "contact") content.style.flexDirection = "row";
                    else content.style.flexDirection = "column";
                    content.innerHTML = "";
                    pageModules[key]();
                } 
            }
            
        })
    })
})();



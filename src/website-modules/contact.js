import { makeElements } from "./functions";
import chickpeaContactImg from "../imgs/chickpea-contact.png";

export const contactPage = function() {
    const content = document.querySelector("#content");

    // create parent elements
    const mainElements = [
        ["div", "contact-info", "contactBox"],
        ["img", "chickpea-contact", "chickpeaContactImage"],
    ];

    const createdMainElements = makeElements(mainElements, content);

    createdMainElements.chickpeaContactImage.src = chickpeaContactImg;

    const contactInfoContent = [
        ["h2", "contact-header", "", "These are my contact info! Check'em out!"],
        ["p", "contact-para", "", `Whether you're lost in the brush, tracking an elusive beast, or just need someone
        to ward your inbox — I'm only a message away.

        📬 Send a raven (or, you know, an email) to:
         hunter@voidscallers.net
         
        🧭 Or drop a scroll at our base:
         Summoner's Path 9, Zaun Outskirts, Runeterra`]
    ]

    makeElements(contactInfoContent, createdMainElements.contactBox);
};

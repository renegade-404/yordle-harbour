import { makeElements, createMissions } from "./functions";
import raptorAlpha from "../imgs/raptor-alpha.png";
import ancientGromp from "../imgs/ancient-gromp.png";
import spiritWolf from "../imgs/spirit-wolf.png";
import vilebloom from "../imgs/vilebloom.png";

export const missionBoard = function() {
    const content = document.querySelector("#content");

    // create parent elements
    const mainElements = [
        ["p", "board-message", "boardMessageBox", `Psst… over here! 🫣
        This is where I keep all our secret missions!
        From finding shiny treasures ✨ to squaring off against sneaky rascals 😤— every challenge needs you.
        Pick a task, and let's show 'em what a dream team looks like!`],
        ["div", "missions-placeholder", "missionsPlaceholderBox"]
    ];
    const createdMainElements = makeElements(mainElements, content);

    const missions = [
  {
    title: "Wrath of the Crimson Raptor",
    description: "A mutated raptor brood is swarming the outer camps. Eliminate the alpha before the pack spreads beyond the jungle walls.",
    imgSrc: raptorAlpha,
  },
  {
    title: "Spirit of the Ancient Gromp",
    description: "An ancient Gromp has fused with wild magic and begun to poison the nearby river. Purify or perish.",
    imgSrc: ancientGromp,
  },
  {
    title: "Howl from the Hollow",
    description: "The wolves are no longer hunting for food — they're hunting for vengeance. Track the spectral pack leader and end the curse.",
    imgSrc: spiritWolf,
  },
  {
    title: "Brutal Bloom",
    description: "A plant beast born of Zyra's corruption is devouring anything that steps into its grove. Burn it to the ground.",
    imgSrc: vilebloom,
  },
  
];
    createMissions(createdMainElements.missionsPlaceholderBox, missions);
};

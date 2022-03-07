import { endAdventure } from "..";
import { askQuestion, clear, print } from "../console";
import { attendATeaParty } from "./3_tea_party";

const potions = ["Taller", "Smaller"];

export function chooseAPotion() {
  clear(true);
  print("You have two potions to choose from: ");
  potions.forEach((p, i) => print(`   ${i} - this potion makes you ${p}`));
  askQuestion("Which number potion will you choose?", takeAPotion);
}

export function takeAPotion(potion: string): void {
  clear(true);
  const selection = parseInt(potion);
  if (isNaN(selection)) {
    print(`😮`);
    print(`That's not a number 😭`);
    return endAdventure();
  }

  if (selection < 0 || selection > potions.length - 1) {
    print(`😮`);
    print(`${selection} is an invalid number 😭`);
    return endAdventure();
  }

  if (potions[selection] === "Smaller") {
    print(
      `🥳 You can now fit through the door. There is the sound of a party in the distance... 🥳 `
    );
    return askQuestion("Press ENTER to continue! ", attendATeaParty);
  } else {
    print(`You're now even bigger with no hope of fitting through the door!`);
    return endAdventure();
  }
}

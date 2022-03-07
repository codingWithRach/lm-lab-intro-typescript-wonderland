import { endAdventure } from "..";
import { askQuestion, clear, print } from "../console";
import { attendATeaParty } from "./3_tea_party";

export function takeAPotion() {
  clear(true);
  print("You have two potions to choose from.  Which one will you choose?");

  const correctPotion = false;

  if (correctPotion) {
    print(
      `🥳 You can now fit through the door. There is the sound of a party in the distance... 🥳 `
    );
    return askQuestion("Press ENTER to continue! ", attendATeaParty);
  } else {
    print(`You're now even bigger with no hope of fitting through the door!`);
    return endAdventure();
  }
}

import { endAdventure } from "..";
import { askQuestion, clear, print } from "../console";
import { takeAPotion } from "./2a_potion";

const expressions = [
  "☹ Frown ☹",
  "🙂 Smile 🙂",
  "😁 Grin 😁",
  "😶 Blank Face 😶",
  "😡 Angry Face 😡",
] as const;
type FacialExpression = typeof expressions[number];

class CheshireCat {
  name: string = "The Cheshire Cat";
  expression: FacialExpression = expressions[0];
}

export function meetTheCheshireCat(): void {
  clear(true);

  const theCat = new CheshireCat();
  theCat.expression = "😁 Grin 😁";

  print(`You can see a wide ${theCat.expression} hovering in the air.`);

  if (theCat.expression === "😁 Grin 😁") {
    print(
      `The cat allows you to continue onwards. But you can't fit through the door - first you need to take a potion...`
    );
    return askQuestion("Press ENTER to continue! ", takeAPotion);
  } else {
    print(`😱 The cat will not allow you to pass. 😱 `);
    return endAdventure();
  }
}

import { Direction, vecteurDirection } from "../episode2/enums";

export function deplacer(
  point: [number, number],
  direction: Direction
): [number, number] {
  const [dx, dy] = vecteurDirection(direction);
  console.log(`Déplacement de [${point}] vers ${Direction[direction]}`);
  return [point[0] + dx, point[1] + dy];
}

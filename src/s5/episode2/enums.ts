export enum Direction {
  "Nord",
  "Sud",
  "Est",
  "Ouest",
}

export function vecteurDirection(direction: Direction) {
  switch (direction) {
    case Direction.Nord:
      console.log("Nord:", [0, 1]);
      return [0, 1];
    case Direction.Sud:
      console.log("Sud:", [0, -1]);
      return [0, -1];
    case Direction.Est:
      console.log("Est:", [1, 0]);
      return [1, 0];
    case Direction.Ouest:
      console.log("Ouest:", [-1, 0]);
      return [-1, 0];
  }
}

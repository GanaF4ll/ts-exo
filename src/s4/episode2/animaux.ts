import { Animal, IAnimal } from "../episode1/animaux";

export class Chien extends Animal {
  public seDeplacer(): void {
    console.log(`Le chien ${this.nom} court`);
  }
}

export class Chat extends Animal {
  public seDeplacer(): void {
    console.log(`Le chat ${this.nom} marche`);
  }
}

export function faireSeDeplacer(animaux: IAnimal[]) {
  animaux.forEach((animal) => {
    animal.seDeplacer();
  });
}

export const animaux = [
  new Chien("Rex"),
  new Chat("Felix"),
  new Chien("Medor"),
  new Chat("Garfield"),
];

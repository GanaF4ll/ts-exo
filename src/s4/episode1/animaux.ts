export interface IAnimal {
  nom: string;
  seDeplacer(): void;
}

export class Animal implements IAnimal {
  public nom: string;
  constructor(nom: string) {
    this.nom = nom;
  }
  public seDeplacer(): void {
    console.log(` L'animal ${this.nom} se déplace`);
  }
}

export const loup = new Animal("loup");

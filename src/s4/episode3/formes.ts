export abstract class Forme {
  calculerSurface(): number {
    return 0;
  }
}

export class Rectangle extends Forme {
  largeur: number;
  hauteur: number;

  constructor(largeur: number, hauteur: number) {
    super();
    this.largeur = largeur;
    this.hauteur = hauteur;
  }

  calculerSurface(): number {
    console.log("Surface rectangle:", this.largeur * this.hauteur);
    return this.largeur * this.hauteur;
  }
}

export class Cercle extends Forme {
  rayon: number;

  constructor(rayon: number) {
    super();
    this.rayon = rayon;
  }

  calculerSurface(): number {
    console.log("Surface cercle:", Math.PI * this.rayon * this.rayon);
    return Math.PI * this.rayon * this.rayon;
  }
}

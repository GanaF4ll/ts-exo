export class Rectangle {
  public largeur: number;
  public hauteur: number;

  constructor(largeur: number, hauteur: number) {
    this.largeur = largeur;
    this.hauteur = hauteur;
  }

  calculerSurface(): number {
    return this.largeur * this.hauteur;
  }
}
export class Cercle {
  public rayon: number;

  constructor(rayon: number) {
    this.rayon = rayon;
  }

  calculerSurface(): number {
    return Math.PI * this.rayon ** 2;
  }
}

export function afficherSurface(forme: Rectangle | Cercle) {
  if (forme instanceof Rectangle) {
    console.log(forme.calculerSurface());
  }
  if (forme instanceof Cercle) {
    console.log(forme.calculerSurface());
  }
}

export const rectangle1 = new Rectangle(10, 20);
export const cercle1 = new Cercle(10);

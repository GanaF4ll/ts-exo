"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cercle = exports.Rectangle = exports.Forme = void 0;
class Forme {
    calculerSurface() {
        return 0;
    }
}
exports.Forme = Forme;
class Rectangle extends Forme {
    constructor(largeur, hauteur) {
        super();
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        console.log("Surface rectangle:", this.largeur * this.hauteur);
        return this.largeur * this.hauteur;
    }
}
exports.Rectangle = Rectangle;
class Cercle extends Forme {
    constructor(rayon) {
        super();
        this.rayon = rayon;
    }
    calculerSurface() {
        console.log("Surface cercle:", Math.PI * this.rayon * this.rayon);
        return Math.PI * this.rayon * this.rayon;
    }
}
exports.Cercle = Cercle;

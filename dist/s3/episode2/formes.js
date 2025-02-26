"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cercle1 = exports.rectangle1 = exports.Cercle = exports.Rectangle = void 0;
exports.afficherSurface = afficherSurface;
class Rectangle {
    constructor(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return this.largeur * this.hauteur;
    }
}
exports.Rectangle = Rectangle;
class Cercle {
    constructor(rayon) {
        this.rayon = rayon;
    }
    calculerSurface() {
        return Math.PI * Math.pow(this.rayon, 2);
    }
}
exports.Cercle = Cercle;
function afficherSurface(forme) {
    if (forme instanceof Rectangle) {
        console.log("surface rectangle:", forme.calculerSurface());
    }
    if (forme instanceof Cercle) {
        console.log("surface cercle:", forme.calculerSurface());
    }
}
exports.rectangle1 = new Rectangle(10, 20);
exports.cercle1 = new Cercle(10);

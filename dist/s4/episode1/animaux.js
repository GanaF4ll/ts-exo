"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loup = exports.Animal = void 0;
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    seDeplacer() {
        console.log(` L'animal ${this.nom} se déplace`);
    }
}
exports.Animal = Animal;
exports.loup = new Animal("loup");

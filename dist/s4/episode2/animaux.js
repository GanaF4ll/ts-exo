"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animaux = exports.Chat = exports.Chien = void 0;
exports.faireSeDeplacer = faireSeDeplacer;
const animaux_1 = require("../episode1/animaux");
class Chien extends animaux_1.Animal {
    seDeplacer() {
        console.log(`Le chien ${this.nom} court`);
    }
}
exports.Chien = Chien;
class Chat extends animaux_1.Animal {
    seDeplacer() {
        console.log(`Le chat ${this.nom} marche`);
    }
}
exports.Chat = Chat;
function faireSeDeplacer(animaux) {
    animaux.forEach((animal) => {
        animal.seDeplacer();
    });
}
exports.animaux = [
    new Chien("Rex"),
    new Chat("Felix"),
    new Chien("Medor"),
    new Chat("Garfield"),
];

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personne1 = exports.afficherPersonne = void 0;
const afficherPersonne = (personne) => {
    const { nom, age } = personne;
    console.log(`Bonjour, je m'appelle ${nom}, et j'ai ${age} ans `);
};
exports.afficherPersonne = afficherPersonne;
exports.personne1 = { nom: "Yuji", age: 16 };

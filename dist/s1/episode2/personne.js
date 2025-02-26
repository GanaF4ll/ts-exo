"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afficherPersonneAvancee = exports.personne3 = exports.personne2 = void 0;
exports.personne2 = {
    nom: "Peter",
    age: 24,
    id: 1,
    adresse: {
        rue: "Rue des Lilas",
        ville: "Saint-Denis",
    },
};
exports.personne3 = {
    nom: "John",
    age: 30,
    id: 2,
};
const afficherPersonneAvancee = (personne) => {
    const { nom, age, id, adresse } = personne;
    if (adresse) {
        console.log(`Bonjour, je m'appelle ${nom} (ID: ${id}), j'ai ${age} ans et j'habite au ${adresse.rue}, ${adresse.ville}.`);
    }
    else {
        console.log(`Bonjour, je m'appelle ${nom} (ID: ${id}), j'ai ${age} ans.`);
    }
};
exports.afficherPersonneAvancee = afficherPersonneAvancee;

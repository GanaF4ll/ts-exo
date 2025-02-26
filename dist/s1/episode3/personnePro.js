"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client1 = exports.employe1 = void 0;
exports.afficherInfoProfessionnelle = afficherInfoProfessionnelle;
function afficherInfoProfessionnelle(personne) {
    if ("poste" in personne) {
        console.log(`Employé: ${personne.nom}, travaille comme ${personne.poste}`);
    }
    if ("entreprise" in personne) {
        {
            console.log(`Client: ${personne.nom} est associé à l'entreprise ${personne.entreprise}`);
        }
    }
}
exports.employe1 = {
    nom: "Babidi",
    poste: "Sorcier",
};
exports.client1 = {
    nom: "Itachi",
    entreprise: "Akatsuki",
};

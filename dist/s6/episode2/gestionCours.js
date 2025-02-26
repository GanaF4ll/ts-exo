"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestionCours = exports.NiveauCours = void 0;
var NiveauCours;
(function (NiveauCours) {
    NiveauCours[NiveauCours["Debutant"] = 0] = "Debutant";
    NiveauCours[NiveauCours["Intermediaire"] = 1] = "Intermediaire";
    NiveauCours[NiveauCours["Avance"] = 2] = "Avance";
})(NiveauCours || (exports.NiveauCours = NiveauCours = {}));
class GestionCours {
    constructor(etudiant, cours) {
        this.inscriptions = [];
        this.etudiants = etudiant;
        this.cours = cours;
    }
    inscrireEtudiant(coursCode, etudiant) {
        // this.etudiants.push(etudiant);
        const existingCours = this.cours.find((c) => c.code === coursCode);
        if (!existingCours) {
            throw new Error("Cours inexistant");
        }
        this.inscriptions.push({ etudiantId: etudiant.id, coursCode: coursCode });
        console.log(`${etudiant.nom} inscrit au cours ${existingCours.titre}`);
    }
    afficherInscriptions() {
        console.log("inscriptions:", this.inscriptions);
        return this.inscriptions;
    }
}
exports.GestionCours = GestionCours;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gestionCours = void 0;
const mon_module_1 = require("mon-module");
const gestionCours_1 = require("./s6/episode2/gestionCours");
const students = [
    { id: 1, nom: "Alice", niveau: "Licence" },
    { id: 2, nom: "Bob", niveau: "Master" },
    { id: 3, nom: "Charlie", niveau: "Licence" },
];
const courses = [
    { code: "MATH101", titre: "Mathématiques", niveau: gestionCours_1.NiveauCours.Debutant },
    { code: "INFO101", titre: "Informatique", niveau: gestionCours_1.NiveauCours.Intermediaire },
    { code: "PHY101", titre: "Physique", niveau: gestionCours_1.NiveauCours.Avance },
];
exports.gestionCours = new gestionCours_1.GestionCours(students, courses);
exports.gestionCours.inscrireEtudiant("MATH101", students[0]);
exports.gestionCours.inscrireEtudiant("INFO101", students[1]);
exports.gestionCours.inscrireEtudiant("PHY101", students[2]);
exports.gestionCours.inscriptions.forEach((i) => {
    (0, mon_module_1.logger)(`${i.etudiantId} ${i.coursCode}`);
    (0, mon_module_1.alerter)(`${i.etudiantId} ${i.coursCode}`);
});

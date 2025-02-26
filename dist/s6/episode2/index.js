"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mon_module_1 = require("mon-module");
const gestionCours_1 = require("./gestionCours");
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
const gestionCours = new gestionCours_1.GestionCours(students, courses);
gestionCours.inscrireEtudiant("MATH101", students[0]);
gestionCours.inscrireEtudiant("INFO101", students[1]);
gestionCours.inscrireEtudiant("PHY101", students[2]);
(0, mon_module_1.logger)(`${gestionCours.afficherInscriptions()}`);
(0, mon_module_1.alerter)(`${gestionCours.afficherInscriptions()}`);

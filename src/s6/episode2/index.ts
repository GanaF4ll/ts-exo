import { alerter, logger } from "mon-module";
import { Cours, Etudiant, GestionCours, NiveauCours } from "./gestionCours";

const students: Etudiant[] = [
  { id: 1, nom: "Alice", niveau: "Licence" },
  { id: 2, nom: "Bob", niveau: "Master" },
  { id: 3, nom: "Charlie", niveau: "Licence" },
];
const courses: Cours[] = [
  { code: "MATH101", titre: "Mathématiques", niveau: NiveauCours.Debutant },
  { code: "INFO101", titre: "Informatique", niveau: NiveauCours.Intermediaire },
  { code: "PHY101", titre: "Physique", niveau: NiveauCours.Avance },
];

const gestionCours = new GestionCours(students, courses);
gestionCours.inscrireEtudiant("MATH101", students[0]);
gestionCours.inscrireEtudiant("INFO101", students[1]);
gestionCours.inscrireEtudiant("PHY101", students[2]);

logger(`${gestionCours.afficherInscriptions()}`);
alerter(`${gestionCours.afficherInscriptions()}`);

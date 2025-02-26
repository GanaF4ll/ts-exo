export interface Etudiant {
  id: number;
  nom: string;
  niveau: string; // ex: "Licence", "Master"
}
export interface Cours {
  code: string;
  titre: string;
  niveau: NiveauCours; // Utilisation d'un enum
}
export interface Professeur {
  id: number;
  nom: string;
  matiere: string;
}
export enum NiveauCours {
  Debutant,
  Intermediaire,
  Avance,
}

export interface InscritptionsCours {
  etudiantId: number;
  coursCode: string;
}

export class GestionCours {
  etudiants: Etudiant[];
  cours: Cours[];
  inscriptions: InscritptionsCours[] = [];

  constructor(etudiant: Etudiant[], cours: Cours[]) {
    this.etudiants = etudiant;
    this.cours = cours;
  }

  inscrireEtudiant(coursCode: string, etudiant: Etudiant): void {
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

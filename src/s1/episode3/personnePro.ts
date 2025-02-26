import { Personne } from "./../episode1/personne";
export interface Employe {
  nom: string;
  poste: string;
}

export interface Client {
  nom: string;
  entreprise: string;
}

export type PersonnePro = Employe | Client;

export function afficherInfoProfessionnelle(personne: PersonnePro) {
  if ("poste" in personne) {
    console.log(`Employé: ${personne.nom}, travaille comme ${personne.poste}`);
  }
  if ("entreprise" in personne) {
    {
      console.log(
        `Client: ${personne.nom} est associé à l'entreprise ${personne.entreprise}`
      );
    }
  }
}

export const employe1: PersonnePro = {
  nom: "Babidi",
  poste: "Sorcier",
};

export const client1: PersonnePro = {
  nom: "Itachi",
  entreprise: "Akatsuki",
};

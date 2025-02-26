import { Personne } from "../episode1/personne";

export interface PersonneS2 extends Personne {
  readonly id: number;
  adresse?: {
    rue: string;
    ville: string;
  };
}

export const personne2: PersonneS2 = {
  nom: "Peter",
  age: 24,
  id: 1,
  adresse: {
    rue: "Rue des Lilas",
    ville: "Saint-Denis",
  },
};

export const personne3: PersonneS2 = {
  nom: "John",
  age: 30,
  id: 2,
};

export const afficherPersonneAvancee = (personne: PersonneS2) => {
  const { nom, age, id, adresse } = personne;

  if (adresse) {
    console.log(
      `Bonjour, je m'appelle ${nom} (ID: ${id}), j'ai ${age} ans et j'habite au ${adresse.rue}, ${adresse.ville}.`
    );
  } else {
    console.log(`Bonjour, je m'appelle ${nom} (ID: ${id}), j'ai ${age} ans.`);
  }
};

export interface Personne {
  nom: string;
  age: number;
}

export const afficherPersonne = (personne: Personne) => {
  const { nom, age } = personne;
  console.log(`Bonjour, je m'appelle ${nom}, et j'ai ${age} ans `);
};

export const personne1: Personne = { nom: "Yuji", age: 16 };

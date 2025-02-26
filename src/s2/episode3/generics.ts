export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  console.log(obj[key]);
  return obj[key];
}

interface Voiture {
  marque: string;
  modele: string;
  annee: number;
}

export const maVoiture: Voiture = {
  marque: "Peugeot",
  modele: "208",
  annee: 2019,
};

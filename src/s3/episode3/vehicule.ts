export interface Vehicule {
  marque: string;
  annee: number;
}

export function isVehicule(obj: any) {
  if (obj.marque && obj.annee) {
    console.log("C'est un véhicule", true);
    return true;
  } else {
    console.log("Ce n'est pas un véhicule", false);
    return false;
  }
}

export const vehiculeValide: Vehicule = {
  marque: "Renault",
  annee: 2010,
};

export const vehiculeInvalide = {
  marque: "Renault",
};

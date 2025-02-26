interface Lengthwise {
  length: number;
}

export function premierElementS2<T extends Lengthwise>(tableau: T[]) {
  console.log("longueur du tableau:", tableau.length);
  console.log("1er élément:", tableau[0]);
  return tableau[0];
}

export const numbers: number[] = [1, 2, 3];
export const dbz: string[] = ["Goku", "Vegeta", "Gohan"];
export const emptyArray: string[] = [];

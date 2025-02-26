export function traiterValeur(param: string | number) {
  if (typeof param === "string") {
    console.log("longeur du param:", param.length);
  } else if (typeof param === "number") {
    console.log(param * 2);
  }
}

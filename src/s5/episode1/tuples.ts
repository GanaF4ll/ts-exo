export function creerScore(joueur: string, score: number): [string, number] {
  return [joueur, score];
}

export function afficherScore(score: [string, number]) {
  console.log(`Le joueur ${score[0]} a un score de ${score[1]}.`);
}

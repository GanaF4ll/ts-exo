"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creerScore = creerScore;
exports.afficherScore = afficherScore;
function creerScore(joueur, score) {
    return [joueur, score];
}
function afficherScore(score) {
    console.log(`Le joueur ${score[0]} a un score de ${score[1]}.`);
}

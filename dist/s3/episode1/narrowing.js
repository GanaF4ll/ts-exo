"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traiterValeur = traiterValeur;
function traiterValeur(param) {
    if (typeof param === "string") {
        console.log("longeur du param:", param.length);
    }
    else if (typeof param === "number") {
        console.log(param * 2);
    }
}

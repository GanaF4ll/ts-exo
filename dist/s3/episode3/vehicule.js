"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehiculeInvalide = exports.vehiculeValide = void 0;
exports.isVehicule = isVehicule;
function isVehicule(obj) {
    if (obj.marque && obj.annee) {
        console.log("C'est un véhicule", true);
        return true;
    }
    else {
        console.log("Ce n'est pas un véhicule", false);
        return false;
    }
}
exports.vehiculeValide = {
    marque: "Renault",
    annee: 2010,
};
exports.vehiculeInvalide = {
    marque: "Renault",
};

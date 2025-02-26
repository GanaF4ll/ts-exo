"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maVoiture = void 0;
exports.getProperty = getProperty;
function getProperty(obj, key) {
    console.log(obj[key]);
    return obj[key];
}
exports.maVoiture = {
    marque: "Peugeot",
    modele: "208",
    annee: 2019,
};

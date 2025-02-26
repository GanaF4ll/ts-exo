"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deplacer = deplacer;
const enums_1 = require("../episode2/enums");
function deplacer(point, direction) {
    const [dx, dy] = (0, enums_1.vecteurDirection)(direction);
    console.log(`Déplacement de [${point}] vers ${enums_1.Direction[direction]}`);
    return [point[0] + dx, point[1] + dy];
}

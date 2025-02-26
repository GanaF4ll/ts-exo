"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = void 0;
exports.vecteurDirection = vecteurDirection;
var Direction;
(function (Direction) {
    Direction[Direction["Nord"] = 0] = "Nord";
    Direction[Direction["Sud"] = 1] = "Sud";
    Direction[Direction["Est"] = 2] = "Est";
    Direction[Direction["Ouest"] = 3] = "Ouest";
})(Direction || (exports.Direction = Direction = {}));
function vecteurDirection(direction) {
    switch (direction) {
        case Direction.Nord:
            console.log("Nord:", [0, 1]);
            return [0, 1];
        case Direction.Sud:
            console.log("Sud:", [0, -1]);
            return [0, -1];
        case Direction.Est:
            console.log("Est:", [1, 0]);
            return [1, 0];
        case Direction.Ouest:
            console.log("Ouest:", [-1, 0]);
            return [-1, 0];
    }
}

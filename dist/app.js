"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tuples_1 = require("./s5/episode1/tuples");
const enums_1 = require("./s5/episode2/enums");
const enums_2 = require("./s5/episode3/enums");
// S4 episode 1
const piccolo = (0, tuples_1.creerScore)("Piccolo", 10);
const buu = (0, tuples_1.creerScore)("Buu", 5);
(0, tuples_1.afficherScore)(piccolo);
(0, tuples_1.afficherScore)(buu);
// S4 episode 2
(0, enums_1.vecteurDirection)(enums_1.Direction.Nord);
(0, enums_1.vecteurDirection)(enums_1.Direction.Sud);
(0, enums_1.vecteurDirection)(enums_1.Direction.Est);
(0, enums_1.vecteurDirection)(enums_1.Direction.Ouest);
// S4 episode 3
(0, enums_2.deplacer)([5, 5], enums_1.Direction.Nord);

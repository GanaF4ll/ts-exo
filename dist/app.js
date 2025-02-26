"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generics_1 = require("./s2/episode1/generics");
const generics_2 = require("./s2/episode2/generics");
const generics_3 = require("./s2/episode3/generics");
// s2 episode 1
(0, generics_1.premierElement)(generics_1.numbers);
(0, generics_1.premierElement)(generics_1.dbz);
// s2 episode 2
(0, generics_2.premierElementS2)(generics_1.dbz);
(0, generics_2.premierElementS2)(generics_2.emptyArray);
// s2 episode 3
(0, generics_3.getProperty)(generics_3.maVoiture, "marque");
(0, generics_3.getProperty)(generics_3.maVoiture, "modele");

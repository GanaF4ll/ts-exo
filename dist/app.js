"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const narrowing_1 = require("./s3/episode1/narrowing");
const formes_1 = require("./s3/episode2/formes");
const vehicule_1 = require("./s3/episode3/vehicule");
// s3 episode 1
(0, narrowing_1.traiterValeur)("hello");
(0, narrowing_1.traiterValeur)(42);
// s3 episode 2
(0, formes_1.afficherSurface)(formes_1.rectangle1);
(0, formes_1.afficherSurface)(formes_1.cercle1);
(0, vehicule_1.isVehicule)(vehicule_1.vehiculeValide);
(0, vehicule_1.isVehicule)(vehicule_1.vehiculeInvalide);

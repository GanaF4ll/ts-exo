import { traiterValeur } from "./s3/episode1/narrowing";
import { afficherSurface, cercle1, rectangle1 } from "./s3/episode2/formes";
import {
  isVehicule,
  vehiculeInvalide,
  vehiculeValide,
} from "./s3/episode3/vehicule";

// s3 episode 1
traiterValeur("hello");
traiterValeur(42);

// s3 episode 2
afficherSurface(rectangle1);
afficherSurface(cercle1);

isVehicule(vehiculeValide);
isVehicule(vehiculeInvalide);

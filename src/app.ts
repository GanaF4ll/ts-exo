import { afficherScore, creerScore } from "./s5/episode1/tuples";
import { Direction, vecteurDirection } from "./s5/episode2/enums";

// S4 episode 1
const piccolo = creerScore("Piccolo", 10);
const buu = creerScore("Buu", 5);

afficherScore(piccolo);
afficherScore(buu);

// S4 episode 2
vecteurDirection(Direction.Nord);
vecteurDirection(Direction.Sud);
vecteurDirection(Direction.Est);
vecteurDirection(Direction.Ouest);

// S4 episode 3

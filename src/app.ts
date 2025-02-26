import { loup } from "./s4/episode1/animaux";
import { animaux, faireSeDeplacer } from "./s4/episode2/animaux";
import { Cercle, Rectangle } from "./s4/episode3/formes";
// s4 episode 1
loup.seDeplacer();

// s4 episode 2
faireSeDeplacer(animaux);

// s4 episode 3
const rectangleS4E3 = new Rectangle(24, 20);
rectangleS4E3.calculerSurface();

const cercleS4E3 = new Cercle(24);
cercleS4E3.calculerSurface();

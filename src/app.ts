import { dbz, numbers, premierElement } from "./s2/episode1/generics";
import { emptyArray, premierElementS2 } from "./s2/episode2/generics";
import { getProperty, maVoiture } from "./s2/episode3/generics";

// s2 episode 1
premierElement(numbers);
premierElement(dbz);

// s2 episode 2
premierElementS2(dbz);
premierElementS2(emptyArray);

// s2 episode 3
getProperty(maVoiture, "marque");
getProperty(maVoiture, "modele");

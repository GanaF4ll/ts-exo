import { afficherPersonne, personne1 } from "./s1/episode1/personne";
import {
  afficherPersonneAvancee,
  personne2,
  personne3,
} from "./s1/episode2/personne";
import {
  afficherInfoProfessionnelle,
  client1,
  employe1,
} from "./s1/episode3/personnePro";

// s1 episode 1
afficherPersonne(personne1);

// s1 episode 2
afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);

// s1 episode 3
afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);

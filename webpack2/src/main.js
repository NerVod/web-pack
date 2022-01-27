'use strict';

import { dUpdate } from './affichage.js'
import people from './donnees.js'
import { pUpdate } from './traitement.js'

if (dUpdate) {
  dUpdate(people, pUpdate);
} else {
  console.error('Aucune fonction dUpdate trouvée dans l\'objet globalContextObject');
};
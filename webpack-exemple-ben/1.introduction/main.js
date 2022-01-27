'use strict';

// Si l'objet globalContextObject existe déjà, on lui assigne sa valeur existante, sinon on l'initialise à vide...
var globalContextObject = globalContextObject || {};

(function(arg) {
  console.info('Valeur de arg dans main.js : ', arg);
  if (arg.dUpdate) {
    arg.dUpdate();
  } else {
    console.error('Aucune fonction dUpdate trouvée dans l\'objet globalContextObject');
  };
})(globalContextObject);
// On exécute notre IIFE en lui passant l'objet que l'on a créé, ou qui existe déjà, dans le contexte global...
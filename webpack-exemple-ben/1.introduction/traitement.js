'use strict';

// Si l'objet globalContextObject existe déjà, on lui assigne sa valeur existante, sinon on l'initialise à vide...
var globalContextObject = globalContextObject || {};

(function(arg) {
  console.info('Valeur de arg dans traitement.js : ', arg);
  function peopleUpdate(updateArray) {
    updateArray.map(function(element) {
      element.isPresent = true;
      element.lastName = element.lastName.toUpperCase();
      return element;
    })
  };

  globalContextObject.pUpdate = peopleUpdate;

})(globalContextObject);
// On exécute notre IIFE en lui passant l'objet que l'on a créé, ou qui existe déjà, dans le contexte global...
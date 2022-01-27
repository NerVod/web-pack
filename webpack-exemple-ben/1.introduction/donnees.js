'use strict';

// IIFE : Immediatly Invoked Function Expression

// Si l'objet globalContextObject existe déjà, on lui assigne sa valeur existante, sinon on l'initialise à vide...
var globalContextObject = globalContextObject || {};

(function(arg) {
  console.info('Valeur de arg dans donnees.js : ', arg);
  var people = [
    {
      firstName: 'Klm',
      lastName: 'Morvan'
    },
    {
      firstName: 'NerVod',
      lastName: 'Jeannerot'
    },
    {
      firstName: 'Anne',
      lastName: 'Biniou'
    },
    {
      firstName: 'Lidobix',
      lastName: 'Whatever'
    },
  ];

  globalContextObject.people = people;

})(globalContextObject);
// On exécute notre IIFE en lui passant l'objet que l'on a créé, ou qui existe déjà, dans le contexte global...
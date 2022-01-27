'use strict';

// Si l'objet globalContextObject existe déjà, on lui assigne sa valeur existante, sinon on l'initialise à vide...
var globalContextObject = globalContextObject || {};

(function(arg) {
  console.info('Valeur de arg dans affichage.js : ', arg);
  function displayUpdate() {
    // console.log('window.document ? ', window.document.addEventListener)
    // window.document.addEventListener("DOMContentLoaded", function() {
    // console.log('FUNCTION displayUpdate invoked');
      // console.log('étape 1');
      var oneDiv = window.document.createElement('div');
      // console.log('étape 2');
      arg.pUpdate(arg.people);
      // console.log('étape 3');
      arg.people.forEach(function(onePerson) {
        // console.log('étape 4+');
        var oneP = window.document.createElement('p');
        oneP.innerText = onePerson.firstName + ' ' + onePerson.lastName + ' est présent ? ' + onePerson.isPresent;
        oneDiv.appendChild(oneP);
      });
      // console.log('étape 5');
      window.document.body.appendChild(oneDiv);
      // console.log('étape 6');
    // });
  };
  
  globalContextObject.dUpdate = displayUpdate;
  // console.log('étape 7');

})(globalContextObject);
// On exécute notre IIFE en lui passant l'objet que l'on a créé, ou qui existe déjà, dans le contexte global...
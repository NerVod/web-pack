'use strict';

function displayUpdate(people, pUpdate) {

  window.document.addEventListener("DOMContentLoaded", function () {

    console.log('étape 1');
    var oneDiv = window.document.createElement('div');
    console.log('étape 2');
    pUpdate(people);
    console.log('étape 3');
    people.forEach(function (onePerson) {
    var oneP = window.document.createElement('p');
    oneP.innerText = onePerson.firstName + ' ' + onePerson.lastName + ' est présent ? ' + onePerson.isPresent;
    oneDiv.appendChild(oneP);
    });
    console.log('étape 4');
    window.document.body.appendChild(oneDiv);
    console.log('étape 5');
  });
};

export { displayUpdate as dUpdate };




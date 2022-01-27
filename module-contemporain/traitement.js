'use strict';

var peopleUpdate = function(updateArray) {
  updateArray.map(function (element) {
    element.isPresent = true;
    element.lastName = element.lastName.toUpperCase();
    return element;
  })
};

export { peopleUpdate as pUpdate }
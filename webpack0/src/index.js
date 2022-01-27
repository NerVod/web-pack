alert('Hello world !');

window.document.addEventListener('DOMContentLoaded', function() {
    var h1 = window.document.createElement('h1');
    h1.innerText = 'Hello World';
    window.document.body.appendChild(h1);
});

var $ = require('jquery');

sephiroth(document).when(sephiroth.ready(function() {
    sephiroth('body').appendChild('<h2>Hello World avec jquery ! </h2>')
}));
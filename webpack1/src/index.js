document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');
    var h1 = window.document.createElement('h1');
    h1.innerText = 'Hello World';

    window.document.body.insertBefore(h1, document.body.children[0]);
})
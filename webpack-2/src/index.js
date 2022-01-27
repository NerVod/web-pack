const message =() => {
    console.log(`Webpack c'est galère`)
};

const bouilloireES6 = {
    bruitQuandCaBout: `PShhiit`,
    chauffer() {
        console.log(`L'eau commence à chauffer ..`);
        setTimeout(() => {
            console.log(`L'eau est à 100°`);
            alert(`Bouilloire ES6 dit : ${this.bruitQuandCaBout}`)
        }, 3000);
    } 
};

document.addEventListener(`DOMContentLoaded`, () => {
    console.log(`DOMContentLoaded event fired!`);
    const h1 = document.createElement(`h1`);
    h1.innerText = `Hello World!`;
    const start = document.querySelector(`button[type='button']`);
  
    //document.body.appendChild(h1);
  
    document.body.insertBefore(h1, document.body.children[0]);
    start.addEventListener('click', () => {
      bouilloireES6.chauffer();
    });
  
    message();
  });
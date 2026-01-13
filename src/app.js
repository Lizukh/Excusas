import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  function excusa() {

    let time = 0; 

    let who = ['Un tio lejano', 'Papá Noel', 'Un fantasma', 'El perro (que no tengo)'];
    let action = ['hackeó', 'desintegró', 'se comió', 'vomitó'];
    let what = ['mi cuenta de Netflix', 'mi casa', 'mi traje'];
    let when = [
      'antes de la boda :,(',

      'y me despertó de la siesta >:(',

      'en la pijamada :(',

      'en la mañana!',
      'antes de la reunion :c'
    ];

    let wo = Math.floor(Math.random() * who.length);
    let an = Math.floor(Math.random() * action.length);
    let wt = Math.floor(Math.random() * what.length);
    let wn = Math.floor(Math.random() * when.length);


    let word = `${who[wo]} ${action[an]} ${what[wt]} ${when[wn]}`;
    document.getElementById("excusa").innerHTML = word;

 
    document.getElementById("who").innerHTML = who[wo];
    document.getElementById("action").innerHTML = action[an];
    document.getElementById("what").innerHTML = what[wt];
    document.getElementById("when").innerHTML = when[wn];

    time++;
  
  }

   setInterval(excusa, 3000);
  excusa();
};

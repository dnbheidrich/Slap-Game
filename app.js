var health = 100;
var hits = 0;

let healthElem = document.getElementById("health")
let hitsElem = document.getElementById("hits")


function slap(){
  health--;
  hits++
 
 update()
}

function punch(){
  health -=5;
  hits++
 
  update()
}

function kick(){
  health -= 10;
  hits++
  
  update()
}

function update(){
  if(health < 0){
    health = 0
  }
healthElem.innerText = health
hitsElem.innerText = hits
}


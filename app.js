var targetObj = {
health: 100,
hits: 0,
item:[]

}
let itemList ={
fireBall: {
  name: "Fireball",
  modifier: 2,
	description: 'IT BURNS!'
},
iceBall: {
  name: "Iceball",
  modifier: 2,
	description: 'IT IS FREEZING'
},
lightningBall:{
  name: "Lightningball",
  modifier: 2,
	description: 'IT TINGLES'
}

}
let healthElem = document.getElementById("health")
let hitsElem = document.getElementById("hits")
let targetStatusElem = document.getElementById("targetStatus")


function slap(){
 targetObj.health--;
  targetObj.hits++
  update()
  
}

function punch(){
 targetObj.health -=5;
  targetObj.hits++
  update()
  
}

function kick(){
  targetObj.health -= 10;
  targetObj.hits++
  update()
 
}

function update(){
 
  if(targetObj.health < 0){
    targetObj.health = 0
  }
healthElem.innerText = targetObj.health
hitsElem.innerText = targetObj.hits

}

function giveFireBall(){
  targetObj.item.push(itemList.fireBall)
}



function addMods(){
let i = 0
for(i < 0; i < targetObj["item"].length; i++){


}
}

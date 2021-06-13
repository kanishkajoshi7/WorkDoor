let numClosedDoors=3;
 let workDoor;
let openDoor1;
let openDoor2;
let openDoor3;
let startButton=document.getElementById('start');
let currentlyPlaying=true;
let doorImage1=document.querySelector('.door-frame');
let doorImage2=document.querySelector('#door2');
let doorImage3=document.querySelector('#door3');
const closedDoorPath="https://content.codecademy.com/projects/chore-door/images/closed_door.svg"
const botDoorPath="https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath="https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath="https://content.codecademy.com/projects/chore-door/images/space.svg";

function isBot(door){
   if(door.src===botDoorPath){
     return true;
   }
   return false;
}
function isClicked(door){
  if(door.src=closedDoorPath){
    return false;
  }
  return true;
}
function playDoor(door){
  
    numClosedDoors--;
    if(numClosedDoors===0){
      gameOver('win');
    }else if(isBot(door)){
      gameOver();
    }
  
}
function randomChoreDoorGenerator() {
   workDoor=Math.floor(Math.random()* numClosedDoors);
   console.log(workDoor);
   if(workDoor===0){
      openDoor1=botDoorPath;
      openDoor2=beachDoorPath;
      openDoor3=spaceDoorPath;
   }else if(workDoor===1){
      openDoor2=botDoorPath;
      openDoor1=spaceDoorPath;
      openDoor3=beachDoorPath;
   }else{
      openDoor3=botDoorPath;
      openDoor1=beachDoorPath;
      openDoor2=spaceDoorPath;
   }
}
doorImage1.onclick=()=>{
  if(!isClicked(doorImage1) && currentlyPlaying){
    doorImage1.src=openDoor1;
    playDoor(doorImage1);  
  }
}
doorImage2.onclick=()=>{
  if(!isClicked(doorImage2) && currentlyPlaying){
    doorImage2.src=openDoor2;
    playDoor(doorImage2);
  }
  
}
doorImage3.onclick=()=>{
  if(!isClicked(doorImage3) && currentlyPlaying){
     doorImage3.src=openDoor3;
     playDoor(doorImage3);
  }
  
}
function startRound(){
   
   doorImage1.src=closedDoorPath;
   doorImage2.src=closedDoorPath;
   doorImage3.src=closedDoorPath;
   numClosedDoors=3;
   startButton.innerHTML="Good luck";
   currentlyPlaying=true;
   randomChoreDoorGenerator();
 }

startButton.onclick=()=>{
  if (!currentlyPlaying) {
      startRound();
  }

}


function gameOver(status){
   
   if(status==='win'){
     startButton.innerHTML="You win! Play again?";
   }else{
     startButton.innerHTML="Game over! Play again?";
   }
   currentlyPlaying=false;
}


startRound();





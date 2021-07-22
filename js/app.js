
let hunger = 65;
let fatigue = 45;
let happiness = 80;
let age = 1;


function buttonTest(){
    console.log("buttonClicked")
}

class monster {
    constructor(hunger, fatigue, happiness, age){
            
            this.hunger = hunger;
            this.fatigue = fatigue;
            this.happiness = happiness;
            this.age = age;
    }





}

//CREATE button STARTS the game
let create = document.getElementById("spawn");
let spawn = create.addEventListener("click", buttonTest);

//PLAY keeps your monster's health high
let entertain = document.getElementById("play");
let play = entertain.addEventListener("click", buttonTest)

let giveSnack = document.getElementById("snack");
let feed = giveSnack.addEventListener("click", buttonTest)

let put2Bed = document.getElementById("lights");
let sleep = put2Bed.addEventListener("click", buttonTest)
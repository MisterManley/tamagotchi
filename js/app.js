
let hunger = 65;
let power = 45;
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

//PLAY keeps your monster's morale (happiness) high
let entertain = document.getElementById("play");
let play = entertain.addEventListener("click", buttonTest)

//SNACKS are the most direct way of keeping their
//health high
let giveSnack = document.getElementById("snack");
let feed = giveSnack.addEventListener("click", buttonTest)

//SLEEP reduces monster fatigue and also lets their
//health recover during
let put2Bed = document.getElementById("lights");
let sleep = put2Bed.addEventListener("click", buttonTest)

//IF - at the end of your stewardship of your creature (age),
//they're health is at least %98.5, power (anti-fatigue) is more than 75% and happiness is at least %90, your creature 
//will morph into Karloff


//////// - deployment notes - ////////

//$ git checkout -b gh -pages
//$ git push origin gh-pages

//https://<user-name>.github.io/tamagotchi
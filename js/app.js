
let happyScore = document.getElementById("happy_score");
let hungerScore = document.getElementById("hunger_score");
let fatigueScore = document.getElementById("fatigue_score");
let ageCounter = document.getElementById("evol_score")
let Frank = null;

// function buttonTest(){
//     console.log("buttonClicked")
// } - helper function, now disabled

class monster {
    constructor(name, hunger, fatigue, happiness, age){
            
            this.name = name;
            this.hunger = hunger;
            this.fatigue = fatigue;
            this.happiness = happiness;
            this.age = age;
    }

    





} //end MONSTER

happyScore.textContent = this.happiness;
hungerScore.textContent = this.hunger;
ageCounter.textContent = this.age;
fatigueScore.textContent = this.fatigue;



function feedFrank(){
    Frank.hunger-- 
    document.getElementById("hunger_score").textContent = Frank.hunger

        
}

function playFrank(){

    Frank.happiness++ 
    document.getElementById("happy_score").textContent = Frank.happiness
        
        
    
}

function put2Sleep(){
    Frank.fatigue--
    document.getElementById("fatigue_score").textContent = Frank.fatigue
    entertain.disabled = true;
    giveSnack.disabled = true;
        // if(this.fatigue += 15){
        //     this.wakeUp();
        // } else {this.fatigue = this.fatigue}

        // console.log("button fired sleep")

}

//So, the original toggle idea didn't work, but adding a second button  
//for waking Frank up with the right code (see below) gets the feed
//and play buttons working again

function wakeUp(){

    Frank.fatigue++
    entertain.disabled = false;
    giveSnack.disabled = false;

    // console.log("button fired wakeup")

}



if(Frank.happiness < 28){
    document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie003.png'>";
    document.getElementById("results").textContent = "Your creature needs some attention.";
    
        
} else if(Frank.hunger > 73){
        document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie006.png'>";
        document.getElementById("results").textContent = "Your creature needs something to eat."
        
}










function spawnGame(name){        //passive game engine reduces or increases
                    //based on increment
    Frank = new monster("Frank", 60, 45, 80, 1);
    interval = setInterval(function() {
        // increase the count by one
        Frank.hunger++;
        Frank.happiness--;
        Frank.fatigue++;
        Frank.age++;

        //Puts score and age elements into the monster call
        document.getElementById("happy_score").textContent = Frank.happiness;
        document.getElementById("hunger_score").textContent = Frank.hunger;
        document.getElementById("fatigue_score").textContent = Frank.fatigue;
        document.getElementById("evol_score").textContent = Frank.age;
        
        document.getElementById("charWindow").innerHTML = "<img  id='charImg' src='img/frankie008.png'>";
    
        // display the new count on the page

        //COUNTER "you can't exceed these numbers" test suite
        //hopefully soon to be the COUNTER GAME FUNCTIONALITY SUITE

        

        if(Frank.happiness > 99){
            Frank.happiness = 99
        }else if(Frank.happiness < 1){
            Frank.happiness = 1;
            
        } 

        

        if(Frank.hunger < 1){
            Frank.hunger = 1;
        }else if (Frank.hunger > 99){
            Frank.hunger = 99;
        }
        

        

        if(Frank.fatigue < 1){
            Frank.fatigue = 1;
        }else if (Frank.fatigue  > 99){
            Frank.fatigue = 99
        }else{
            Frank.fatigue = Frank.fatigue;
        }

        if (Frank.age > 99){
            Frank.age = 99
        }else{
            Frank.age = Frank.age;
        }

        
        
      }, 500);



}







// if(age === 1000000  && hunger >= 98.5 && fatigue <= 35 happiness => 85){

// }



//CREATE button STARTS the game
let create = document.getElementById("spawn");
create.addEventListener("click", spawnGame);

//PLAY keeps your monster's morale (happiness) high
let entertain = document.getElementById("play");
entertain.addEventListener("click", playFrank)

//SNACKS are the most direct way of keeping their
//health high, by keeping hunger low
let giveSnack = document.getElementById("snack");
giveSnack.addEventListener("click", feedFrank)

//SLEEP reduces monster fatigue and also lets their
//health recover during
let put2Bed = document.getElementById("lights_out");
put2Bed.addEventListener("click", put2Sleep)

let wakey = document.getElementById("lights_on");
wakey.addEventListener("click", wakeUp)

//IF - at the end of your stewardship of your creature (age),
//they're health is at least %98.5, power (anti-fatigue) is 
//more than 75% (less than %25) and happiness is at least %80, your creature 
//will morph into SuperStompy Frank


//////// - deployment notes - ////////

//$ git checkout -b gh-pages
//$ git push origin gh-pages

//https://<user-name>.github.io/tamagotchi
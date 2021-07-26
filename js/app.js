
let happyScore = document.getElementById("happy_score");
let hungerScore = document.getElementById("hunger_score");
let fatigueScore = document.getElementById("fatigue_score");
let ageCounter = document.getElementById("evol_score")
let Frank = null;

function scoreLimits(){
    if(Frank.happiness > 99){
        Frank.happiness = 100
    }
    
    if(Frank.happiness < 1){
        Frank.happiness = 0;
    } 

    if(Frank.hunger < 1){
        Frank.hunger = 0;
    }
    
    if (Frank.hunger > 99){
        Frank.hunger = 100;
    }
    
    if(Frank.fatigue < 1){
        Frank.fatigue = 1;
    }
    
    if (Frank.fatigue  > 99){
        Frank.fatigue = 100
    }

    if (Frank.age > 99){
        Frank.age = 100
    }

    
}

// ^ Limits counters to the range of 0 to 100

class monster {
    constructor(name, hunger, fatigue, happiness, age){
            
            this.name = name;
            this.hunger = hunger;
            this.fatigue = fatigue;
            this.happiness = happiness;
            this.age = age;
    }



} //end MONSTER

// happyScore.textContent = this.happiness;
// hungerScore.textContent = this.hunger;
// ageCounter.textContent = this.age;
// fatigueScore.textContent = this.fatigue;



function feedFrank(){
    Frank.hunger--; 
    document.getElementById("hunger_score").textContent = Frank.hunger.toFixed();
    scoreLimits();

        
}

function playFrank(){

    Frank.happiness++; 
    document.getElementById("happy_score").textContent = Frank.happiness.toFixed();
    scoreLimits();
        
        
    
}

function put2Sleep(){
    
    document.getElementById("fatigue_score").textContent = Frank.fatigue.toFixed()
    
    entertain.disabled = true;
    giveSnack.disabled = true;

    sleepyMonster = setInterval(function(){
        Frank.fatigue -= 2.75;
        Frank.hunger -= 2.25;
        Frank.happiness += 1.55
    
        scoreLimits();
       
    
    }, 1400)
        document.getElementById("charWindow").innerHTML = "<img  id='charImg' src='img/frankie009.png'>";
    
    scoreLimits();

}

//So, the original toggle idea didn't work, but adding a second button  
//for waking Frank up with the right code (see below) gets the feed
//and play buttons working again

function wakeUp(){

    
    Frank.fatigue++
    entertain.disabled = false;
    giveSnack.disabled = false;
    clearInterval(sleepyMonster);
    document.getElementById("charWindow").innerHTML = "<img  id='charImg' src='img/frankie002.png'>";
    scoreLimits();

}





function spawnGame(name){        //passive game engine reduces or increases
                    //based on increment
    Frank = new monster("Frank", 60, 45, 72, 1);
    interval = setInterval(function() {
        // increase the count by one
        Frank.hunger++;
        Frank.happiness--;
        Frank.fatigue++;
        Frank.age++;

        //Puts score and age elements into the monster call
        document.getElementById("happy_score").textContent = Frank.happiness.toFixed();
        document.getElementById("hunger_score").textContent = Frank.hunger.toFixed();
        document.getElementById("fatigue_score").textContent = Frank.fatigue.toFixed();
        document.getElementById("evol_score").textContent = Frank.age;
        
        
    
        // display the new count on the page

        

        //COUNTER "you can't exceed these numbers" test suite
        //hopefully soon to be the COUNTER GAME FUNCTIONALITY SUITE

        

    scoreLimits();

     

    if(Frank.hunger > 73 && Frank.hunger < 98){
            document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie006.png'>";
            document.getElementById("results").textContent = `${Frank.name} needs something to eat.`;
    }
    
    if(Frank.fatigue > 80){
        document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie005.png'>";
        document.getElementById("results").textContent = `${Frank.name} needs some rest.`;
    }
    
    if(Frank.happiness < 28){
        document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie005.png'>";
        document.getElementById("results").textContent = `${Frank.name} really needs some attention.`;
    }

    if(Frank.happiness < 58){
        document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie005.png'>";
        document.getElementById("results").textContent = `${Frank.name} says, "Play with me, Master`;
    }

    if(Frank.happiness > 85){
        document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie004.png'>";
        document.getElementById("results").textContent = `${Frank.name} is really happy you played with them. Go ahead and play with them some more.`;
    }

    if(Frank.hunger < 15){
        document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie004.png'>";
        document.getElementById("results").textContent = `${Frank.name} is feeling supercharged! More food, master!`;
    }

    if(Frank.hunger == 100){
        document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie007.png'>";
        document.getElementById("results").textContent = `${Frank.name} is dead. Way to go, Fronk'N'Steen!`;
        clearInterval(interval);
    }

    if(Frank.age == 100 && Frank.hunger < 2 && Frank.fatigue < 15 && Frank.happiness > 65){
        document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie010.png'>";
        document.getElementById("results").textContent = `${Frank.name} has morphed into Superfrank! <br /> GOOD JOB, DOCTOR!`;
        clearInterval(interval);
    }

   

    
        
      }, 1500);

      document.getElementById("charWindow").innerHTML = "<img  id='charImg' src='img/frankie001.png'>";

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
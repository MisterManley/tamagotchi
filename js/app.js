
// setting initial methods for getting data from 
//(and pushing to) the webpage
//Also, "Frank" is initialized but doesn't give itself any data
//It will be called as it is initialized as the name of the function
//that is the instance of the monster class (coming up a bit later)

let happyScore = document.getElementById("happy_score");
let hungerScore = document.getElementById("hunger_score");
let fatigueScore = document.getElementById("fatigue_score");
let ageCounter = document.getElementById("evol_score")
let Frank = null;

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

//Allows developer to turn off non-game-start buttons
//so the game doesn't add/subtract values from the monster's
//health
function buttonsOff(){
    entertain.disabled = true;
    giveSnack.disabled = true;
    put2Bed.disabled = true;
    wakey.disabled = true;
}

//Likewise, this turns the game action buttons back on
function buttonsOn(){
entertain.disabled = false;
giveSnack.disabled = false;
put2Bed.disabled = false;
wakey.disabled = false;
}

// Without this function, score would run over 100 
// in scoring, or run under 0.
function scoreLimits(){
    if(Frank.happiness >= 100){
        Frank.happiness = 99;
    }
    
    if(Frank.happiness <= 0){
        Frank.happiness = 1;
        
    } 

    if(Frank.hunger <= 0){
        Frank.hunger = 1 ;
    }
    
    if (Frank.hunger >= 100){
        Frank.hunger = 100;

    }
    
    if(Frank.fatigue <= 0){
        Frank.fatigue = 1;
    }
    
    if (Frank.fatigue >= 100){
        Frank.fatigue = 100
    }

    if (Frank.age >= 100){
        Frank.age = 100
    }

    
}

// Keeps the action buttons from running before the start 
// of the game
buttonsOff();



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


//increases Frank's health, but must be tapped repeatedly 
// to outrun the health-subtraction counter.

function feedFrank(){
    Frank.hunger--; 
    document.getElementById("hunger_score").textContent = Frank.hunger.toFixed(2);
    
    
    document.getElementById("charWindow").innerHTML = "<img  id='charImg' src='img/frankie011.png'>";
    scoreLimits();      
}

//increases Frank's happiness, but must be tapped repeatedly 
// to outrun the happiness-subtraction counter.

function playFrank(){

    Frank.happiness++; 
    
    document.getElementById("happy_score").textContent = Frank.happiness.toFixed(2);
    scoreLimits();
        
 
    
}

//Puts Frank to sleep, ticking off positive numbers 
//to reduce his fatigue, and slow down the hunger and happiness timer
//by using sleep as a method for actually increasing happiness 
// (I know I wake up happy) and slightly reducing hunger

function put2Sleep(){
    
    document.getElementById("fatigue_score").textContent = Frank.fatigue.toFixed(2);
   
    
//disables only the PLAY and SNACK buttons, because you can't
//feed or play with your monster while he's asleep    
    entertain.disabled = true;
    giveSnack.disabled = true;

    sleepyMonster = setInterval(function(){
        Frank.fatigue -= 2.00;
        Frank.hunger -= 0.35;
        Frank.happiness += 1.15
    
        scoreLimits();
       
    
    }, 800)
        
        document.getElementById("charWindow").innerHTML = "<img  id='charImg' src='img/frankie009.png'>";
    
    scoreLimits();

}

//So, the original toggle idea for LIGHTS(sleep) didn't work, 
//but adding a second button  
//for waking Frank up with the right code (see below) gets the feed
//and play buttons working again

//Also, it passive turns control for hunger and happiness back over to
//the main counter since "sleepyMonster" is cleared

function wakeUp(){

    
    Frank.fatigue++;
    entertain.disabled = false;
    giveSnack.disabled = false;
    clearInterval(sleepyMonster);
    document.getElementById("charWindow").innerHTML = "<img  id='charImg' src='img/frankie002.png'>";
    scoreLimits();

}



function deadMonster(){
    document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie007.png'>";
    document.getElementById("results").innerHTML = `${Frank.name} is dead. <br />Way to go, Fronk'N'Steen!`;
}



//Activates the main counter and starts the game with a fresh and
//(presumably) happy Frank. I could've also added functionality
//to name the monster, but the pictures are all Frankenstein
//and, as a Homunculus, I decided their pronouns were "they/them."

function spawnGame(name){        

    buttonsOn();
    
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
            document.getElementById("results").innerHTML = `${Frank.name} needs something to eat. <br /> FEED THEM!`;
    }
    
    if(Frank.happiness == 85){
            document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie004.png'>";
            document.getElementById("results").innerHTML = `${Frank.name} is really happy you played with them. <br /> Go ahead and play with them some more.`;
    }

    if(Frank.happiness < 58){
            document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie005.png'>";
            document.getElementById("results").innerHTML = `${Frank.name} says, <br /> "Play with me, Master! <br /> Please!"`;
    }

    if(Frank.happiness < 28){
        document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie005.png'>";
        document.getElementById("results").textContent = `${Frank.name} really needs some attention.`;
    }

    if(Frank.fatigue > 80){
        document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie005.png'>";
        document.getElementById("results").textContent = `${Frank.name} needs some rest.`;
    }

    

    if(Frank.hunger < 15){
        document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie004.png'>";
        document.getElementById("results").innerHTML = `${Frank.name} is feeling supercharged! <br />More food, master!`;
    }

   

    if(Frank.age === 100 && Frank.hunger != 100 && Frank.fatigue != 100 && Frank.happiness != 0){
        scoreLimits();
        document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie012.png'>";
        document.getElementById("results").innerHTML = `You did okay, I guess. <br />They're not gonna tear up the <br />countryside, but that's probably a good thing.`;
        clearInterval(interval);
        buttonsOff();
    }

    if(Frank.hunger === 100 || Frank.fatigue === 100 || Frank.happiness === 0){
        scoreLimits();
        deadMonster();
        clearInterval(interval);
        buttonsOff();

    }

    if(Frank.age === 100 && Frank.hunger < 5 && Frank.fatigue < 15 && Frank.happiness > 65){
        scoreLimits();
        document.getElementById("charWindow").innerHTML = "<img id='charImg' src='img/frankie010.png'>";
        document.getElementById("results").innerHTML = `${Frank.name} has transformed into Super${Frank.name}! <br /> GOOD JOB, DOCTOR!`;
        clearInterval(interval);
        buttonsOff();
    }

        
      }, 1000);

      document.getElementById("charWindow").innerHTML = "<img  id='charImg' src='img/frankie001.png'>";

}







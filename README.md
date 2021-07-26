# LITTLE FRANKENSLIME :japanese_goblin:


Fun for the whole family... you have been gifted your own pint-sized Frankenstein's monster!

## Instructions

Before you play with your Little Frankenstein, you'll need to click the big green button that says IT'S ALIVE!

### Now You're Playing

All you need to do is click on the buttons PLAY (to play games with Frank and offer them encouragement), SNACK (to give Frank hot dogs... or "Franks." See what I did there?), LIGHTS (to put Frank to bed and lose fatigue points. Warning: you can't feed or play with Frank while they're alseep, so...) and WAKE UP! (to reactive the feed and play buttons).

You'll only have a hundred seconds, but there's a special bonus for folks who properly feed and give attention to their monster and make sure they get plenty of rest.

But that's a secret...

## Specifications
* Create a repo for your tamagotchi pet
* Create a Class (JS Class, look at your notes if your forget) for your tamagotchi
* Instantiate your Tamagotchi
* Display a character of your choice on the screen to represent your pet
* Display the following metrics for your pet:
   * Hunger (1-10 scale)  -- changed to 100 scale percentages
   * Sleepiness (1-10 scale) -- changed to 100 scale percentages
   * Boredom (1-10 scale) -- changed to 100 scale percentages
* Age
* Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
* Add the ability to name your pet.
* Style the page.
* Increase your pet's age every x minutes
* Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
* You pet should die if Hunger, Boredom, or Sleepiness hits 10.

## Extras
* Animate your pet across the screen while it's alive. Check out using jQuery to animate your pet with jQuery's animate method.
* Morph your pet at certain ages.
* Have your tamagotchi give birth to baby tamagotchi...
* ...with special powers (extend the class)!
* Add an exercise() method to your tamagotchi, that affects certain properties
* Add anything you can think of... use your imagination!

## How I Approached the Project and What I Learned

Ultimately, I wanted to make this a cute but functional game that was cel phone accessible in terms of portrait size (roughly 640 x 360 pixels). Some things that come in mind were...

* Making the indicators for health(hunger), morale(happiness) and fatigue and sleep numeric instead of bars.
* Trying to keep things simple. This consisted of:
   * Keeping IF statements simple, with else ifs and elses.
   * I had a really crazy notion, seeing as we just learned about objects, that I should cram as many methods (internal functions) into the object as possible. This made them harder to call, not easier.
* Use of functions and conditions got much easier by calling them by their instantiation name (Frank) and using "Frank." -prefaced variables and function calls, since the instantiation created a specific object that functions and conditionals could call.
* As things progressed, they got simpler and I think I gained a better understanding of the relationships between all of these containers. The watchword was "simplicity," which I tried to stick to throughout this project.




# BlackJack3

My project that I despise that I don't understand how to fix. It's basically Blackjack the card game but the user playing with a bot.
The instructions pretty much go over everything.
I have a lot of errors in my code that my teacher said is due to my formatting but I can't figure it out myself and I lose points for each question I ask for help... So please help!!!



ALL Instructions:

Black Jack 1 (up to 70%) 

Create a Black Jack application that randomly picks 2 cards for the computer and 2 cards for the player and displays them on the screen. Both computer cards should face up. Both player cards should be face up.

The cards must be images.
Create a "DEAL" button that compares the player's cards to the computer's cards. Use the logic below to determine who wins.
The user is given 100 tokens to start playing.
They can bet any amount of tokens as long as they don't bet more than they have.
The user can't play if they don't make a bet.
The user can't play if they have no tokens left.
The player wins or loses the amount of tokens they bet based on the logic below.
You must keep track of the amount of tokens the user has at all times.
Display who won for each hand on screen. 
Add the value of the two cards for each user and display on the screen next to their cards.
All face cards have a value of ten.
All Aces have a value of 11 for Black Jack 1.
Use the png cards linked below or find your own.

 WHO WINS

 if  (comptotal == playtotal && playtotal <= 21 && comptotal <= 21){
 
            //push, no one wins
}

if (playtotal > 21 && comptotal > 21) {

            //push, no one wins

}

 if (comptotal >= playtotal && comptotal <= 21) {

            //Computer wins

}

 if (playtotal > comptotal && playtotal <= 2) {

            //Player wins

}

Black Jack 2 (up to 90%)

Create a Black Jack application that randomly picks 2 cards for the computer and 2 cards for the player and displays them on the screen when you press a "deal" button. One of the computer cards should be face up and the other face down. Both player cards should be face up.
The cards must be images.
Create a "hit" button that allows the user to pick additional cards to try to reach 21 - up to five cards.
Create a "stay" button that compares the total amount on the player's cards and the total amount on the now-seen computer's cards. Use only the value of the two original computer cards.
The user is given 100 tokens to start playing. They can bet any amount of tokens as long as they don't bet more than they have.
The player wins or loses the amount of tokens they bet based on the logic below.
You must keep track of the amount of tokens the user has at all times.
Display both the odds and the result of each game on the screen.

ADDITIONAL WHO WINS LOGIC

 '5 card Charlie

if (playtotal <= 21 and NumCardsDealt = 5){

            player wins

}

 

 

SAMPLE CODE

//HTML code for hidden image

 <img id="userImage3" class="images" class="right" src="images/1.2.png" alt="card 2" style="height: 200px; display:none">

//JS code to show that image

  document.getElementById('userImage3').style.display = "inline"

//JS code to hide an image

  document.getElementById('userImage3').style.display = "none"

//HTML code for disabled button

 <button disabled id="button2" onClick="hit()"><b>HIT</b></button>

//JS code to enable button

 document.getElementById('button2').disabled = false

//JS code to disable button

 document.getElementById('button2').disabled = true

 Black Jack 3 (up to 100%)

5 pts
Add functionality that checks whether the dealer has a total of 17 or greater or below. They should stay at 17 and greater and keep recieving cards until they reach that condition. They may recieve up to 5 cards.
The player will win or lose based on the conditions outlined in Black Jack 2. The tokens should be calculated based on winning or losing in every hand.
The Deal button should say "Deal Again" once the game has concluded. The hit and stay buttons should disappear or its enabled property set to false. Control the "enabled" property of all of your buttons so they are only clickable when appropriate.
5 pts
Include logic that determines whether an Ace should be counted as 1 or 11 for both the user and computer.


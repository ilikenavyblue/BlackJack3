// things to fix

//tokens are losing/gaining more than bet amount

//deal
//when user immediately wins in deal, reveal dealer card


//hit
//user hit and user total works

//after each ace, check to see if there are other aces and change them if necessary


//stay
//dealer cards and total are weird

//dealer is adding more cards than wanted in stay
//when user push in stay, make the second card show up on the screen
//dealer isn't adding enough cards and total isn't changing









let numTokens = 100
let numUserCounter = 2
let strMessage = ""
let numBet = 0

//dealer first two cards and suits
let numDealerCard1 = 0
let numDealerSuit1 = 0
let numDealerCard2 = 0
let numDealerSuit2 = 0

//user first two cards and suits
let numUserCard1 = 0
let numUserSuit1 = 0
let numUserCard2 = 0
let numUserSuit2 = 0

//dealer and user total
let numDealerTotal = 0
let numUserTotal = 0

//user new cards made in "hit"
let numUserCard3 = 0
let numUserSuit3 = 0
let numUserCard4 = 0
let numUserSuit4 = 0
let numUserCard5 = 0
let numUserSuit5 = 0

//dealer new cards made in "stay"
let numDealerCard3 = 0
let numDealerSuit3 = 0
let numDealerCard4 = 0
let numDealerSuit4 = 0
let numDealerCard5 = 0
let numDealerSuit5 = 0

function playGame() {

    //redeclare all variables to outside EXCEPT TOKENS in case play again
    strMessage = ""
    numUserCounter = 2
    numDealerCard1 = 0
    numDealerSuit1 = 0
    numDealerCard2 = 0
    numDealerSuit2 = 0

    numUserCard1 = 0
    numUserSuit1 = 0
    numUserCard2 = 0
    numUserSuit2 = 0

    numDealerTotal = 0
    numUserTotal = 0

    numUserCard3 = 0
    numUserSuit3 = 0
    numUserCard4 = 0
    numUserSuit4 = 0
    numUserCard5 = 0
    numUserSuit5 = 0

    numDealerCard3 = 0
    numDealerSuit3 = 0
    numDealerCard4 = 0
    numDealerSuit4 = 0
    numDealerCard5 = 0
    numDealerSuit5 = 0
    
    document.getElementById('dealer2').src = 'images/cardbackBlack.png'
    document.getElementById('dealer3').style.display = "none"
    document.getElementById('dealer4').style.display = "none"
    document.getElementById('dealer5').style.display = "none"
    document.getElementById('user3').style.display = "none"
    document.getElementById('user4').style.display = "none"
    document.getElementById('user5').style.display = "none"

    //error if you don't bet properly
    numBet = Number(document.getElementById('betAmount').value)

    if (!numBet) {
        document.getElementById('error').innerHTML = "<br><br> You need to bet!"
        return
    } else if (numBet > numTokens) {
        document.getElementById('error').innerHTML = "<br><br> You need to bet within your token amount!"
        return
    } else if (numBet <= 0) {
        document.getElementById('error').innerHTML = "<br><br> You need to bet a number greater than 0!"
        return
    }

    numDealerCard1 = Math.floor((Math.random() * 13)) + 1
    numDealerSuit1 = Math.floor((Math.random() * 4)) + 1

    numUserCard1 = Math.floor((Math.random() * 13)) + 1
    numUserSuit1 = Math.floor((Math.random() * 4)) + 1
    numUserCard2 = Math.floor((Math.random() * 13)) + 1
    numUserSuit2 = Math.floor((Math.random() * 4)) + 1


    //declaring all the cards suits
    if (numDealerSuit1 == 1) {
        strDealerSuit1 = "clubs"
    } else if (numDealerSuit1 == 2) {
        strDealerSuit1 = "diamonds"
    } else if (numDealerSuit1 == 3) {
        strDealerSuit1 = "hearts"
    } else if (numDealerSuit1 == 4) {
        strDealerSuit1 = "spades"
    }

    if (numUserSuit1 == 1) {
        strUserSuit1 = "clubs"
    } else if (numUserSuit1 == 2) {
        strUserSuit1 = "diamonds"
    } else if (numUserSuit1 == 3) {
        strUserSuit1 = "hearts"
    } else if (numUserSuit1 == 4) {
        strUserSuit1 = "spades"
    }

    if (numUserSuit2 == 1) {
        strUserSuit2 = "clubs"
    } else if (numUserSuit2 == 2) {
        strUserSuit2 = "diamonds"
    } else if (numUserSuit2 == 3) {
        strUserSuit2 = "hearts"
    } else if (numUserSuit2 == 4) {
        strUserSuit2 = "spades"
    }

    //displaying the pictures 
    document.getElementById('dealer1').src = 'images/' + numDealerCard1 + "_of_" + strDealerSuit1 + '.png'
    document.getElementById('user1').src = 'images/' + numUserCard1 + "_of_" + strUserSuit1 + '.png'
    document.getElementById('user2').src = 'images/' + numUserCard2 + "_of_" + strUserSuit2 + '.png'

    //declaring aces and faces new values
    if (numDealerCard1 == 1) {
        numDealerCard1 = 11
    } else if (numDealerCard1 == 11) {
        numDealerCard1 = 10
    } else if (numDealerCard1 == 12) {
        numDealerCard1 = 10
    } else if (numDealerCard1 == 13) {
        numDealerCard1 = 10
    }

    if (numUserCard1 == 1) {
        numUserCard1 = 11
    } else if (numUserCard1 == 11) {
        numUserCard1 = 10
    } else if (numUserCard1 == 12) {
        numUserCard1 = 10
    } else if (numUserCard1 == 13) {
        numUserCard1 = 10
    }

    if (numUserCard2 == 1) {
        numUserCard2 = 11
    } else if (numUserCard2 == 11) {
        numUserCard2 = 10
    } else if (numUserCard2 == 12) {
        numUserCard2 = 10
    } else if (numUserCard2 == 13) {
        numUserCard2 = 10
    }

    //declaring new value totals

    numDealerTotal = numDealerCard1
    numUserTotal = numUserCard1 + numUserCard2

    //aces for initial dealing

    if (numUserCard1 == 11 && numUserTotal > 21) {
        numUserCard1 = 1
        console.log("First User Ace was changed to 1")
    } else if (numUserCard1 == 11 && numUserTotal <= 21) {
        console.log("First User Ace was kept as 11")
    } else if (numUserCard1 == 11 && numUserCard1 == 11){
        numUserCard1 = 11
        numUserCard2 = 1
    } else if (numUserCard2 == 11 && numUserTotal <= 21) {
        console.log("Second User Ace was kept as 11")
    } else if (numUserCard2 == 11 && numUserTotal > 21) {
        console.log("Second User Ace was changed to 1")
    }
    
    numUserTotal = numUserCard1 + numUserCard2

    if (numUserTotal < 21) { //if the user doesn't immediately win, let them continue
        strMessage = "Choose to hit or stay. <br> Remember to not surpass 21 but get close enough to beat dealer!"
        document.getElementById('button').disabled = true
        document.getElementById('button2').disabled = false
        document.getElementById('button3').disabled = false
    } else if (numUserTotal == 21) { //ask if im supposed to create a new card here to display
        strMessage = "You won! Please play again."
        numTokens += numBet
        document.getElementById('button').disabled = false
        document.getElementById('button2').disabled = true
        document.getElementById('button3').disabled = true
    } else if (numUserTotal > 21) {
        numTokens -= numBet
        if (numTokens == 0) {
            strMessage = "You lost, please reset as you have no tokens."
            document.getElementById('button').disabled = true
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
        } else if (numTokens > 0) {
            strMessage = "You lost, please try again."
            document.getElementById('button').disabled = false
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
        }
    }

    //putting totals on screen
    document.getElementById('userTotal').innerHTML = numUserTotal
    document.getElementById('dealerTotal').innerHTML = numDealerTotal
    document.getElementById('tokens').innerHTML = numTokens
    document.getElementById('gameOver').innerHTML = strMessage

    console.log("-----------DEAL-----------")
    console.log("Dealer 1: " + numDealerCard1)
    console.log("Dealer TOTAL: " + numDealerTotal)
    console.log("User 1: " + numUserCard1)
    console.log("User 2: " + numUserCard2)
    console.log("User TOTAL: " + numUserTotal)
    console.log("-----------DEAL-----------")
}




function hit() {
    
    numUserCounter++
    numBet = Number(document.getElementById('betAmount').value)

    // **** reorganize the code, only generate the new card when counter is at appropriate amount

    if (numUserCounter == 3) { // when user adds a third card
        //generate 3rd card
        numUserCard3 = Math.floor((Math.random() * 13)) + 1
        numUserSuit3 = Math.floor((Math.random() * 4)) + 1
        console.log("User 3: " + numUserCard3)
        if (numUserSuit3 == 1) {
            strUserSuit3 = "clubs"
        } else if (numUserSuit3 == 2) {
            strUserSuit3 = "diamonds"
        } else if (numUserSuit3 == 3) {
            strUserSuit3 = "hearts"
        } else if (numUserSuit3 == 4) {
            strUserSuit3 = "spades"
        }
        //display
        document.getElementById('user3').src = 'images/' + numUserCard3 + "_of_" + strUserSuit3 + '.png'
        document.getElementById('user3').style.display = "inline"

        //determine values
        if (numUserCard3 == 1) {
            numUserCard3 = 11
        } else if (numUserCard3 == 11) {
            numUserCard3 = 10
        } else if (numUserCard3 == 12) {
            numUserCard3 = 10
        } else if (numUserCard3 == 13) {
            numUserCard3 = 10
        }

        //new user total
        numUserTotal = numUserCard1 + numUserCard2 + numUserCard3

        //aces for 3rd card
        if (numUserCard3 == 11 && numUserTotal > 21) {
            numUserCard3 = 1
            console.log("Third User Ace was changed to 1")
        } else if (numUserCard3 == 11 && numUserTotal <= 21) {
            console.log("Third User Ace kept as 11")
        }
        
        numUserTotal = numUserCard1 + numUserCard2 + numUserCard3

        //win or lose
        if (numUserTotal < 21) {
            strMessage = "Be careful!"
        } else if (numUserTotal == 21) {
            strMessage = "You won! Please play again."
            numTokens += numBet
            document.getElementById('button').disabled = false
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
        } else if (numUserTotal > 21) {
            numTokens -= numBet
            if (numTokens == 0) {
                strMessage = "Bust! Please reset since you have no tokens"
                document.getElementById('button').disabled = true
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            } else if (numTokens > 0) {
                strMessage = "Bust! Please play again."
                document.getElementById('button').disabled = false
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            }
        }

    } else if (numUserCounter == 4) {
        //generate 4th card
        numUserCard4 = Math.floor((Math.random() * 13)) + 1
        numUserSuit4 = Math.floor((Math.random() * 4)) + 1
        console.log("User 4: " + numUserCard4)
        if (numUserSuit4 == 1) {
            strUserSuit4 = "clubs"
        } else if (numUserSuit4 == 2) {
            strUserSuit4 = "diamonds"
        } else if (numUserSuit4 == 3) {
            strUserSuit4 = "hearts"
        } else if (numUserSuit4 == 4) {
            strUserSuit4 = "spades"
        }
        //display
        document.getElementById('user4').src = 'images/' + numUserCard4 + "_of_" + strUserSuit4 + '.png'
        document.getElementById('user4').style.display = "inline"
        
        //determine new values
        if (numUserCard4 == 1) {
            numUserCard4 = 11
        } else if (numUserCard4 == 11) {
            numUserCard4 = 10
        } else if (numUserCard4 == 12) {
            numUserCard4 = 10
        } else if (numUserCard4 == 13) {
            numUserCard4 = 10
        }
        //user new total
        numUserTotal = numUserCard1 + numUserCard2 + numUserCard3 + numUserCard4

        //aces for 4th card
        if (numUserCard4 == 11 && numUserTotal > 21) {
            numUserCard4 = 1
            console.log("Fourth User Ace was changed to 1")
        } else if (numUserCard4 == 11 && numUserTotal <= 21) {
            console.log("Fourth User Ace kept as 11")
        }
        
        numUserTotal = numUserCard1 + numUserCard2 + numUserCard3 + numUserCard4
        
        //win or lose
        if (numUserTotal < 21) {
            strMessage = "Be careful!"
        } else if (numUserTotal == 21) {
            strMessage = "You won! Please play again."
            numTokens += numBet
            document.getElementById('button').disabled = false
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
        } else if (numUserTotal > 21) {
            numTokens -= numBet
            if (numTokens == 0) {
                strMessage = "Bust! Please reset since you have no tokens"
                document.getElementById('button').disabled = true
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            } else if (numTokens > 0) {
                strMessage = "Bust! Please play again."
                document.getElementById('button').disabled = false
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            }
        }

    } else if (numUserCounter == 5) {
        //generate 5th card
        numUserCard5 = Math.floor((Math.random() * 13)) + 1
        numUserSuit5 = Math.floor((Math.random() * 4)) + 1
        console.log("User 5: " + numUserCard5)
        if (numUserSuit5 == 1) {
            strUserSuit5 = "clubs"
        } else if (numUserSuit5 == 2) {
            strUserSuit5 = "diamonds"
        } else if (numUserSuit5 == 3) {
            strUserSuit5 = "hearts"
        } else if (numUserSuit5 == 4) {
            strUserSuit5 = "spades"
        }
        //display
        document.getElementById('user5').src = 'images/' + numUserCard5 + "_of_" + strUserSuit5 + '.png'
        document.getElementById('user5').style.display = "inline"
        
        //determine new values
        if (numUserCard5 == 1) {
            numUserCard5 = 11
        } else if (numUserCard5 == 11) {
            numUserCard5 = 10
        } else if (numUserCard5 == 12) {
            numUserCard5 = 10
        } else if (numUserCard5 == 13) {
            numUserCard5 = 10
        }
        //new total
        numUserTotal = numUserCard1 + numUserCard2 + numUserCard3 + numUserCard4 + numUserCard5

        //aces for 5th card
        if (numUserCard5 == 11 && numUserTotal > 21) {
            numUserCard5 = 1
            console.log("Fifth User Ace was changed to 1")
        } else if (numUserCard5 == 11 && numUserTotal <= 21) {
            numUserCard5 = 11
            console.log("Fifth User Ace kept as 11")
        }

        numUserTotal = numUserCard1 + numUserCard2 + numUserCard3 + numUserCard4 + numUserCard5
        //win or lose
        if (numUserTotal <= 21) {
            strMessage = "5 Card Charlie! Please play again."
            numTokens += numBet
            document.getElementById('dealer2').style.display = "inline"
            document.getElementById('button').disabled = false
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
        } else if (numUserTotal > 21) {
            numTokens -= numBet
            document.getElementById('dealer2').style.display = "inline"
            if (numTokens == 0) {
                strMessage = "Bust! Please reset since you have no tokens"
                document.getElementById('button').disabled = true
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            } else if (numTokens > 0) {
                strMessage = "Bust! Please play again."
                document.getElementById('button').disabled = false
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            }
        }
    }

    document.getElementById('userTotal').innerHTML = numUserTotal
    document.getElementById('tokens').innerHTML = numTokens
    document.getElementById('gameOver').innerHTML = strMessage

}


function stay() { //everything not working

    numBet = Number(document.getElementById('betAmount').value)

    document.getElementById('button').disabled = false
    document.getElementById('button2').disabled = true
    document.getElementById('button3').disabled = true

    //generate second card no matter what
            numDealerCard2 = Math.floor((Math.random() * 13)) + 1
            numDealerSuit2 = Math.floor((Math.random() * 4)) + 1
            console.log("Dealer 2: " + numDealerCard2)
            
            if (numDealerSuit2 == 1) {
                strDealerSuit2 = "clubs"
            } else if (numDealerSuit2 == 2) {
                strDealerSuit2 = "diamonds"
            } else if (numDealerSuit2 == 3) {
                strDealerSuit2 = "hearts"
            } else if (numDealerSuit2 == 4) {
                strDealerSuit2 = "spades"
            }
            
            //display new card
            document.getElementById('dealer2').src = 'images/' + numDealerCard2 + "_of_" + strDealerSuit2 + '.png'
            
            //determine new values
            if (numDealerCard2 == 1) {
                numDealerCard2 = 11
            } else if (numDealerCard2 == 11) {
                numDealerCard2 = 10
            } else if (numDealerCard2 == 12) {
                numDealerCard2 = 10
            } else if (numDealerCard3 == 13) {
                numDealerCard2 = 10
            }
            //new total
            numDealerTotal = numDealerCard1 + numDealerCard2
        
            //aces for 2nd card/1st card
            if (numDealerCard2 == 11 && numDealerTotal > 21) {
                numDealerCard2 = 1
                console.log("Second Dealer Ace was changed to 1")
            } else if (numDealerCard2 == 11 && numDealerTotal <= 21) {
                numDealerCard2 = 11
                console.log("Second Dealer Ace kept as 11")
            } else if (numDealerCard1 == 11 && numDealerTotal <= 21) {
                numDealerCard1 = 11
                console.log("First Dealer Ace kept as 11")
            } else if (numDealerCard1 == 11 && numDealerTotal > 21) {
                numDealerCard1 = 1
                console.log("First Dealer Ace was changed to 1")
            
            numDealerTotal = numDealerCard1 + numDealerCard2
            
            document.getElementById('dealerTotal').innerHTML = numDealerTotal

    if (numDealerTotal >= 17){
        
        //check to see who wins
    numDealerTotal = numDealerCard1 + numDealerCard2

    if (numUserTotal == 21) {
        strMessage = "You won! Please play again."
            numTokens += numBet
            document.getElementById('button').disabled = false
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
    } else if ((numUserTotal > numDealerTotal) && (numDealerTotal < 21 && numUserTotal < 21)) {
        strMessage = "You won! Please play again."
            numTokens += numBet
            document.getElementById('button').disabled = false
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
    }  else if ((numDealerTotal > numUserTotal) && (numDealerTotal < 21 && numUserTotal < 21)) {
        strMessage = "You lost, please play again."
            numTokens -= numBet
            if (numTokens == 0) {
                strMessage = "Bust! Please reset since you have no tokens"
                document.getElementById('button').disabled = true
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            } else if (numTokens > 0) {
                strMessage = "Bust! Please play again."
                document.getElementById('button').disabled = false
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            }
    } else if (numUserTotal > 21) {
            numTokens -= numBet
            if (numTokens == 0) {
                strMessage = "Bust! Please reset since you have no tokens"
                document.getElementById('button').disabled = true
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            } else if (numTokens > 0) {
                strMessage = "Bust! Please play again."
                document.getElementById('button').disabled = false
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            }
    }
        
    } else if (numDealerTotal < 17)





























if (numDealerTotal < 17){
        
            //generate 3rd dealer card
            numDealerCard3 = Math.floor((Math.random() * 13)) + 1
            numDealerSuit3 = Math.floor((Math.random() * 4)) + 1
            console.log("Dealer 3: " + numDealerCard3)
            if (numDealerSuit3 == 1) {
                strDealerSuit3 = "clubs"
            } else if (numDealerSuit3 == 2) {
                strDealerSuit3 = "diamonds"
            } else if (numDealerSuit3 == 3) {
                strDealerSuit3 = "hearts"
            } else if (numDealerSuit3 == 4) {
                strDealerSuit3 = "spades"
            }
            //display new card
            document.getElementById('dealer3').src = 'images/' + numDealerCard3 + "_of_" + strDealerSuit3 + '.png'
            document.getElementById('dealer3').style.display = "inline"
            
            //determine new values
            if (numDealerCard3 == 1) {
                numDealerCard3 = 11
            } else if (numDealerCard3 == 11) {
                numDealerCard3 = 10
            } else if (numDealerCard3 == 12) {
                numDealerCard3 = 10
            } else if (numDealerCard3 == 13) {
                numDealerCard3 = 10
            }
            
            numDealerTotal = numDealerCard1 + numDealerCard2 + numDealerCard3

            //aces for 3rd dealer card
            if (numDealerCard3 == 11 && numDealerTotal > 21) {
                numDealerCard3 = 1
                console.log("Third Dealer Ace was changed to 1")
            } else if (numDealerCard3 == 11 && numDealerTotal <= 21) {
                numDealerCard1 = 11
                console.log("Third Dealer Ace kept as 11")
            }
            numDealerTotal = numDealerCard1 + numDealerCard2 + numDealerCard3
} else {
    
    //check who wins
    
    numDealerTotal = numDealerCard1 + numDealerCard2

    if (numUserTotal == 21) {
        strMessage = "You won! Please play again."
            numTokens += numBet
            document.getElementById('button').disabled = false
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
    } else if ((numUserTotal > numDealerTotal) && (numDealerTotal < 21 && numUserTotal < 21)) {
        strMessage = "You won! Please play again."
            numTokens += numBet
            document.getElementById('button').disabled = false
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
    } else if (numUserTotal > 21) {
            numTokens -= numBet
            if (numTokens == 0) {
                strMessage = "Bust! Please reset since you have no tokens"
                document.getElementById('button').disabled = true
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            } else if (numTokens > 0) {
                strMessage = "Bust! Please play again."
                document.getElementById('button').disabled = false
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            }
    } else if ((numDealerTotal > numUserTotal) && (numDealerTotal < 21 && numUserTotal < 21)){
            numTokens -= numBet
            if (numTokens == 0) {
                strMessage = "Loss! Please reset since you have no tokens"
                document.getElementById('button').disabled = true
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            } else if (numTokens > 0) {
                strMessage = "Loss! Please play again."
                document.getElementById('button').disabled = false
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            }
    } else if (numUserTotal == numDealerTotal){
            strMessage = "Push. Please play again."
            document.getElementById('button').disabled = false
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
    } else {
        numTokens -= numBet
            if (numTokens == 0) {
                strMessage = "Loss! Please reset since you have no tokens"
                document.getElementById('button').disabled = true
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            } else if (numTokens > 0) {
                strMessage = "Loss! Please play again."
                document.getElementById('button').disabled = false
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            }
    }

}
    






if (numDealerTotal < 17){
            //generate 4th dealer card
            numDealerCard4 = Math.floor((Math.random() * 13)) + 1
            console.log("numDealerCard4: " + numDealerCard4)
            numDealerCard4 = Math.floor((Math.random() * 4)) + 1

            if (numDealerSuit4 == 1) {
                strDealerSuit4 = "clubs"
            } else if (numDealerSuit4 == 2) {
                strDealerSuit4 = "diamonds"
            } else if (numDealerSuit4 == 3) {
                strDealerSuit4 = "hearts"
            } else if (numDealerSuit4 == 4) {
                strDealerSuit4 = "spades"
            }
            //display new card
            document.getElementById('dealer4').src = 'images/' + numDealerCard4 + "_of_" + strDealerSuit4 + '.png'
            document.getElementById('dealer4').style.display = "inline"
            
            //determine new values
            if (numDealerCard4 == 1) {
                numDealerCard4 = 11
            } else if (numDealerCard4 == 11) {
                numDealerCard4 = 10
            } else if (numDealerCard4 == 12) {
                numDealerCard4 = 10
            } else if (numDealerCard4 == 13) {
                numDealerCard4 = 10
            }
            
            numDealerTotal = numDealerCard1 + numDealerCard2 + numDealerCard3 + numDealerCard4
            
            //aces for 4th dealer card
            if (numDealerCard4 == 11 && numDealerTotal > 21) {
                numDealerCard4 = 1
                console.log("Fourth Dealer Ace was changed to 1")
            } else if (numDealerCard4 == 11 && numDealerTotal <= 21) {
                numDealerCard4 = 11
                console.log("Fourth Dealer Ace kept as 11")
            }
            
            numDealerTotal = numDealerCard1 + numDealerCard2 + numDealerCard3 + numDealerCard4
            
} else {
  //check who wins
  
  numDealerTotal = numDealerCard1 + numDealerCard2 + numDealerCard3
  
    if (numUserTotal == 21) {
        strMessage = "You won! Please play again."
            numTokens += numBet
            document.getElementById('button').disabled = false
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
    } else if ((numUserTotal > numDealerTotal) && (numDealerTotal < 21 && numUserTotal < 21)) {
        strMessage = "You won! Please play again."
            numTokens += numBet
            document.getElementById('button').disabled = false
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
    } else if (numUserTotal > 21) {
            numTokens -= numBet
            if (numTokens == 0) {
                strMessage = "Bust! Please reset since you have no tokens"
                document.getElementById('button').disabled = true
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            } else if (numTokens > 0) {
                strMessage = "Bust! Please play again."
                document.getElementById('button').disabled = false
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            }
    } else if ((numDealerTotal > numUserTotal) && (numDealerTotal < 21 && numUserTotal < 21)){
            numTokens -= numBet
            if (numTokens == 0) {
                strMessage = "Loss! Please reset since you have no tokens"
                document.getElementById('button').disabled = true
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            } else if (numTokens > 0) {
                strMessage = "Loss! Please play again."
                document.getElementById('button').disabled = false
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            }
    } else if (numUserTotal == numDealerTotal){
            strMessage = "Push. Please play again."
            document.getElementById('button').disabled = false
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
    } else {
        numTokens -= numBet
            if (numTokens == 0) {
                strMessage = "Loss! Please reset since you have no tokens"
                document.getElementById('button').disabled = true
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            } else if (numTokens > 0) {
                strMessage = "Loss! Please play again."
                document.getElementById('button').disabled = false
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            }
    }  
} 
    
    
if (numDealerTotal < 17){
    
            //generate 5th dealer card
            numDealerCard5 = Math.floor((Math.random() * 13)) + 1
            console.log("numDealerCard5: " + numDealerCard5)
            numDealerCard5 = Math.floor((Math.random() * 4)) + 1

            if (numDealerSuit5 == 1) {
                strDealerSuit5 = "clubs"
            } else if (numDealerSuit5 == 2) {
                strDealerSuit5 = "diamonds"
            } else if (numDealerSuit5 == 3) {
                strDealerSuit5 = "hearts"
            } else if (numDealerSuit5 == 4) {
                strDealerSuit5 = "spades"
            }
            //display new card
            document.getElementById('dealer5').src = 'images/' + numDealerCard5 + "_of_" + numDealerSuit5 + '.png'
            document.getElementById('dealer5').style.display = "inline"
            //determine new values
            if (numDealerCard5 == 1) {
                numDealerCard5 = 11
            } else if (numDealerCard5 == 11) {
                numDealerCard5 = 10
            } else if (numDealerCard5 == 12) {
                numDealerCard5 = 10
            } else if (numDealerCard5 == 13) {
                numDealerCard5 = 10
            }

            numDealerTotal = numDealerCard1 + numDealerCard2 + numDealerCard3 + numDealerCard4 + numDealerCard5
            
            //aces for 5th dealer card
            if (numDealerCard5 == 11 && numDealerTotal > 21) {
                numDealerCard5 = 1
                console.log("Fifth Dealer Ace was changed to 1")
            } else if (numDealerCard5 == 11 && numDealerTotal <= 21) {
                numDealerCard5 = 11
                console.log("Fifth Dealer Ace kept as 11")
            }
            
            numDealerTotal = numDealerCard1 + numDealerCard2 + numDealerCard3 + numDealerCard4 + numDealerCard5
        
} else {
    
    numDealerTotal = numDealerCard1 + numDealerCard2 + numDealerCard3 + numDealerCard4

  //check who wins
    if (numUserTotal == 21) {
        strMessage = "You won! Please play again."
            numTokens += numBet
            document.getElementById('button').disabled = false
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
    } else if ((numUserTotal > numDealerTotal) && (numDealerTotal < 21 && numUserTotal < 21)) {
        strMessage = "You won! Please play again."
            numTokens += numBet
            document.getElementById('button').disabled = false
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
    } else if (numUserTotal > 21) {
            numTokens -= numBet
            if (numTokens == 0) {
                strMessage = "Bust! Please reset since you have no tokens"
                document.getElementById('button').disabled = true
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            } else if (numTokens > 0) {
                strMessage = "Bust! Please play again."
                document.getElementById('button').disabled = false
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            }
    } else if ((numDealerTotal > numUserTotal) && (numDealerTotal < 21 && numUserTotal < 21)){
            numTokens -= numBet
            if (numTokens == 0) {
                strMessage = "Loss! Please reset since you have no tokens"
                document.getElementById('button').disabled = true
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            } else if (numTokens > 0) {
                strMessage = "Loss! Please play again."
                document.getElementById('button').disabled = false
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            }
    } else if (numUserTotal == numDealerTotal){
            strMessage = "Push. Please play again."
            document.getElementById('button').disabled = false
            document.getElementById('button2').disabled = true
            document.getElementById('button3').disabled = true
    } else {
        numTokens -= numBet
            if (numTokens == 0) {
                strMessage = "Loss! Please reset since you have no tokens"
                document.getElementById('button').disabled = true
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            } else if (numTokens > 0) {
                strMessage = "Loss! Please play again."
                document.getElementById('button').disabled = false
                document.getElementById('button2').disabled = true
                document.getElementById('button3').disabled = true
            }
    }  
} 
    

    document.getElementById('dealerTotal').innerHTML = numDealerTotal
    document.getElementById('userTotal').innerHTML = numUserTotal
    document.getElementById('tokens').innerHTML = numTokens
    document.getElementById('gameOver').innerHTML = strMessage

}


function resetGame() {
    numTokens = 100
    numUserCounter = 2
    numDealerCounter = 2
    strMessage = ""

    document.getElementById('dealer1').src = 'images/cardbackBlack.png'
    document.getElementById('dealer2').src = 'images/cardbackBlack.png'
    document.getElementById('user1').src = 'images/cardbackRed.png'
    document.getElementById('user2').src = 'images/cardbackRed.png'
    document.getElementById('gameOver').innerHTML = "Calculating your luck..."
    document.getElementById('error').innerHTML = ""
    document.getElementById('dealerTotal').innerHTML = ""
    document.getElementById('userTotal').innerHTML = ""
    document.getElementById('tokens').innerHTML = numTokens

    numDealerCard1 = 0
    numDealerSuit1 = 0
    numDealerCard2 = 0
    numDealerSuit2 = 0

    numUserCard1 = 0
    numUserSuit1 = 0
    numUserCard2 = 0
    numUserSuit2 = 0

    numDealerTotal = 0
    numUserTotal = 0

    numUserCard3 = 0
    numUserSuit3 = 0
    numUserCard4 = 0
    numUserSuit4 = 0
    numUserCard5 = 0
    numUserSuit5 = 0
    
    numDealerCard3 = 0
    numDealerSuit3 = 0
    numDealerCard4 = 0
    numDealerSuit4 = 0
    numDealerCard5 = 0
    numDealerSuit5 = 0

    document.getElementById('button').disabled = false
    document.getElementById('button2').disabled = true
    document.getElementById('button3').disabled = true

    document.getElementById('dealer2').style.display = "none"
    document.getElementById('user3').style.display = "none"
    document.getElementById('user4').style.display = "none"
    document.getElementById('user5').style.display = "none"

}
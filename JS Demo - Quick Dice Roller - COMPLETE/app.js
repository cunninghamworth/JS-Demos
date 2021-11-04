

// function to roll one die -- DONE!!

function rollDie(numSides) {
    return Math.floor(Math.random()*numSides) +1;
}

// function to roll quick dice rolls -- DONE!!

function rollQuickDie(numSides) {
    // function to generate random numbers between 1 and numSides
    var buttonQuickRoll = document.getElementById("quickRollResultsBox");
    var buttonQuickResults = Math.floor(Math.random()*numSides) +1;
    buttonQuickRoll.innerHTML = buttonQuickResults;      
}


// function to roll d20 w/ advantage

function rollAdv() {
    var buttonQuickRoll = document.getElementById("quickRollResultsBox");
    var rollone = Math.floor(Math.random()*20) +1;
    var rolltwo = Math.floor(Math.random()*20) +1;
        
    if (rollone >= rolltwo) {
        buttonQuickRoll.innerHTML = rollone + "<span class='offDiceDisplay'>(" + rolltwo + ")</span>";    

    } else {
        buttonQuickRoll.innerHTML = rolltwo + "<span class='offDiceDisplay'>(" + rollone + ")</span>";    
    }
}

// function to roll d20 w/ disadvantage

function rollDis() {
    var buttonQuickRoll = document.getElementById("quickRollResultsBox");
    var rollone = Math.floor(Math.random()*20) +1;
    var rolltwo = Math.floor(Math.random()*20) +1;
        
    if (rollone <= rolltwo) {
        buttonQuickRoll.innerHTML = rollone + "<span class='offDiceDisplay'>(" + rolltwo + ")</span>";    

    } else {
        buttonQuickRoll.innerHTML = rolltwo + "<span class='offDiceDisplay'>(" + rollone + ")</span>";    
    }
}

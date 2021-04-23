import { changeCurrrentPlayer, clearZilchRun, getCurrentPlayer, updateScore, updateZilch, getPlayers, setBankZero, increaseBank, getWinningScore } from '../local-storage-utils.js';
import diceJS from './dice.js';
import { renderTitle, renderZilch, renderPlayerScores } from './render.js';

const playerChoiceDiv = document.getElementById('player-choice'); //area for user to select score
const diceList = document.getElementById('dice-list'); // area to display dice
const bankButton = document.getElementById('bank-button');
const rollButton = document.getElementById('roll-button');

const diceArray = diceJS;

let notHeldArray = diceArray.filter(dice => !dice.isHeld);

export function calculateScore(number, arrayL) { // formula to calculate score of about 3/5 the rolls
    let i = 3;

    while (i <= arrayL) {
        number = number * 2;
        i++;
    }
    return number;
}

export function displayScoringOptions() { // calculates scores on every roll

    let possibleScoringDice = 0; // used to track if no scoring dice were rolled.  If it's still 0 at end of function then player rolled no scoring dice.

    notHeldArray = diceArray.filter(dice => !dice.isHeld); //dice not selected by player

    const onesObject = diceArray.filter(dice => dice.number === 1 && dice.isHeld === false); //array of 1s,2s,3s,4s,5s, and 6s rolled
    const twosObject = diceArray.filter(dice => dice.number === 2 && dice.isHeld === false);
    const threesObject = diceArray.filter(dice => dice.number === 3 && dice.isHeld === false);
    const foursObject = diceArray.filter(dice => dice.number === 4 && dice.isHeld === false);
    const fivesObject = diceArray.filter(dice => dice.number === 5 && dice.isHeld === false);
    const sixesObject = diceArray.filter(dice => dice.number === 6 && dice.isHeld === false);

    let ones = onesObject.length; // how many 1s, 2s, 3s, 4s, 5s, and 6s rolled
    let twos = twosObject.length;
    let threes = threesObject.length;
    let fours = foursObject.length;
    let fives = fivesObject.length;
    let sixes = sixesObject.length;

    const numbersArray = [ones, twos, threes, fours, fives, sixes]; // used to calculate if there are three matching pairs
    const matchingPairs = numbersArray.filter(pair => pair === 2);

    if (matchingPairs.length === 3) {
        const choice = `3 Pairs: 1500 pts`;
        renderPlayerChoice(choice, diceArray, 1500);
        possibleScoringDice++;
    }

    if (ones >= 3) { //checks for three or more of certain number from here to line 98

        const score = calculateScore(500, ones);
        const choice = `${ones} ones: ${score} pts`;
        renderPlayerChoice(choice, onesObject, score);
        possibleScoringDice++;
    }

    if (twos >= 3) {

        const score = calculateScore(100, twos);
        const choice = `${twos} twos: ${score} pts`;
        renderPlayerChoice(choice, twosObject, score);
        possibleScoringDice++;
    }

    if (threes >= 3) {

        const score = calculateScore(150, threes);
        const choice = `${threes} threes: ${score} pts`;
        renderPlayerChoice(choice, threesObject, score);
        possibleScoringDice++;
    }

    if (fours >= 3) {

        const score = calculateScore(200, fours);
        const choice = `${fours} fours: ${score} pts`;
        renderPlayerChoice(choice, foursObject, score);
        possibleScoringDice++;
    }

    if (fives >= 3) {

        const score = calculateScore(250, fives);
        const choice = `${fives} fives: ${score} pts`;
        renderPlayerChoice(choice, fivesObject, score);
        possibleScoringDice++;
    }

    if (sixes >= 3) {
        const score = calculateScore(300, sixes);
        const choice = `${sixes} sixes: ${score} pts`;
        renderPlayerChoice(choice, sixesObject, score);
        possibleScoringDice++;
    }

    if (ones === 1 && twos === 1 && threes === 1 && fours === 1 && fives === 1 && sixes === 1) { //calculate score for straight
        const choice = `Straight: 1500 pts`;
        renderPlayerChoice(choice, diceArray, 1500);
        possibleScoringDice++;
    } else {
        if (fives === 2) {  //misc scores
            const choice = `2 fives: 100 pts`;
            renderPlayerChoice(choice, fivesObject, 100);
            possibleScoringDice++;
        }

        if (fives === 1) {
            const choice = `1 five: 50 pts`;
            renderPlayerChoice(choice, fivesObject, 50);
            possibleScoringDice++;
        }

        if (ones === 2) {
            const choice = `2 ones: 200 pts`;
            renderPlayerChoice(choice, onesObject, 200);
            possibleScoringDice++;
        }

        if (ones === 1) {
            const choice = `1 one: 100 pts`;
            renderPlayerChoice(choice, onesObject, 100);
            possibleScoringDice++;
        }

    }

    if (possibleScoringDice === 0) {  //player didn't roll scoring combination of dice.
        if (notHeldArray.length === 6) {
            if (getCurrentPlayer().turnCount === 1) { // rolled no scoring dice on first turn
                updateScore(500);
                renderPlayerScores();
                changeCurrrentPlayer();
                renderTitle();
                //resetDice(1);
                bankZero();
                playerChoiceDiv.innerHTML = '';
                diceArray.forEach(die => { die.isHeld = false; });
            } else { // rolled no scoring dice on turn other than first turn.   zilch
                renderPlayerZilch();
            }
        } else { // rolled zilch afer something like after scoring other die.  zilch
            renderPlayerZilch();
        }
    }
}

export function bankZero() { // resets local storage of bank, change DOM, disable button

    setBankZero();

    bankButton.textContent = `Bank: ${getCurrentPlayer().bank}`;

    bankButton.disabled = true;

}

export function resetDice(one) { // makes it so user hasn't selected each dice and sets first dice to number one, second dice to number two, etc
    for (let die of diceArray) {
        die.isHeld = false;
        die.number = one;
        one++;
    }
    diceList.innerHTML = '';  // render dice on page
    for (let arrayitem of diceArray) {
        const die = document.createElement('i');
        die.classList.add('fas');
        if (arrayitem.number === 1) {
            die.classList.add('fa-dice-one');
        } else if (arrayitem.number === 2) {
            die.classList.add('fa-dice-two');
        } else if (arrayitem.number === 3) {
            die.classList.add('fa-dice-three');
        } else if (arrayitem.number === 4) {
            die.classList.add('fa-dice-four');
        } else if (arrayitem.number === 5) {
            die.classList.add('fa-dice-five');
        } else if (arrayitem.number === 6) {
            die.classList.add('fa-dice-six');
        }
        diceList.append(die);
    }
}

function renderPlayerZilch() {  //called when player gets zero scoring dice (other than first turn)
    const zilchText = document.createElement('div');
    zilchText.textContent = 'Zilch!';
    zilchText.classList.add('zilch-text');
    setTimeout(function() { zilchText.classList.add('zilch-text-animate'); }, 500);
    playerChoiceDiv.append(zilchText);
    bankButton.disabled = true;
    rollButton.disabled = false;
    updateZilch();
    if (getCurrentPlayer().zilchRun === 3) {
        updateScore(-500);
    }
    renderZilch();
    if (getCurrentPlayer().zilchRun === 3) {
        clearZilchRun();
    }
    updateScore(0);
    changeCurrrentPlayer();
    setBankZero();
    renderTitle();
    addNotHeldClass();
    //resetDice(1); // will go away
    // notHeld class add
    bankButton.textContent = 'Bank';
}

function renderPlayerFreeRoll() { // called when player has 'isHeld' class on all six dice.  gets an extra roll with all dice reset
    rollButton.textContent = 'Free Roll!';  // cant change text to Free roll too many times

    for (let die of diceArray) {
        die.isHeld = false;
    }
}

function renderPlayerChoice(choice, scoringDice, score) {

    const choiceDiv = document.createElement('div');
    choiceDiv.textContent = choice;

    if (!(scoringDice[0].isHeld)) {
        playerChoiceDiv.append(choiceDiv);
    }

    choiceDiv.addEventListener('click', () => {

        scoringDice.forEach(die => {
            die.isHeld = true;

            const held = document.getElementById(die.id);
            held.classList.add('held');
        });
        const isHeldArray = diceArray.filter(die => die.isHeld === true);

        if (isHeldArray.length === 6) {  // length is always 6..... impossible?! but reality
            renderPlayerFreeRoll();
            rollButton.textContent = 'Free Roll!';  // just incase function renderPlayerFreeRoll() fails to change text
        }

        increaseBank(score);
        disableRoll(true);
        bankButton.textContent = `Bank ${getCurrentPlayer().bank}`;

        if (getCurrentPlayer().bank > 299) {
            bankButton.disabled = false;
        }

        choiceDiv.remove();
        rollButton.disabled = false;

    });

}

export function checkLastRound() { // check to see if either player has reach winning score. is so redirect to results page

    const players = getPlayers();

    const playerOne = players[0];
    const playerTwo = players[1];

    const winnerScore = getWinningScore();

    if (playerOne.score >= winnerScore || playerTwo.score >= winnerScore) {
        if (playerOne.score >= winnerScore) {
            playerOne.lastRound = true;
            window.location = '../Results/';
        }

        if (playerTwo.score >= winnerScore) {
            playerTwo.lastRound = true;
            window.location = '../Results';
        }
    }
}

const generateRandomNumber = function () {  //generates random number 1-6 for each dice
    return Math.floor((Math.random() * 6) + 1);
};

export function renderDiceValue(array) { //always passed dice array
    diceList.innerHTML = '';
    const currentRoll = [];
    for (let arrayitem of array) {
        const die = document.createElement('i');
        die.classList.add('fas');

        die.setAttribute('id', arrayitem.id);
        if (!arrayitem.isHeld) {
            setTimeout(function() { die.classList.add('roll'); }, 1);
            die.classList.remove('roll');
            arrayitem.number = generateRandomNumber();

        } if (arrayitem.isHeld) {
            die.classList.add('held');
        } //if (arrayitem.isHeld === false) {
        //     die.classList.add('notHeld');
        // }

        currentRoll.push(arrayitem.number);
        if (arrayitem.number === 1) {
            die.classList.add('fa-dice-one');
        } else if (arrayitem.number === 2) {
            die.classList.add('fa-dice-two');
        } else if (arrayitem.number === 3) {
            die.classList.add('fa-dice-three');
        } else if (arrayitem.number === 4) {
            die.classList.add('fa-dice-four');
        } else if (arrayitem.number === 5) {
            die.classList.add('fa-dice-five');
        } else if (arrayitem.number === 6) {
            die.classList.add('fa-dice-six');
        }
        diceList.append(die);
    }
}

export function disableRoll(boolean) {  //called once to disable roll button. ROLL model function.
    rollButton.disabled = boolean;
}

export function addNotHeldClass() {
    const expList = document.querySelectorAll('i');

    for (let i = 0; i < 6; i++) {
        if (diceArray[i].isHeld === false) {
            expList[i].classList.add('notHeld');
        }
    }
}

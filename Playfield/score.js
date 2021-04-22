import { changeCurrrentPlayer, clearZilchRun, getCurrentPlayer, updateScore, updateZilch } from '../local-storage-utils.js';
import diceJS from './dice.js';
import { renderPlayerScores, renderTitle } from './render.js';

import { disableRoll } from './playfield.js';


const playerChoiceDiv = document.getElementById('player-choice');

const diceList = document.getElementById('dice-list');

const bankButton = document.getElementById('bank-button');

const rollButton = document.getElementById('roll-button');

const diceArray = diceJS;
let notHeldArray = diceArray.filter(dice => !dice.isHeld);

renderTitle();

function calculateScore(number, arrayL) {
    let i = 3;

    while (i <= arrayL) {
        number = number * 2;
        i++;
    }
    return number;
}

export function displayScoringOptions() {

    let possibleScoringDice = 0;

    notHeldArray = diceArray.filter(dice => !dice.isHeld);
    const onesObject = diceArray.filter(dice => dice.number === 1 && dice.isHeld === false);
    const twosObject = diceArray.filter(dice => dice.number === 2 && dice.isHeld === false);
    const threesObject = diceArray.filter(dice => dice.number === 3 && dice.isHeld === false);
    const foursObject = diceArray.filter(dice => dice.number === 4 && dice.isHeld === false);
    const fivesObject = diceArray.filter(dice => dice.number === 5 && dice.isHeld === false);
    const sixesObject = diceArray.filter(dice => dice.number === 6 && dice.isHeld === false);

    let ones = onesObject.length;
    let twos = twosObject.length;
    let threes = threesObject.length;
    let fours = foursObject.length;
    let fives = fivesObject.length;
    let sixes = sixesObject.length;

    if (ones >= 3) {

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

    if (ones === 1 && twos === 1 && threes === 1 && fours === 1 && fives === 1 && sixes === 1) {
        const choice = `Straight: 1500 pts`;
        renderPlayerChoice(choice, diceArray, 1500);
        possibleScoringDice++;
    } else {
        if (fives === 2) {
            const choice = `2 fives: 100 pts`;
            renderPlayerChoice(choice, fivesObject, 100);
            possibleScoringDice++;
        }

        if (fives === 1) {
            const choice = `Single five: 50 pts`;
            renderPlayerChoice(choice, fivesObject, 50);
            possibleScoringDice++;
        }

        if (ones === 2) {
            const choice = `2 ones: 200 pts`;
            renderPlayerChoice(choice, onesObject, 200);
            possibleScoringDice++;
        }

        if (ones === 1) {
            const choice = `Single one: 100 pts`;
            renderPlayerChoice(choice, onesObject, 100);
            possibleScoringDice++;
        }

    }

    if (possibleScoringDice === 0) {
        if (notHeldArray.length === 6) {
            const choice = `No scoring dice: 500 pts`;
            renderPlayerChoice(choice, notHeldArray, 500);
        } else {
            renderPlayerZilch();
        }
    }
    if (notHeldArray.length === 0) {
        console.log('notHeldArray.length === 0');
    }
}

let bankValue = 0;

export function bankZero() {

    bankValue = 0;

    bankButton.textContent = `Bank: ${bankValue}`;

    bankButton.disabled = true;

    return bankValue;
}

bankZero();

export function resetDice(one) {
    for (let die of diceArray) {
        die.isHeld = false;
        die.number = one;
        one++;
    }
    diceList.innerHTML = '';
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

function renderPlayerZilch() {
    bankButton.disabled = true;
    bankValue = 0;
    rollButton.disabled = false;
    updateZilch();
    if (getCurrentPlayer().zilchRun === 3) {
        updateScore(-500);
        clearZilchRun();
    }
    renderPlayerScores();
    changeCurrrentPlayer();
    renderTitle();
    updateScore(0);
    resetDice(1);
    bankButton.textContent = 'Bank';
}

function renderPlayerFreeRoll() {
    rollButton.textContent = 'Free Roll!';

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
        const isHeldArray = diceArray.filter(die => die.isHeld);

        if (isHeldArray.length === 6) {
            renderPlayerFreeRoll();
            rollButton.textContent = 'Free Roll!';
        }

        bankValue += score;
        disableRoll(true);
        bankButton.textContent = `Bank ${bankValue}`;

        if (bankValue > 299) {
            bankButton.disabled = false;
        }

        choiceDiv.textContent = '';
        rollButton.disabled = false;

    });

}

bankButton.addEventListener('click', () => {
    updateScore(bankValue);
    renderPlayerScores();
    clearZilchRun();
    changeCurrrentPlayer();
    renderTitle();

});


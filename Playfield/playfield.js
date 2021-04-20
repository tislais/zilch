import { displayScoringOptions } from './score.js';
import diceJS from './dice.js';
import { bankZero } from './score.js';

// const die1 = document.getElementById('die1');
// const die2 = document.getElementById('die2');
// const die3 = document.getElementById('die3');
// const die4 = document.getElementById('die4');
// const die5 = document.getElementById('die5');
// const die6 = document.getElementById('die6');

const diceList = document.getElementById('dice-list');
const rollButton = document.getElementById('roll-button');
const player1Name = document.getElementById('player-1-name');
const player2Name = document.getElementById('player-2-name');
const bankButton = document.getElementById('bank-button');
const playerChoiceDiv = document.getElementById('player-choice');

let dice = diceJS;

const generateRandomNumber = function () {
    return Math.floor((Math.random() * 6) + 1);
};

function renderDiceValue(array) {
    diceList.innerHTML = '';
    const currentRoll = [];
    for (let arrayitem of array) {
        const die = document.createElement('div');
        die.setAttribute('id', arrayitem.id);
        if (!arrayitem.isHeld) {
            arrayitem.number = generateRandomNumber();
            die.textContent = arrayitem.number;
        } else if (arrayitem.isHeld) {
            die.textContent = arrayitem.number;
            die.classList.add('held');
        }

        currentRoll.push(arrayitem.number);
        diceList.append(die);
    }
}

rollButton.addEventListener('click', () => {
    rollButton.disabled = true;
    playerChoiceDiv.innerHTML = '';
    renderDiceValue(dice);
    displayScoringOptions();

});

bankButton.addEventListener('click', () => {
    bankZero();
    playerChoiceDiv.innerHTML = '';

    //end turn after banking somehow some way. impossible
});

export function disableRoll(bankValue, boolean) {
    rollButton.disabled = boolean;
}
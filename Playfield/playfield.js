import { displayScoringOptions } from './score.js';
import diceJS from './dice.js';
import { bankZero } from './score.js';
import { getPlayers } from '../local-storage-utils.js';

const diceList = document.getElementById('dice-list');
const rollButton = document.getElementById('roll-button');
const player1Name = document.getElementById('player-1-name');
const player2Name = document.getElementById('player-2-name');
const bankButton = document.getElementById('bank-button');
const playerChoiceDiv = document.getElementById('player-choice');

const players = getPlayers();

player1Name.textContent = players[0].name;
player2Name.textContent = players[1].name;

let dice = diceJS;

const generateRandomNumber = function() {
    return Math.floor((Math.random() * 6) + 1);
};



function renderDiceValue(array) {
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

        } else if (arrayitem.isHeld) {

            die.classList.add('held');
        }

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

rollButton.addEventListener('click', () => {
    rollButton.disabled = true;
    playerChoiceDiv.innerHTML = '';
    renderDiceValue(dice);
    displayScoringOptions();
    rollButton.textContent = 'Roll';

});

bankButton.addEventListener('click', () => {
    bankZero();
    playerChoiceDiv.innerHTML = '';

    dice.forEach(die => { die.isHeld = false; });
});

export function disableRoll(bankValue, boolean) {
    rollButton.disabled = boolean;
}
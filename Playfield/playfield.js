import { displayScoringOptions } from './score.js';
import { getPlayers } from '../local-storage-utils.js';

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

import diceJS from './dice.js';

let dice = diceJS;

player1Name.textContent = getPlayers()[0].name;
player2Name.textContent = getPlayers()[1].name; 

const generateRandomNumber = function() {
    return Math.floor((Math.random() * 6) + 1);
};

function renderDiceValue(array) {
    diceList.innerHTML = '';
    const currentRoll = [];
    for (let arrayitem of array) {
        const die = document.createElement('div');
        //die.classList.add(arrayitem.id);
        die.setAttribute('id', arrayitem.id);
        arrayitem.number = generateRandomNumber();
        die.textContent = arrayitem.number;
        
        currentRoll.push(arrayitem.number);
        diceList.append(die);
    }

    // die1.textContent = currentRoll[0];
    // die2.textContent = currentRoll[1];
    // die3.textContent = currentRoll[2];
    // die4.textContent = currentRoll[3];
    // die5.textContent = currentRoll[4];
    // die6.textContent = currentRoll[5];

    // const ones = getOccurrence(currentRoll, 1);
    // const twos = getOccurrence(currentRoll, 2);
    // const threes = getOccurrence(currentRoll, 3);
    // const fours = getOccurrence(currentRoll, 4);
    // const fives = getOccurrence(currentRoll, 5);
    // const sixes = getOccurrence(currentRoll, 6);
}

//function getOccurrence(array, value) {
//     return array.filter((v) => (v === value)).length;
// }

rollButton.addEventListener('click', () => {
    renderDiceValue(dice);
    displayScoringOptions();
});



bankButton.addEventListener('click', () => {

})
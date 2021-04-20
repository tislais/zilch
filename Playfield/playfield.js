import { displayScoringOptions } from './score.js';

// const die1 = document.getElementById('die1');
// const die2 = document.getElementById('die2');
// const die3 = document.getElementById('die3');
// const die4 = document.getElementById('die4');
// const die5 = document.getElementById('die5');
// const die6 = document.getElementById('die6');

const diceList = document.getElementById('dice-list');
const rollButton = document.getElementById('roll-button');

import diceJS from './dice.js';

let dice = diceJS;

const generateRandomNumber = function() {
    return Math.floor((Math.random() * 6) + 1);
};

function renderDiceValue(array) {
    diceList.innerHTML = '';
    const currentRoll = [];
    for (let arrayitem of array) {
        const die = document.createElement('div');
        die.classList.add(arrayitem.id);
        die.textContent = arrayitem.number;
        arrayitem.number = generateRandomNumber();
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

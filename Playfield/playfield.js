// const arrayOfSix = [1, 2, 3, 4, 5, 6];
// const diceDisplay = document.getElementById('dice-display');
// const scoring = document.getElementById('scoring');

// const generateRandomNumber = function(){
// 	return Math.floor((Math.random() * 6) + 1);
// }

// const currentRoll = [];

// arrayOfSix.forEach(item => {
// 	item = generateRandomNumber();
//   currentRoll.push(item);
// 	const dieDisplay = document.createElement('li');
//   dieDisplay.textContent = item;
//   diceDisplay.append(dieDisplay);
// })


// function getOccurrence(array, value) {
//     return array.filter((v) => (v === value)).length;
// }

// const ones = getOccurrence(currentRoll, 1);
// const twos = getOccurrence(currentRoll, 2);
// const threes = getOccurrence(currentRoll, 3);
// const fours = getOccurrence(currentRoll, 4);
// const fives = getOccurrence(currentRoll, 5);
// const sixes = getOccurrence(currentRoll, 6);

// scoring.textContent = `Ones: ${ones}, Twos: ${twos}, Threes: ${threes}, Fours: ${fours}, Fives: ${fives}, Sixes: ${sixes}`;

const die1 = document.getElementById('die1');
const die2 = document.getElementById('die2');
const die3 = document.getElementById('die3');
const die4 = document.getElementById('die4');
const die5 = document.getElementById('die5');
const die6 = document.getElementById('die6');

const rollButton = document.getElementById('roll-button');

import diceJS from './dice.js';

let dice = diceJS;

const generateRandomNumber = function () {
    return Math.floor((Math.random() * 6) + 1);
};

function renderDiceValue(array) {
    const currentRoll = [];
    for (let arrayitem of array) {

        arrayitem.number = generateRandomNumber();

        currentRoll.push(arrayitem.number);
    }

    die1.textContent = currentRoll[0];
    die2.textContent = currentRoll[1];
    die3.textContent = currentRoll[2];
    die4.textContent = currentRoll[3];
    die5.textContent = currentRoll[4];
    die6.textContent = currentRoll[5];

    const ones = getOccurrence(currentRoll, 1);
    const twos = getOccurrence(currentRoll, 2);
    const threes = getOccurrence(currentRoll, 3);
    const fours = getOccurrence(currentRoll, 4);
    const fives = getOccurrence(currentRoll, 5);
    const sixes = getOccurrence(currentRoll, 6);
}

function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}

rollButton.addEventListener('click', () => {
    renderDiceValue(dice);
});

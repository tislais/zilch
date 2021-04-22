// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { createPlayers, setWinningScore } from './local-storage-utils.js';

const form = document.getElementById('form');
const inputOne = document.getElementById('player-one-name');
const inputTwo = document.getElementById('player-two-name');
const rulesButton = document.getElementById('rules-button');
const rulesSection = document.querySelector('section');
const playerSetScore = document.getElementById('set-score');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    createPlayers(inputOne.value, inputTwo.value);
    setWinningScore(playerSetScore.value);

    window.location = './Playfield/index.html';
});

rulesButton.addEventListener('click', () => {
    if (rulesSection.style.display === 'none') {
        rulesSection.style.display = 'block';
    } else {
        rulesSection.style.display = 'none';
    }
});
// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { createPlayers, setWinningScore } from './local-storage-utils.js';

const form = document.getElementById('form');
const inputOne = document.getElementById('player-one-name');
const inputTwo = document.getElementById('player-two-name');
const rulesButton = document.getElementById('rules-button');
const playerSetScore = document.getElementById('set-score');
const scoringButton = document.getElementById('scoring-button');
const rulesModal = document.getElementById('rules-modal');
const scoringModal = document.getElementById('scoring-modal');
const rulesModalClose = document.getElementById('rules-modal-close');
const scoringModalClose = document.getElementById('scoring-modal-close');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    createPlayers(inputOne.value, inputTwo.value);
    setWinningScore(playerSetScore.value);

    window.location = './Playfield/index.html';
});



rulesButton.addEventListener('click', () => {
    if (rulesModal.style.display === 'none') {
        rulesModal.style.display = 'block';
    } else {
        rulesModal.style.display = 'none';
    }
});

rulesModal.addEventListener('click', (e) => {
    rulesModal.style.display = 'none';
    if (e.target === rulesModal) {
        rulesModal.style.display = 'none';
    }
});

scoringModal.addEventListener('click', (e) => {
    scoringModal.style.display = 'none';
    if (e.target === scoringModal) {
        scoringModal.style.display = 'none';
    }
});

rulesModalClose.addEventListener('click', () => {
    rulesModal.style.display = 'none';
});

scoringButton.addEventListener('click', () => {
    if (scoringModal.style.display === 'none') {
        scoringModal.style.display = 'block';
    } else {
        scoringModal.style.display = 'none';
    }
});

scoringModalClose.addEventListener('click', () => {
    scoringModal.style.display = 'none';
});
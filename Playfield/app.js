import { renderTitle, renderPlayerScores } from './render.js';
import { updateScore, clearZilchRun, changeCurrrentPlayer, getCurrentPlayer, getPlayers } from '../local-storage-utils.js';
import { checkLastRound, resetDice, bankZero, renderDiceValue, displayScoringOptions } from './score.js';
import dice from './dice.js';

const bankButton = document.getElementById('bank-button');
const rollButton = document.getElementById('roll-button');
const rulesButton = document.getElementById('rules-button');
const scoringButton = document.getElementById('scoring-button');
const rulesModal = document.getElementById('rules-modal');
const scoringModal = document.getElementById('scoring-modal');
const rulesModalClose = document.getElementById('rules-modal-close');
const scoringModalClose = document.getElementById('scoring-modal-close');


const player1Name = document.getElementById('player-1-name');
const player2Name = document.getElementById('player-2-name');

const playerChoiceDiv = document.getElementById('player-choice');

let players = getPlayers();

renderTitle();

player1Name.textContent = players[0].name;
player2Name.textContent = players[1].name;

resetDice(1);

bankButton.disabled = true;

bankButton.addEventListener('click', () => {
    // such an awesome compose function! amazing work here!!
    updateScore(getCurrentPlayer().bank);
    renderPlayerScores();
    clearZilchRun();
    changeCurrrentPlayer();
    renderTitle();
    checkLastRound();
    resetDice(1);
    bankZero();
    playerChoiceDiv.innerHTML = '';
    dice.forEach(die => { die.isHeld = false; });
    rollButton.textContent = 'Roll';
});

rollButton.addEventListener('click', () => {
    rollButton.disabled = true;
    playerChoiceDiv.innerHTML = '';
    renderDiceValue(dice);
    displayScoringOptions();
    rollButton.textContent = 'Roll';
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
import { renderTitle, renderPlayerScores } from './render.js';
import { updateScore, clearZilchRun, changeCurrrentPlayer, getCurrentPlayer, getPlayers } from '../local-storage-utils.js';
import { checkLastRound, resetDice, bankZero, renderDiceValue, displayScoringOptions } from './score.js';
import diceJS from './dice.js';


const bankButton = document.getElementById('bank-button');
const rollButton = document.getElementById('roll-button');

const player1Name = document.getElementById('player-1-name');
const player2Name = document.getElementById('player-2-name');

const playerChoiceDiv = document.getElementById('player-choice');

let dice = diceJS;

let players = getPlayers();


renderTitle();

player1Name.textContent = players[0].name;
player2Name.textContent = players[1].name;

bankButton.disabled = true;

bankButton.addEventListener('click', () => {
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
});

rollButton.addEventListener('click', () => {
    rollButton.disabled = true;
    playerChoiceDiv.innerHTML = '';
    renderDiceValue(dice);
    displayScoringOptions();
    rollButton.textContent = 'Roll';
});
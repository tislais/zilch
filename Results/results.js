import { getPlayers } from '../local-storage-utils.js';

const winner = document.querySelector('span');
const pOneName = document.getElementById('p1-name');
const pOneTurns = document.getElementById('p1-turns');
const pOneZilches = document.getElementById('p1-zilches');
const pOneScore = document.getElementById('p1-score');
const pTwoName = document.getElementById('p2-name');
const pTwoTurns = document.getElementById('p2-turns');
const pTwoZilches = document.getElementById('p2-zilches');
const pTwoScore = document.getElementById('p2-score');
const button = document.querySelector('button');


const playerOne = getPlayers()[0];
const playerTwo = getPlayers()[1];

if (playerOne.score > playerTwo.score) {
    winner.textContent = playerOne.name;
}

if (playerOne.score < playerTwo.score) {
    winner.textContent = playerTwo.name;
}

pOneName.textContent = playerOne.name;
pOneTurns.textContent = playerOne.turnCount;
pOneZilches.textContent = playerOne.zilches;
pOneScore.textContent = playerOne.score;

pTwoName.textContent = playerTwo.name;
pOneTurns.textContent = playerOne.turnCount;
pTwoZilches.textContent = playerTwo.zilches;
pTwoScore.textContent = playerTwo.score;

button.addEventListener('click', () => {
    localStorage.clear();

    window.location = '../index.html';
});




import { getPlayers, getCurrentPlayer } from '../local-storage-utils.js';

const playerOneTable = document.getElementById('player-one-table');
const playerTwoTable = document.getElementById('player-two-table');

const title = document.querySelector('span');

export function renderPlayerScores() {

    let playerOne = getPlayers()[0];
    let playerTwo = getPlayers()[1];

    let player = getCurrentPlayer();

    let totalScore = player.score;
    let roundScore = player.roundScore;

    const newTr = document.createElement('tr');
    const playerRoundScore = document.createElement('td');
    const playerTotalScore = document.createElement('td');

    playerRoundScore.textContent = roundScore;
    playerTotalScore.textContent = totalScore;

    if (playerOne.turn === true) {
        newTr.append(playerRoundScore, playerTotalScore);
        playerOneTable.append(newTr);
    }

    if (playerTwo.turn === true) {
        newTr.append(playerRoundScore, playerTotalScore);
        playerTwoTable.append(newTr);
    }
}

export function renderZilch() {

    const playerOne = getPlayers()[0];
    const playerTwo = getPlayers()[1];

    const player = getCurrentPlayer();

    let totalScore = player.score;

    const newTr = document.createElement('tr');
    const zilchText = document.createElement('td');
    const playerRoundScore = document.createElement('td');
    const playerTotalScore = document.createElement('td');
    const thirdZilchTd = document.createElement('td');

    thirdZilchTd.textContent = 'ZILCH! -500';

    zilchText.textContent = 'ZILCH!';
    playerRoundScore.textContent = totalScore;
    playerTotalScore.textContent = '-500';

    if (playerOne.turn === true) {
        if (player.zilchRun === 3) {
            newTr.append(thirdZilchTd, playerRoundScore);
        } else {
            newTr.append(zilchText, playerRoundScore);
        }
        playerOneTable.append(newTr);

    }

    if (playerTwo.turn === true) {
        if (player.zilchRun === 3) {
            newTr.append(thirdZilchTd, playerRoundScore);
        } else {
            newTr.append(zilchText, playerRoundScore);
        }
        playerTwoTable.append(newTr);

    }
}

export function renderTitle() {
    const player = getCurrentPlayer();
    title.textContent = player.name;
}

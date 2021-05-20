
import { getPlayers, getCurrentPlayer } from '../local-storage-utils.js';

const playerOneTable = document.getElementById('player-one-table');
const playerTwoTable = document.getElementById('player-two-table');

const title = document.querySelector('span');

export function renderPlayerScores() {

    // you could use destructuring here like so
    let [playerOne, playerTwo] = getPlayers();

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
    const players = getPlayers();
    const currentPlayer = getCurrentPlayer();

    let totalScore = currentPlayer.score;

    const newTr = document.createElement('tr');
    const zilchText = document.createElement('td');
    const playerRoundScore = document.createElement('td');
    const playerTotalScore = document.createElement('td');
    const thirdZilchTd = document.createElement('td');

    thirdZilchTd.textContent = 'ZILCH! -500';

    zilchText.textContent = 'ZILCH!';
    playerRoundScore.textContent = totalScore;
    playerTotalScore.textContent = '-500';
    const tables = [playerOneTable, playerTwoTable];
    // you could use a loop here as well
    players.forEach((player, i) => {
        if (player.turn === true) {
            if (player.zilchRun === 3) {
                newTr.append(thirdZilchTd, playerRoundScore);
            } else {
                newTr.append(zilchText, playerRoundScore);
            }
            tables[i].append(newTr);
    
        }
    });
}

export function renderTitle() {
    const player = getCurrentPlayer();
    title.textContent = player.name;
}

import { getPlayers, getCurrentPlayer } from '../local-storage-utils.js';


const playerOneTable = document.getElementById('player-one-table');
const playerTwoTable = document.getElementById('player-two-table');

const title = document.querySelector('span');

export function renderPlayerScores() {

    const playerOne = getPlayers()[0];
    const playerTwo = getPlayers()[1];

    const player = getCurrentPlayer();

    let totalScore = player.score;
    let roundScore = player.roundScore;

    const newTr = document.createElement('tr');
    const playerRoundScore = document.createElement('td');
    const playerTotalScore = document.createElement('td');
    const zilchScore = document.createElement('td');


    playerRoundScore.textContent = roundScore;
    playerTotalScore.textContent = totalScore;
    zilchScore.textContent = 'ZILCH!';

    if (playerOne.turn === true) {
        if (playerOne.zilchRun > 0) {
            newTr.append(zilchScore, playerTotalScore);
            playerOneTable.append(newTr);
        } else {

            newTr.append(playerRoundScore, playerTotalScore);
            playerOneTable.append(newTr); 
        }
    }

    if (playerTwo.turn === true) {
        if (playerTwo.zilchRun > 0) {
            newTr.append(zilchScore, playerTotalScore);
            playerTwoTable.append(newTr);
        } else {

            newTr.append(playerRoundScore, playerTotalScore);
            playerTwoTable.append(newTr); 
        }
    }

}

export function renderTitle() {
    const player = getCurrentPlayer();
    title.textContent = player.name;
}

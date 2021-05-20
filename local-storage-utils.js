const PLAYERS = 'PLAYERS';
const WINNINGSCORE = 'WINNINGSCORE';

export function setPlayers(players) { // takes player array and sets them in local storage

    const stringyPlayers = JSON.stringify(players);

    localStorage.setItem(PLAYERS, stringyPlayers);

}

export function getPlayers() {  // gets local storage and returns array

    const stringyPlayers = localStorage.getItem(PLAYERS);

    const parsedPlayers = JSON.parse(stringyPlayers);

    return parsedPlayers;
}

export function setWinningScore(score) {
    const stringyScore = JSON.stringify(score);

    localStorage.setItem(WINNINGSCORE, stringyScore);
}

export function getWinningScore() {  // gets local storage and returns array

    const stringyScore = localStorage.getItem(WINNINGSCORE);

    const parsedScore = JSON.parse(stringyScore);

    return parsedScore;
}

const makeInitialPlayer = (name, turn) => ({
    name,
    turn,
    roundScore: 0,
    score: 0,
    zilches: 0,
    turnCount: 0,
    diceroll: 0,
    zilchRun: 0,
    bank: 0
});

export function createPlayers(nameOne, nameTwo) {
    const playerOne = makeInitialPlayer(nameOne, true); 
    const playerTwo = makeInitialPlayer(nameTwo, false); 

    const players = [playerOne, playerTwo];

    setPlayers(players);
}

export function updateScore(playerScore) {

    const players = getPlayers();

    const playerName = getCurrentPlayer().name; //thanks tis

    // should do the trick
    for (let player of players) {
        if (player.name === playerName) {
            player.score += playerScore;
            player.roundScore = playerScore;
            player.turnCount += 1;
        }
    }

    setPlayers(players);
}


export function clearZilchRun() {

    const players = getPlayers();

    const playerName = getCurrentPlayer().name;

    // again, seems like a loop should work, unless i'm missing something
    for (let player of players) {
        if (player.name === playerName) {
            player.zilchRun = 0;
        }
    }


    setPlayers(players);
}

export function updateZilch() {

    const players = getPlayers();

    const playerName = getCurrentPlayer().name;
    
    for (let player of players) {
        if (player.name === playerName) {
            player.zilches = player.zilches + 1;
            player.zilchRun = player.zilchRun + 1;
        }
    }

    setPlayers(players);
}

export function changeCurrrentPlayer() {

    const players = getPlayers();

    players[0].turn = !players[0].turn;
    players[1].turn = !players[1].turn;

    setPlayers(players);
}

export function getCurrentPlayer() {

    const players = getPlayers();

    for (let player of players) {
        if (player.turn) return player;
    }
}

export function setBankZero() {

    const players = getPlayers();

    const playerName = getCurrentPlayer().name;

    for (let player of players) {
        if (player.name === playerName) {
            player.bank = 0;
        }
    }

    setPlayers(players);

}

export function increaseBank(score) {

    const players = getPlayers();

    const playerName = getCurrentPlayer().name; //thanks tis

    for (let player of players) {
        if (player.name === playerName) {
            player.bank = player.bank + score;
        }
    }


    setPlayers(players);

}
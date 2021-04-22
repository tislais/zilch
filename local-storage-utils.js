const PLAYERS = 'PLAYERS';

export function setPlayers(players) { // takes player array and sets them in local storage

    const stringyPlayers = JSON.stringify(players);

    localStorage.setItem(PLAYERS, stringyPlayers);

}

export function getPlayers() {  // gets local storage and returns array

    const stringyPlayers = localStorage.getItem(PLAYERS);

    const parsedPlayers = JSON.parse(stringyPlayers);

    return parsedPlayers;
}

export function createPlayers(nameOne, nameTwo) {
    const playerOne = {

        name: nameOne,
        roundScore: 0,
        score: 0,
        zilches: 0,
        isTurn: true,
        diceroll: 0,
        turn: true,
        zilchRun: 0
    };

    const playerTwo = {
        name: nameTwo,
        roundScore: 0,
        score: 0,
        zilches: 0,
        isTurn: false,
        diceroll: 0,
        turn: false,
        zilchRun: 0
    };

    const players = [playerOne, playerTwo];

    setPlayers(players);

}

export function updateScore(playerScore) {

    let players = getPlayers();

    const playerName = getCurrentPlayer().name; //thanks tis

    if (players[0].name === playerName) {
        players[0].score += playerScore;
        players[0].roundScore = playerScore;
    }
    if (players[1].name === playerName) {
        players[1].score += playerScore;
        players[1].roundScore = playerScore;

    }

    setPlayers(players);
}


export function clearZilchRun() {
    let players = getPlayers();

    const playerName = getCurrentPlayer().name;

    if (players[0].name === playerName) {
        players[0].zilchRun = 0;

    }
    if (players[1].name === playerName) {
        players[1].zilchRun = 0;

    }

    setPlayers(players);

}

export function updateZilch() {

    let players = getPlayers();

    const playerName = getCurrentPlayer().name;

    if (players[0].name === playerName) {
        players[0].zilches = players[0].zilches + 1;
        players[0].zilchRun = players[0].zilchRun + 1;
    }
    if (players[1].name === playerName) {
        players[1].zilches = players[1].zilches + 1;
        players[1].zilchRun = players[1].zilchRun + 1;
        
}

    setPlayers(players);
}

export function changeCurrrentPlayer() {

    let players = getPlayers();

    players[0].turn = !players[0].turn;
    players[1].turn = !players[1].turn;

    setPlayers(players);
}

export function getCurrentPlayer() {
    const players = getPlayers();

    for (let player of players) {
        if (player.turn === true) return player;
    }
}
const PLAYERS = 'PLAYERS';

export function setPlayers(players) { // takes player object and sets them in local storage

    const stringyPlayers = JSON.stringify(players);

    localStorage.setItem(PLAYERS, stringyPlayers);

}

export function getPlayers() {  // gets local storage and returns object

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
        turn: true
    };

    const playerTwo = {
        name: nameTwo,
        roundScore: 0,
        score: 0,
        zilches: 0,
        isTurn: false,
        diceroll: 0,
        turn: false
    };

    const players = [playerOne, playerTwo];

    setPlayers(players);

}

export function updateScore(playerScore) {
    let players = getPlayers();
    const playerName = getCurrentPlayer();

    if (players[0].name === playerName) {
        players[0].score += playerScore;
    }
    if (players[1].name === playerName) {
        players[1].score += playerScore;
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
        if (player.turn) return player.name;
    }
}

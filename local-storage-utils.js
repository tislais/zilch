const PLAYERS = 'PLAYERS';

export function setPlayers(players) { // takes player array of objects and sets them in local storage

    const stringyPlayers = JSON.stringify(players);

    localStorage.setItem(PLAYERS, stringyPlayers);

}

export function getPlayers() {  // gets local storage and returns array of objects

    const stringyPlayers = localStorage.getItem(PLAYERS);

    const parsedPlayers = JSON.parse(stringyPlayers);

    return parsedPlayers;
}

export function createPlayers(nameOne, nameTwo) {
    const playerOne = {

        name: nameOne,
        score: 0,
        zilches: 0,
        isTurn: true,
        diceroll: 0,
    };

    const playerTwo = {
        name: nameTwo,
        score: 0,
        zilches: 0,
        isTurn: false,
        diceroll: 0,
    };
    console.log(playerOne, playerTwo);
}
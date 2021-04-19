// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { setPlayers, getPlayers, createPlayers } from '../local-storage-utils.js';

const test = QUnit.test;

test('time to test setPlayers function. will take user data from inputs and place in local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = {
        name: 'person',
        score: 0,
        zilches: 0,
        isTurn: true,
        diceroll: 0,
    };

    setPlayers(player);

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = JSON.parse(localStorage.getItem('PLAYERS'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, player);
});

test('time to test getPlayers function. will get player object from local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = {
        name: 'person',
        score: 0,
        zilches: 0,
        isTurn: true,
        diceroll: 0,
    };

    localStorage.setItem('PLAYERS', JSON.stringify(player));

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getPlayers();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, player);
});

test('time to test createPlayers. will create players', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const playerOne = {
        name: 'john',
        score: 0,
        zilches: 0,
        isTurn: true,
        diceroll: 0,
    };

    const playerTwo = {
        name: 'sarah',
        score: 0,
        zilches: 0,
        isTurn: false,
        diceroll: 0,
    };

    createPlayers('john', 'sarah');

    // const actual = getPlayers();

    const expected = [playerOne, playerTwo];

    const actual = JSON.parse(localStorage.getItem('PLAYERS'));

    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { createPlayers } from './local-storage-utils.js';

const button = document.querySelector('button');
const inputOne = document.getElementById('player-one-name');
const inputTwo = document.getElementById('player-two-name');

button.addEventListener('click', () => {

    createPlayers(inputOne.value, inputTwo.value);

    window.location = './Playfield/index.html';
});
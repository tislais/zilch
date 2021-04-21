import { changeCurrrentPlayer, updateScore } from '../local-storage-utils.js';
import diceJS from './dice.js';
import { renderPlayerScores, renderTitle } from './render.js';

import { disableRoll } from './playfield.js';

const playerChoiceDiv = document.getElementById('player-choice');

const bankButton = document.getElementById('bank-button');

const rollButton = document.getElementById('roll-button');

const diceArray = diceJS;
let notHeldArray = diceArray.filter(dice => !dice.isHeld);

renderTitle();

export function displayScoringOptions() {

    

    let possibleScoringDice = 0;

    notHeldArray = diceArray.filter(dice => !dice.isHeld);
    const onesObject = diceArray.filter(dice => dice.number === 1 && dice.isHeld === false);
    const twosObject = diceArray.filter(dice => dice.number === 2 && dice.isHeld === false);
    const threesObject = diceArray.filter(dice => dice.number === 3 && dice.isHeld === false);
    const foursObject = diceArray.filter(dice => dice.number === 4 && dice.isHeld === false);
    const fivesObject = diceArray.filter(dice => dice.number === 5 && dice.isHeld === false);
    const sixesObject = diceArray.filter(dice => dice.number === 6 && dice.isHeld === false);
    
    let ones = onesObject.length;
    let twos = twosObject.length;
    let threes = threesObject.length;
    let fours = foursObject.length;
    let fives = fivesObject.length;
    let sixes = sixesObject.length;

    if (ones >= 3) {
        if (ones === 3) {
            const choice = `3 ones: 1000 pts`;
            renderPlayerChoice(choice, onesObject, 1000,);
            possibleScoringDice++;
        } else if (ones === 4) {
            const choice = `4 ones: 2000 pts`;
            renderPlayerChoice(choice, onesObject, 2000);
            possibleScoringDice++;
        } else if (ones === 5) {
            const choice = `5 ones: 4000 pts`;
            renderPlayerChoice(choice, onesObject, 4000);
            possibleScoringDice++;
        } else if (ones === 6) {
            const choice = `6 ones: 8000 pts`;
            renderPlayerChoice(choice, onesObject, 8000);
            possibleScoringDice++;
        }
    }

    //if (ones >= 3) { // for every increase over three of array length double result 
       // let threeScore = 500;
        //let i = 3;

        //while (i <= ones) {
    //         threeScore = threeScore * 2;
    //         i++;
    //     }

    //     const choice = `${ones} ones: ${threeScore} pts`;

    //     renderPlayerChoice(choice, onesObject, threeScore);
    // }

    if (twos >= 3) {
        if (twos === 3) {
            const choice = `3 twos: 200 pts`;
            renderPlayerChoice(choice, twosObject, 200);
            possibleScoringDice++;
        } else if (twos === 4) {
            const choice = `4 twos: 400 pts`;
            renderPlayerChoice(choice, twosObject, 400);
            possibleScoringDice++;
        } else if (twos === 5) {
            const choice = `5 twos: 800 pts`;
            renderPlayerChoice(choice, twosObject, 800);
            possibleScoringDice++;
        } else if (ones === 6) {
            const choice = `6 twos: 1600 pts`;
            renderPlayerChoice(choice, twosObject, 1600);
            possibleScoringDice++;
        }
    }

    if (threes >= 3) {
        if (threes === 3) {
            const choice = `3 threes: 300 pts`;
            renderPlayerChoice(choice, threesObject, 300);
            possibleScoringDice++;
        } else if (threes === 4) {
            const choice = `4 threes: 600 pts`;
            renderPlayerChoice(choice, threesObject, 600);
            possibleScoringDice++;
        } else if (threes === 5) {
            const choice = `5 threes: 1200 pts`;
            renderPlayerChoice(choice, threesObject, 1200);
            possibleScoringDice++;
        } else if (threes === 6) {
            const choice = `6 threes: 2400 pts`;
            renderPlayerChoice(choice, threesObject, 2400);
            possibleScoringDice++;
        }
    }

    if (fours >= 3) {
        if (fours === 3) {
            const choice = `3 fours: 400 pts`;
            renderPlayerChoice(choice, foursObject, 400);
            possibleScoringDice++;
        } else if (fours === 4) {
            const choice = `4 fours: 800 pts`;
            renderPlayerChoice(choice, foursObject, 800);
            possibleScoringDice++;
        } else if (fours === 5) {
            const choice = `5 fours: 1600 pts`;
            renderPlayerChoice(choice, foursObject, 1600);
            possibleScoringDice++;
        } else if (fours === 6) {
            const choice = `6 fours: 3200 pts`;
            renderPlayerChoice(choice, foursObject, 3200);
            possibleScoringDice++;
        }
    }

    if (fives >= 3) {
        if (fives === 3) {
            const choice = `3 fives: 500 pts`;
            renderPlayerChoice(choice, fivesObject, 500);
            possibleScoringDice++;
        } else if (fives === 4) {
            const choice = `4 fives: 1000 pts`;
            renderPlayerChoice(choice, fivesObject, 1000);
            possibleScoringDice++;
        } else if (fives === 5) {
            const choice = `5 fives: 2000 pts`;
            renderPlayerChoice(choice, fivesObject, 2000);
            possibleScoringDice++;
        } else if (fives === 6) {
            const choice = `6 fives: 4000 pts`;
            renderPlayerChoice(choice, fivesObject, 4000);
            possibleScoringDice++;
        }
    }

    if (sixes >= 3) {
        if (sixes === 3) {
            const choice = `3 sixes: 600 pts`;
            renderPlayerChoice(choice, sixesObject, 600);
            possibleScoringDice++;
        } else if (sixes === 4) {
            const choice = `4 sixes: 1200 pts`;
            renderPlayerChoice(choice, sixesObject, 1200);
            possibleScoringDice++;
        } else if (sixes === 5) {
            const choice = `5 sixes: 2400 pts`;
            renderPlayerChoice(choice, sixesObject, 2400);
            possibleScoringDice++;
        } else if (sixes === 6) {
            const choice = `6 sixes: 4800 pts`;
            renderPlayerChoice(choice, sixesObject, 4800);
            possibleScoringDice++;
        }
    }

    if (ones === 1 && twos === 1 && threes === 1 && fours === 1 && fives === 1 && sixes === 1) {
        const choice = `Straight: 1500 pts`;
        renderPlayerChoice(choice, diceArray, 1500);
        possibleScoringDice++;
    }

    if (fives === 2) {
        const choice = `2 fives: 100 pts`;
        renderPlayerChoice(choice, fivesObject, 100);
        possibleScoringDice++;
    }

    if (fives === 1) {
        const choice = `Single five: 50 pts`;
        renderPlayerChoice(choice, fivesObject, 50);
        possibleScoringDice++;
    }

    if (ones === 2) {
        const choice = `2 ones: 200 pts`;
        renderPlayerChoice(choice, onesObject, 200);
        possibleScoringDice++;
    }

    if (ones === 1) {
        const choice = `Single one: 100 pts`;
        renderPlayerChoice(choice, onesObject, 100);
        possibleScoringDice++;

    }
    if (possibleScoringDice === 0) {
        if (notHeldArray.length === 6) {
            const choice = `No scoring dice: 500 pts`;
            renderPlayerChoice(choice, notHeldArray, 500);
        } 
        
        else {
            renderPlayerZilch();
            //const choice = 'Zilch';
            //renderPlayerChoice(choice, notHeldArray, 0);
            changeCurrrentPlayer();
            renderTitle();
            updateScore();
        }
    }
    if (notHeldArray.length === 0) {
        console.log('notHeldArray.length === 0');
    }
}

let bankValue = 0;

export function bankZero() {

    bankValue = 0;

    bankButton.textContent = `Bank: ${bankValue}`;

    bankButton.disabled = true;

    return bankValue;
}

bankZero();

function renderPlayerZilch(){
    
    console.log('ZILCH');

}

function renderPlayerReroll() {
    console.log('REROLL TIME');
}

function renderPlayerChoice(choice, scoringDice, score) {

    const choiceDiv = document.createElement('div');
    choiceDiv.textContent = choice;

    if (!(scoringDice[0].isHeld)) {
        playerChoiceDiv.append(choiceDiv);
    }

    choiceDiv.addEventListener('click', () => {
        
        scoringDice.forEach(die => {
            die.isHeld = true;
            
            const held = document.getElementById(die.id);
            held.classList.add('held');
        });
        const isHeldArray = diceArray.filter(die => die.isHeld);

        if (isHeldArray.length === 6) {
            renderPlayerReroll();
            rollButton.textContent = 'Free Roll!';
        }

        bankValue += score;
        disableRoll(true);
        bankButton.textContent = `Bank ${bankValue}`;

        if (bankValue > 299) {
            bankButton.disabled = false;
        }

        choiceDiv.textContent = '';
        rollButton.disabled = false;

    });

}

bankButton.addEventListener('click', () => {
    updateScore(bankValue);
    renderPlayerScores();
    changeCurrrentPlayer();
    renderTitle();
});
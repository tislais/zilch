import diceJS from './dice.js';

const playerChoiceDiv = document.getElementById('player-choice');

export function displayScoringOptions() {
    const diceArray = diceJS;

    const onesObject = diceArray.filter(dice => dice.number === 1);
    const twosObject = diceArray.filter(dice => dice.number === 2);
    const threesObject = diceArray.filter(dice => dice.number === 3);
    const foursObject = diceArray.filter(dice => dice.number === 4);
    const fivesObject = diceArray.filter(dice => dice.number === 5);
    const sixesObject = diceArray.filter(dice => dice.number === 6);

    let ones = onesObject.length;
    let twos = twosObject.length;
    let threes = threesObject.length;
    let fours = foursObject.length;
    let fives = fivesObject.length;
    let sixes = sixesObject.length;

    let possibleScoringDice = 0;

    if (ones >= 3) {
        if (ones === 3) {
            console.log(onesObject);
            const choice = `3 ones: 1000 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (ones === 4) {
            const choice = `4 ones: 2000 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (ones === 5) {
            const choice = `5 ones: 4000 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (ones === 6) {
            const choice = `6 ones: 8000 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        }
    } 
    if (twos >= 3) {
        if (twos === 3) {
            const choice = `3 twos: 200 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (twos === 4) {
            const choice = `4 twos: 400 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (twos === 5) {
            const choice = `5 twos: 800 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (ones === 6) {
            const choice = `6 twos: 1600 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        }
    } 
    if (threes >= 3) {
        if (threes === 3) {
            const choice = `3 threes: 300 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (threes === 4) {
            const choice = `4 threes: 600 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (threes === 5) {
            const choice = `5 threes: 1200 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (threes === 6) {
            const choice = `6 threes: 2400 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        }
    } 
    if (fours >= 3) {
        if (fours === 3) {
            const choice = `3 fours: 400 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (fours === 4) {
            const choice = `4 fours: 800 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (fours === 5) {
            const choice = `5 fours: 1600 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (fours === 6) {
            const choice = `6 fours: 3200 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        }
    } 
    if (fives >= 3) {
        if (fives === 3) {
            const choice = `3 fives: 500 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (fives === 4) {
            const choice = `4 fives: 1000 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (fives === 5) {
            const choice = `5 fives: 2000 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (fives === 6) {
            const choice = `6 fives: 4000 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        }
    } 
    if (sixes >= 3) {
        if (sixes === 3) {
            const choice = `3 sixes: 600 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (sixes === 4) {
            const choice = `4 sixes: 1200 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (sixes === 5) {
            const choice = `5 sixes: 2400 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        } else if (sixes === 6) {
            const choice = `6 sixes: 4800 pts`;
            renderPlayerChoice(choice);
            possibleScoringDice++;
        }
    } 
    if (ones === 1 && twos === 1 && threes === 1 && fours === 1 && fives === 1 && sixes === 1) {
        const choice = `Flush: 1500 pts`;
        renderPlayerChoice(choice);
        possibleScoringDice++;
    } 
    if (fives === 2) {
        const choice = `2 fives: 100 pts`;
        renderPlayerChoice(choice);
        possibleScoringDice++;
    } 
    if (fives === 1) {
        const choice = `Single five: 50 pts`;
        renderPlayerChoice(choice);
        possibleScoringDice++;
    } 
    if (ones === 2) {
        const choice = `2 ones: 200 pts`;
        renderPlayerChoice(choice);
        possibleScoringDice++;
    } 
    if (ones === 1) {
        const choice = `Single one: 100 pts`;
        renderPlayerChoice(choice);
        possibleScoringDice++;
    } else if (possibleScoringDice === 0) {
        const choice = `No scoring dice: 500 pts`;
        renderPlayerChoice(choice);
    }
}

function renderPlayerChoice(choice) {
    const choiceDiv = document.createElement('div');
    choiceDiv.textContent = choice;
    playerChoiceDiv.append(choiceDiv);

    choiceDiv.addEventListener('click', () => {
        alert(choice);
    });
}
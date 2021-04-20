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

    const ones = onesObject.length;
    const twos = twosObject.length;
    const threes = threesObject.length;
    const fours = foursObject.length;
    const fives = fivesObject.length;
    const sixes = sixesObject.length;

    if (ones >= 3) {
        if (ones === 3) {
            console.log(1000);
            const choice = `3 ones: 1000 pts`;
            renderPlayerChoice(choice);
        } else if (ones === 4) {
            console.log(2000);
            const choice = `4 ones: 2000 pts`;
            renderPlayerChoice(choice);
        } else if (ones === 5) {
            console.log(4000);
            const choice = `5 ones: 4000 pts`;
            renderPlayerChoice(choice);
        } else if (ones === 6) {
            console.log(8000);
            const choice = `6 ones: 8000 pts`;
            renderPlayerChoice(choice);
        }
    } else if (twos >= 3) {
        if (twos === 3) {
            console.log(200);
            const choice = `2 twos: 200 pts`;
            renderPlayerChoice(choice);
        } else if (twos === 4) {
            console.log(400);
            const choice = `3 twos: 400 pts`;
            renderPlayerChoice(choice);
        } else if (twos === 5) {
            console.log(800);
            const choice = `4 twos: 800 pts`;
            renderPlayerChoice(choice);
        } else if (ones === 6) {
            console.log(1600);
            const choice = `5 twos: 1600 pts`;
            renderPlayerChoice(choice);
        }
    } else if (threes >= 3) {
        if (threes === 3) {
            console.log(300);
            const choice = `3 threes: 300 pts`;
            renderPlayerChoice(choice);
        } else if (threes === 4) {
            console.log(600);
            const choice = `4 threes: 600 pts`;
            renderPlayerChoice(choice);
        } else if (threes === 5) {
            console.log(1200);
            const choice = `5 threes: 1200 pts`;
            renderPlayerChoice(choice);
        } else if (threes === 6) {
            console.log(2400);
            const choice = `6 threes: 2400 pts`;
            renderPlayerChoice(choice);
        }
    } else if (fours >= 3) {
        if (fours === 3) {
            console.log(400);
            const choice = `3 fours: 400 pts`;
            renderPlayerChoice(choice);
        } else if (fours === 4) {
            console.log(800);
            const choice = `4 fours: 800 pts`;
            renderPlayerChoice(choice);
        } else if (fours === 5) {
            console.log(1600);
            const choice = `5 fours: 1600 pts`;
            renderPlayerChoice(choice);
        } else if (fours === 6) {
            console.log(3200);
            const choice = `6 fours: 3200 pts`;
            renderPlayerChoice(choice);
        }
    } else if (fives >= 3) {
        if (fives === 3) {
            console.log(500);
            const choice = `3 fives: 500 pts`;
            renderPlayerChoice(choice);
        } else if (fives === 4) {
            console.log(1000);
            const choice = `4 fives: 1000 pts`;
            renderPlayerChoice(choice);
        } else if (fives === 5) {
            console.log(2000);
            const choice = `5 fives: 2000 pts`;
            renderPlayerChoice(choice);
        } else if (fives === 6) {
            console.log(4000);
            const choice = `6 fives: 4000 pts`;
            renderPlayerChoice(choice);
        }
    } else if (sixes >= 3) {
        if (sixes === 3) {
            console.log(600);
            const choice = `3 sixes: 600 pts`;
            renderPlayerChoice(choice);
        } else if (sixes === 4) {
            console.log(1200);
            const choice = `4 sixes: 1200 pts`;
            renderPlayerChoice(choice);
        } else if (sixes === 5) {
            console.log(2400);
            const choice = `5 sixes: 2400 pts`;
            renderPlayerChoice(choice);
        } else if (sixes === 6) {
            console.log(4800);
            const choice = `6 sixes: 4800 pts`;
            renderPlayerChoice(choice);
        }
    } else if (ones === 1 && twos === 1 && threes === 1 && fours === 1 && fives === 1 && sixes === 1) {
        console.log(1500);
        const choice = `Flush: 1500 pts`;
        renderPlayerChoice(choice);
    } else if (fives === 2) {
        console.log(fives * 50);
        const choice = `2 fives: 100 pts`;
        renderPlayerChoice(choice);
    } else if (fives === 1) {
        console.log(50);
        const choice = `Single five: 50 pts`;
        renderPlayerChoice(choice);
    } else if (ones === 2) {
        console.log(ones * 100);
        const choice = `1 one: 100 pts`;
        renderPlayerChoice(choice);
    } else if (ones === 1) {
        console.log(100);
        const choice = `Single one: 100 pts`;
        renderPlayerChoice(choice);
    } else {
        console.log(500);
        const choice = `No scoring dice: 500 pts`;
        renderPlayerChoice(choice);
    }
}

function renderPlayerChoice(choice) {
    const choiceDiv = document.createElement('div');
    choiceDiv.textContent = choice;
    playerChoiceDiv.append(choiceDiv);
}
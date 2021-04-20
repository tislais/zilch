import diceJS from './dice.js';

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
    } else if (ones === 4) {
        console.log(2000);
    } else if (ones === 5) {
        console.log(4000);
    } else if (ones === 6) {
        console.log(8000);
    }
} else if (twos >= 3) {
    if (twos === 3) {
        console.log(200);
    } else if (twos === 4) {
        console.log(400);
    } else if (twos === 5) {
        console.log(800);
    } else if (ones === 6) {
        console.log(1600);
    }
} else if (threes >= 3) {
    if (threes === 3) {
        console.log(300);
    } else if (threes === 4) {
        console.log(600);
    } else if (threes === 5) {
        console.log(1200);
    } else if (threes === 6) {
        console.log(2400);
    }
} else if (fours >= 3) {
    if (fours === 3) {
        console.log(400);
    } else if (fours === 4) {
        console.log(800);
    } else if (fours === 5) {
        console.log(1600);
    } else if (fours === 6) {
        console.log(2400);
    }
} else if (fives >= 3) {
    if (fives === 3) {
        console.log(500);
    } else if (fives === 4) {
        console.log(1000);
    } else if (fives === 5) {
        console.log(2000);
    } else if (fives === 6) {
        console.log(4000);
    }
} else if (sixes >= 3) {
    if (sixes === 3) {
        console.log(600);
    } else if (sixes === 4) {
        console.log(1200);
    } else if (sixes === 5) {
        console.log(2400);
    } else if (sixes === 6) {
        console.log(4800);
    }
} else if (ones === 1 && twos === 1 && threes === 1 && fours === 1 && fives === 1 && sixes === 1) {
    console.log(1500);
} else if (fives <= 2) {
    console.log(fives * 100);
} else if (ones <= 2) {
    console.log(ones * 100);
} else {
    console.log(500);
}

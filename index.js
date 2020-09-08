/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votinAge = 20;
if (votinAge > 18) {
    console.log(true);
} else {
    console.log(false);
}
console.log('');



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let isOldEnough = true;
let age = 15;
console.log(isOldEnough);
console.log(age);
if (age < 21) {
    isOldEnough = false;
}
console.log(isOldEnough);
console.log('');



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let word = "1999";
let num = parseInt(word);

console.log(word);
console.log(num);
console.log('');



//Task d: Write a function to multiply a*b 

function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
console.log('');



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function inDogYears(age) {
    return age * 7;
}
console.log(inDogYears(33));
console.log('');



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder(weight, age) {
    let x = age;
    let y = weight;

    if (x > -1 && x < 1) {
        if (x >= .08 && x <= .33) {
            return y * .1;
        } else if (x > .33 && x <= .58) {
            return y * .05;
        } else if (x > .58 && x <= 1) {
            return y * .04;
        }
    }

    if (x >= 1) {
        if (y <= 5) {
            return y * .05;
        } else if (y >= 6 && y <= 10) {
            return y * .04;
        } else if (y >= 11 && y <= 15) {
            return y * .03;
        } else {
            return y * .02;
        }
    }
}

console.log(dogFeeder(15, 1));
console.log('');




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
let player;
let computer;

function play() {
    let rock, paper, sissors;

    function choice() {
        rock = 1;
        paper = 2;
        sissors = 3;

        return Math.floor(Math.random() * 3 + 1);
    }

    player = choice();
    computer = choice();
    console.log(player);
    console.log(computer);

    if (player === rock) {
        if (computer === sissors)
            return "player wins";
        if (computer === paper) {
            return "player lost";
        }
        if (computer === rock) {
            return "tie";
        }
    }
    if (player === paper) {
        if (computer === rock) {
            return "player wins"
        }
        if (computer === sissors) {
            return 'player lost';
        }
        if (computer === paper) {
            return "tie";
        }
    }
    if (player === sissors) {
        if (computer === paper) {
            return "player wins";
        }
        if (computer === rock) {
            return "player lost";
        }
        if (sissors === sissors) {
            return "tie";
        }
    }
}
console.log(play());
console.log('');


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function mtericConverter(km) {
    return km * 0.62137;
}
console.log(mtericConverter(4) + "miles");



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function toCentimeters(ft) {
    return ft * 30.48;
}
console.log(toCentimeters(1));


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`





/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function gradeCal(grade) {
    if (grade >= 90 && grade <= 100) {
        return 'A'
    }
    if (grade >= 80 && grade <= 89) {
        return 'B';
    }
    if (grade >= 70 && grade <= 79) {
        return 'C';
    }
    if (grade >= 60 && grade <= 69) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(gradeCal(90));



/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method



/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
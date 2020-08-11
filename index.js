
/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 19;
if ( votingAge >= 18 ) {
    console.log( "true" );
}
else {
    console.log( "false" );
}
console.log( "" );



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var x = "Sam";
var y = "Brit";

console.log( "The values of x and y at start: " );
console.log( x );
console.log( y );
console.log("");

console.log( "The value of y after the condition statement: " );
if ( x === "Sam" ) {
    y = "Smith"
    console.log( y) ;
}

console.log( "" );
console.log( "The value of x after the condition statement: " );
if ( y === "Smith" ) {
    x = "Ok"
    console.log(x) ;
}

console.log( "" );
console.log( "The values of x and y at the end: " );
console.log( x );
console.log( y );
console.log( "" );



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var num = "1999";
var num2;
console.log( "The value of " + num + " as a string variable" );

num2 = Number( num );
console.log( num2 );
console.log( "" );

//Task d: Write a function to multiply a*b

function multiply( a, b ) {
    return a * b;
}
console.log( multiply( 2, 2 ) );
console.log( "" );

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function inDogYears( x ) {
    return x * 7;
}

console.log( inDogYears( 33 ) );
console.log( "" );




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

function dogFeedder( age, weight ) {
    let x = age;
    let y = weight;

    if ( x > -1 && x <= 1 ) {
        if ( x >= .08 && x <= .33 ) {
            return y * .1;
        }
        else if ( x > .33 && x <= .58 ) {
            return y * .05;
        }
        else if ( x > .58 && x <= 1 ) {
            return y * .04;
        }
    }

    if ( x > 1 ) {
        if ( y <= 5 ) {
            return y * .05;
        } else if ( y >= 6 && y <= 10 ) {
            return y * .04;
        } else if ( y >= 11 && y <= 15 ) {
            return y * .03;
        }
        else {
            return y * .02;
        }
    }
}

console.log( "This is for an adult dog: " );
console.log( dogFeedder( 2, 10 ) );
console.log( "" );
console.log( "This is for a puppy: " );
console.log( dogFeedder( .17, 8 ) );
console.log( "" );



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

let user = prompt( "Choose Rock, Paper or Scissor" );
let computerChoice = compChoice();

function compChoice() {
    let value;
    let randomNumber = Math.floor( Math.random() * 3 + 1 );
    if ( randomNumber === 1 ) {
        value = "rock";
    } else if ( randomNumber === 2 ) {
        value = "scissor";
    } else if ( randomNumber === 3 ) {
        value = "paper";
    }
    return value;
}


function playGame() {
    let result = " ";
    if ( user === "paper" ) {
        if ( compChoice === "rock" ) {
            result = "Player wins";
        }
        else if ( compChoice === "sissors" ) {
            result = "Player lost";
        }
        else {
            result = "Tie";
        }
    }else if ( user === "rock" ) {
        if ( compChoice === "sissors" ) {
            result = "Player wins";
        }
        else if ( compChoice === "paper" ) {
            result = "Player lost";
        }
        else {
            result = "Tie";
        }
    }else if ( user === "sissors" ) {
        if ( compChoice === "paper" ) {
            result = "Player wins";
        }
        else if ( compChoice === "rock" ) {
            result = "Player lost";
        } else {
            result = "Tie";
        }
    }
}

console.log(playGame());

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles


function mtericConverter( km ) {
    return km * 0.62137;
}
console.log( mtericConverter( 4 ) + "miles" );


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters





/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

let bottles = 99;
function annoyingSong( bottles ) {
    for ( let i = 0; i <= 99; i++ ) {
        do {
            console.log( `${ bottles } bottles of soda on the wall, ${ bottles } bottles of soda, take one down pass it around ` );
            bottles -= 1;
            console.log( `${ bottles } bottles of soda on the wall` );
            i++;
        } while ( i != 99 );
    }
}

console.log(annoyingSong(bottles))



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function gradeCal() {
    let input = prompt( "Enter a grade value 0 - 100: " )
    let result = "";

    if ( input > 90 && input <= 100 ) {
        result = "A";
    }
    else if ( input > 80 && input <= 89 ) {
        result = "B";
    }
    else if ( input > 70 && input <= 79 ) {
        result = "C";
    }
    else if ( input > 60 && input <= 69 ) {
        result = "D"
    }
    else {
        result = "F";
    }

    console.log( "" + result );
}

console.log( gradeCal() );

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow"s traning kit on arrays
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

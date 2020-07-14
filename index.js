/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;
function checkAge(age){
    if(age > votingAge){
        return true;
    }else{
        return false;
    }
}
// if (votingAge > 18

console.log(checkAge(23));

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let canVote = false;
let myAge = 23;

if (checkAge(myAge)){
    canVote = true;
    console.log(canVote);
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let string = '1999';
let int = Number(string);
console.log(int);
console.log(typeof int);



//Task d: Write a function to multiply a*b 

function multiply(num1, num2){
    return num1 * num2;
}
console.log(multiply(2,2));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(age){
    return age * 7;
}
console.log(dogYears(myAge));


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

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - 
// if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(pounds, years){
    let poundsOfFood = 0;
    if (years < 1) {
        if ( (2/12) < years && years < (4/12) ){
            poundsOfFood = .1 * pounds;
            console.log(1);
        } else if ( (4/12) < years && years < (7/12) ){
            poundsOfFood = .05 * pounds;
            console.log(2);
        } else if ( (7/12) < years && years < 1 ){
            poundsOfFood = .04 * pounds;
            console.log(3);
        }
    } else if ( 0 < pounds && pounds < 6 ) {
            poundsOfFood = .05 * pounds;
            console.log(4);
    } else if ( 6 < pounds && pounds < 11 ) {
        poundsOfFood = .04 * pounds;
        console.log(5);
    } else if ( 11 < pounds && pounds <= 15) {
        poundsOfFood = .03 * pounds;
        console.log(6);
    } else {
        poundsOfFood = .02 * pounds;
        console.log(7);
    }
    return poundsOfFood;
}

console.log(dogFeeder(15, 1));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function generateComputerChoice(){
    let randomNumber =  Math.floor(Math.random() * Math.floor(3));
    console.log(randomNumber);
    let computerChoice;
    if ( randomNumber === 0 ) {
        computerChoice = 'Rock';
    } else if ( randomNumber === 1 ) {
        computerChoice = 'Paper';
    } else if ( randomNumber === 2 ) {
        computerChoice = 'Sissors';
    } else {
        console.log('computer choice error!');
    }
    return computerChoice;
}

function rockPaperSissors(userChoice = prompt('Let\'s play rock, paper, sissors. What is your choice?')){
    console.log('User plays ' + userChoice);
    let computerChoice = generateComputerChoice();
    console.log('Computer plays ' + computerChoice);
    if ( userChoice.trim().toLowerCase() === 'rock') {
        if ( computerChoice === 'Rock' ) {
            console.log('TIE!');
        } else if ( computerChoice === 'Paper' ) {
            console.log('COMPUTER WINS!');
        } else if ( computerChoice === 'Sissors' ) {
            console.log('USER WINS!');
        }
    }
    if ( userChoice.trim().toLowerCase() === 'paper') {
        if ( computerChoice === 'Rock' ) {
            console.log('USER WINS!');
        } else if ( computerChoice === 'Paper' ) {
            console.log('TIE!');
        } else if ( computerChoice === 'Sissors' ) {
            console.log('COMPUTER WINS!');
        }
    }
    if ( userChoice.trim().toLowerCase() === 'sissors') {
        if ( computerChoice === 'Rock' ) {
            console.log('COMPUTER WINS!');
        } else if ( computerChoice === 'Paper' ) {
            console.log('USER WINS!');
        } else if ( computerChoice === 'Sissors' ) {
            console.log('TIE!');
        }
    }

}
// rockPaperSissors();

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const kmToMileFactor = 0.6214;
function kmToMiles(kilometers) {
    return kilometers * kmToMileFactor;
}
console.log(kmToMiles(5));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

const feetToCmFactor = 30.48;
function feetToCm(feet) {
    return feet * feetToCmFactor;
}
console.log(feetToCm(1));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda
// on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(startingNumber) {
    for (i = startingNumber; i > 0; i--) {
        console.log(i + ' bottles of soda on the wall, ' + i + ' bottles of soda, take one down pass it around ' + (i-1) + ' bottles of soda on the wall')
    }
}

annoyingSong(5);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
// function gradeCalc(percent) {
//     let letterGrade;
//     if ( percent >= 90 ) {
//         letterGrade = 'A';
//     } else if ( percent >= 80 ) {
//         letterGrade = 'B';
//     } else if ( percent >= 70 ) {
//         letterGrade = 'C';
//     } else if ( percent >= 60 ) {
//         letterGrade = 'D';
//     } else if ( percent < 60 ) {
//         letterGrade = 'F';
//     }
// }

// gradeCalc()
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object






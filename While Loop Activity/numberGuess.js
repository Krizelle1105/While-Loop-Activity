let correctNumber = 3; //set the correct number
let guess;
do {
    guess = paresInt(prompt("Guess a number between 1 to 10")); //ask the user's guess
    if (guess > correctNumber) {
        console.log("Too high!"); //tells the user that their guess is too high
    } else if (guess < correctNumber) {
        console.log("Too low!"); //tells the user that their guess is too low
    }
} while (guess !== correctNumber); //the program will keep asking until the guess is correct
console.log("Correct!") //tells the user that they guessed right
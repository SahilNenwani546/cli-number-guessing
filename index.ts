#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Cumputer will generate a random number - Done.

// 2) user input for guessing number - Done.

// 3) Compare user input with computer generate number and show result - Done.


//import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
  { message: "pleaase guess a number between 1-10", type: "number", name: "userGuessedNumber",
},

]);

// conditional statement
if(answer.userGuessedNumber === randomNumber){
    console.log("congratulations! you guessed right number");
} else {
    console.log("you guessed wrong number");
}
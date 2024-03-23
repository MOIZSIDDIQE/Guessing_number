#! /usr/bin/evn node
import inquirer from "inquirer";
const game = await inquirer.prompt([
    {
        message: "Please guess a number quickly",
        type: "number",
        name: "GuessNum",
    }
]);
const num = Math.floor(Math.random() * 10 + 1);
console.log(num);
if (game.GuessNum === num) {
    console.log("congratulation, you have won 7 crores🤣🤣🤣.");
}
else {
    console.log("sorry, you guessed wrong number please try again 😞😭😭.");
}

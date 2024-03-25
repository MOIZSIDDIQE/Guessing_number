#! /usr/bin/evn node

import inquirer from "inquirer";

const game = await inquirer.prompt([
    {
    message: "Please guess a number quickly",
    type: "number",
    name: "GuessNum",
},{
    message:"select level",
    type:"list",
    name:"level",
    choices:["easy","normal","hard"],
}
]);

const easy = Math.floor(Math.random()*5 + 1);
const normal = Math.floor(Math.random()*10 + 1);
const hard = Math.floor(Math.random()*15 + 1);


if(game.GuessNum === easy  ){
    console.log(hard),
    console.log(" congratulation, you have won 7 crores🤣🤣🤣.");
}else if(game.GuessNum === normal){
    console.log("congratulation, you have won 7 crores🤣🤣🤣.")
}else if(game.GuessNum === hard){
    console.log("congratulation, you have won 7 crores🤣🤣🤣.")
}else{
    console.log("sorry, you guessed wrong number please try again 😞😭😭.")
}
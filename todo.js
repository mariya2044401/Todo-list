#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoquestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you ike to add in you todo?",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Do you want to add more?",
            default: "true",
        }
    ]);
    todos.push(todoquestion.firstQuestion);
    condition = todoquestion.secondQuestion;
    console.log(todos);
}
// console.log(todoquestion)

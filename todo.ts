#!/usr/bin/env node
import inquirer from "inquirer";
let todos=[]
let condition =true
while(condition){

let todoquestion = await inquirer.prompt(
    [
        {
            name:"firstQuestion",
            type:"input",
            message: "What would you like to add in you todo?",
        },
        {
            name:"secondQuestion",
            type:"confirm",
            message: "Do you want to add more?",
            default: "true",
        },{
            name:"thirdtQuestion",
            type:"editor",
            message: "What would you like to delete in you todo?",
        },
    ]
)
todos.push(todoquestion.firstQuestion)
condition = todoquestion.secondQuestion
// todos.pop(todoquestion.editor)

console.log(todos)
}
// console.log(todoquestion)

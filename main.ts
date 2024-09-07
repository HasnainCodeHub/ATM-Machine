#!/usr/bin/env node

console.log("\n\tWelcome to Hasnain's Coding World");
import inquirer from "inquirer"
let myPin = 804
let myBalance = 50000
let input1 = await inquirer.prompt([
    {
        message: "Enter Your ATM Card Press Enter",
        type: "input",
        name: "ATM Card"
    },

    {
        message: "Enter Your Pin Code",
        type: "number",
        name: "Key"
    },

])
if (input1.Key === myPin) {
    console.log("Welcome To your Bank Account");
    let options = await inquirer.prompt([
        {
            message: "What you want to do",
            type: "list",
            name: "option",
            choices: ["Balance Inquiry", "CashWidrawl","Fast Cash"]
        }
    ])
    if (options.option == "CashWidrawl") {
        let balance = await inquirer.prompt([
            {
                message: "please enter An Amount You want To Withdraw",
                type: "number",
                name: "amount"
            }
        ])
        if (balance.amount > myBalance) {
            console.log("You don't have balance to withdrdaw this amount");

        }
        else {
            myBalance -= balance.amount 
            console.log(`Thanks for your transaction Your Remaining Balance is ${myBalance}`);
        }
    }
    else if(options.option == "Balance Inquiry"){
        console.log(`Your Balance is ${myBalance}`);
        
    }
    else if (options.option == "Fast Cash"){
        let immediate = await inquirer.prompt([
            {
            message:"Select The Amount",
            type:"list",
            name:"quick",
            choices:["5000","10000","20000","60000"]
        }
    ])
     if ( immediate.quick > myBalance){
        console.log("You don't have balance to withdrdaw this amount");

        
     }
     else  {
        myBalance -= immediate.quick
        console.log(`Thanks for Your Transaction Your Remaining Balance is ${myBalance}`);
        
     }
    }

}
else {
    console.log("Please Enter Correct Pin Number");

}
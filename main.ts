#! /usr/bin/env node

import inquirer from "inquirer";

let totalBalance:number = 10000; //Dollar
const pinNumber:number = 1999


let pinEntered = await inquirer.prompt(   //These brackets are called arrays
    [{
        name:"pin",
        message:"Enter your pin",
        type: "number",
    }]
)

// console.log(pinEntered)

if (pinEntered.pin === pinNumber){}
    let atmQuestions = await inquirer.prompt([
            {
                name:"account type",
                message:"Select your account type",
                type:"list",
                choices:
                ["Current Account",
                "Savings Account",
                ]
            },
    {
    name:'transMethod',
    message:'Select your transaction method',
    type:'list',
    choices:[
        "Cash Withdrawal",
        "Fast Cash"
    ]
}
]);


if(atmQuestions.transMethod== "Cash Withdrawal")
{
let cashwithdrawAmount = await inquirer.prompt([{

    name: "withdrawal",
    message:"Enter your amount to withdraw",
    type: "number",
}
]);

//Greater than or equals to operator
if (totalBalance>= cashwithdrawAmount.withdrawal)
{
    totalBalance -= cashwithdrawAmount.withdrawal //myBalance = myBalance - cashwithdrawAmount
console.log('Your Total balance is: ${totalBalance}')
}
else(
    console.log("Insufficient funds")
)
}
else {
    let fastCashAmount = await inquirer.prompt(
        [
            {
                name: "fashCash",
                message: "Enter your amount to withdraw",
                type: "list",
                choices:[
                    "1000",
                    "3000",
                    "5000",
                    "10000"
                ]
            }
        ]
    )
        

if(totalBalance>= fastCashAmount.fastCash) 
{
    totalBalance-= fastCashAmount.fastCash;
    console.log("Your Total balance is: ${myBalance}")
}
else(
    console.log("Insufficient Balance")
)}



// console.log(operationAns);
    
//     if (operationAns.operation === "withdraw"){
//         let amountAns = await inquirer.prompt(
//             [
//                 {
//                     name: "amount",
//                     message:"enter your amount",
//                     type: "number",
//             }
//             ]
//         )
//         // =, -=, +=
// myBalance-= amountAns.amount;

// console.log("Your remaining balance is: "+myBalance)
// }
// else if (operationAns.operation === "check balance"){
//     console.log("your balance is: "+ myBalance)
// }
// }

// else{ 
//     console.log("Incorrect pin number");
// }










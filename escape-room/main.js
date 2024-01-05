const readline = require("readline-sync")
const name = readline.question("What is your name? ")
let gameOver = false
console.log(`Hello ${name}. Let's play a game`)
while (gameOver === false){
    console.log(`You find yourself in a locked room. You don't know how you got here. You only know you need to get out.`)
    console.log(`You have three options. 1) Find Key; 2) Put hand in hole; 3) Open door`)
    const choice = readline.question("What do you do? (1, 2, or 3) ")
        if(choice == "2"){
            console.log(`You put your hand in the hole and got pricked by a poison needle. You have died.`)
            gameOver = true
        } else if(choice == "1"){
            console.log(`You have found the key.`)
            let gotOut = false
            while(gotOut === false){
                const choice2 = readline.question("What do you do? (1, 2, or 3) ")
                if(choice2 == "1"){
                    console.log(`You already have the key.`)
                } else if(choice2 == "2"){
                    console.log(`You put your hand in the hole and got pricked by a poison needle. You have died.`)
                    gotOut = true
                    gameOver = true
                } else if(choice2 == "3"){
                    console.log("Congratulations. You have successfully escaped.")
                    gotOut = true
                    gameOver = true
                }
            }
        } else if(choice == "3"){
            console.log("You are electrocuted as you try to open the door. You have died.")
            gameOver = true
        }
}
console.log(`Thanks for playing, ${name}! I hope you enjoyed this game!`)
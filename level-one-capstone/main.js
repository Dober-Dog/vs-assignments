const readline = require("readline-sync")
const enemies = [
    {name: "Frostfang",
    hp: 10,
    dropItem: "Never-melting Ice"},
    {name: "Moltenhearth",
    hp: 10,
    dropItem: "Sacred Ember"},
    {name: "Galewing",
    hp: 10,
    dropItem: "Bag of Four Winds"}
]
let playerHp = 15
const bag = []

console.log("Hello there, adventurer! I am Worrick The Wise, and I'll be your guide during this quest!")
const user = readline.question("What might your name be? ")
console.log("Very well, " + user + "! I am glad to be part of your journey!")
let play = true
while(play === true){
    if(enemies.length == 0){
        play = false
        console.log("Congratulaions, " + user + ", dear adventurer! You have saved this area from the evils that besieged it. Thank you ever so much! Take what is in your bag as payment for your services!")
        bag.push("200 gold")
        console.log("You open your bag and find the following:")
        console.log(bag)
        console.log("Your eyes do not deceive you, " + user + ". I, Warrick the Wise, give you this small token of appreciation. Until we meet again, dear adventurer.")
    } else {
        let input = readline.question("Press W to move forward, press I to check your inventory, or press H to check your health! ")
        if(input === "w"){
            let findEnemy = Math.floor(Math.random() * 4)
            if(findEnemy === 2){
                console.log("An enemy has appeared!")
                let encounter = Math.floor(Math.random() * enemies.length)
                console.log(enemies[encounter].name + " stands in your way!")
                let fight = true
                while(fight === true){
                    if(playerHp <= 0){
                        play = false
                        fight = false
                        console.log("Alas, you were taken far too soon, dear friend. But fear not, for I, Warrick the Wise, shall carry your legacy with me.")
                    } else{
                        const choice = readline.question("Do you attack or run? ")
                        let enemyDamage = Math.floor(Math.random() * 16)
                        if(choice === "run"){
                            let runSuccess = Math.floor(Math.random() * 50)
                            playerHp = playerHp - enemyDamage
                            if(runSuccess % 2 == 0){
                                fight = false
                                console.log("As you flee, " + enemies[encounter].name + " lashes out and deals " + enemyDamage + " points of damage.")
                                if(playerHp <= 0){
                                    play = false
                                    console.log("Alas, you were taken far too soon, dear friend. But fear not, for I, Warrick the Wise, shall carry your legacy with me.")
                                }
                            } else {
                                console.log("You fail to escape, and " + enemies[encounter].name + " strikes and deals " + enemyDamage + " points of damage. You now have " + playerHp + " hp.")
                            }
                        } else if(choice === "attack"){
                            let playerDamage = Math.floor(Math.random() * 15)
                            let block = Math.floor(Math.random() * 50)
                            enemies[encounter].hp = enemies[encounter].hp - playerDamage
                            console.log("You attack " + enemies[encounter].name + " and deal " + playerDamage + " points of damage")
                            if(enemies[encounter].hp <= 0){
                                fight = false
                                console.log("Wonderful! You have bested " + enemies[encounter].name + "!")
                                let heal = Math.floor(Math.random() * 5)
                                console.log("You have gained " + heal + " hp!")
                                playerHp = playerHp + heal
                                console.log(enemies[encounter].name + " dropped something! You have found the " + enemies[encounter].dropItem + "!")
                                bag.push(enemies[encounter].dropItem)
                                enemies.splice(encounter, 1)
                            } else {
                                if(block % 2 == 0){
                                    console.log("Yikes! It was close, but you blocked " + enemies[encounter].name + "'s attack! You have " + playerHp + " hp.")
                                } else {
                                    playerHp = playerHp - enemyDamage
                                    console.log("Watch out! " + enemies[encounter].name + " struck back and dealt " + enemyDamage + " points of damage! You now have " + playerHp + " hp!")
                                }
                            }
                        }
                    }
                }
            } else {
                console.log("The path seems clear. Let's keep going!")
            }
        } else if(input === "i"){
            console.log(bag)
        } else if(input === "h"){
            console.log("You currently have " + playerHp + " hp.")
        }
    }
}
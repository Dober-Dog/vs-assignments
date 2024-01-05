var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

let output = []

function forception(people, alphabet){
    alphaArray = alphabet.split("")
    for(i = 0; i < people.length; i++){
        output.push(people[i])
        for(j = 0; j < alphaArray.length; j++){
            output.push(alphaArray[j])
        }
    }
    console.log(output)
}

forception(people, alphabet)
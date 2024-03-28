var readline = require('readline-sync')
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase()
var shift = parseInt(readline.question('How many letters would you like to shift? '))

const charArr = input.split("")
const change = []
for(let i = 0; i < charArr.length; i++){
    if (/[a-z]/.test(charArr[i])) {
        let charCode = charArr[i].charCodeAt(0)
        charCode = charCode + shift
        change.push(String.fromCharCode(charCode))
      } else {
        change.push(charArr[i])
      }
}
const response = change.join('')
console.log(response)
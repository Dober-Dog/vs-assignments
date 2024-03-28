// Make an array of numbers that are doubles of the first aray

// function doubleNumbers(arr){
//     const newArr = arr.map(num => num * 2)
//     return newArr
// }

// console.log(doubleNumbers([2, 5, 100]))


//Take an array of numbers and make them strings

// function stringItUp(arr){
//     const newArr = arr.map(function(num){
//         const stringNum = num.toString()
//         return stringNum 
//     })
//     return newArr
// }

// console.log(stringItUp([2, 5, 100]))


//Capitalize the first letter of each name and make the rest of the characters lowercase

// function capitalizeNames(arr){
//     const newArr = arr.map(function(name){
//         let nameArr = name.split('')
//         let firstLetter = nameArr.shift()
//         let uppercase = firstLetter.toUpperCase()
//         const letters = nameArr.map(function(letter){
//             let lowercase = letter.toLowerCase()
//             return lowercase
//         })
//         letters.unshift(uppercase)
//         let correctName = letters.join('')
//         return correctName
//     })
//     return newArr
// }

// console.log(capitalizeNames(["John", "JACOB", "jinGleHeimer", "schmidt"]))


//Make an array of strings of the names

// function namesOnly(arr){
//     const newArr = arr.map(function(object){
//         const name = object.name
//         return name
//     })
//     return newArr
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]))


//Make and array of strings of the names saying whether or not they can go the The Matrix

// function makeStrings(arr){
//     const newArr = arr.map(function(object){
//         const name = object.name
//         const age = object.age
//         let isAllowed
//         if(age > 18){
//             isAllowed = name + " can go to The Matrix"
//         } else {
//            isAllowed = name + " is under age!!"
//         }
//         return isAllowed
//     })
//     return newArr
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]))


// Make an array of the names in h1, and the ages in h2

// function readyToPutInTheDOM(arr){
//     const newArr = arr.map(function(object){
//         const name = object.name
//         const age = object.age
//         const h1 = "<h1>" + name + "</h1>"
//         const h2 = "<h2>" + age + "</h2>"
//         return h1 + h2
//     })
//     return newArr
// }

// console.log(readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]))
// Let and Const

// const name = "John"
// let age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])


// Task 1

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => ({type: "carrot", name: carrot}))
// }

// console.log(mapVegetables(carrots))


// Task 2

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => person.friendly)
// }

// console.log(filterForFriendly(people))


// Task 3

// var doMathSum = ((a, b) => a + b)

// var produceProduct = (a, b) => a * b

// console.log(doMathSum(2, 3))
// console.log(produceProduct(5, 4))


// Task 4

// function printString (fName="Jane", lName="Doe", age=40){
//     console.log(`Hi ${fName} ${lName}, how does it feel to be ${age}?`)
// }

// printString("Janet", "McNeilson", 15)


// Task 5

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ]
 
// function filterForDogs(arr) {
//     return arr.filter(animal => animal.type === "dog")
// }

// console.log(filterForDogs(animals))
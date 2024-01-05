// **Preliminaries**

// for(i = 0; i < 10; i++){
//     console.log(i)
// }

// for(i = 9; i >= 0; i--){
//     console.log(i)
// }

// const fruit = ["banana", "orange", "apple", "kiwi"]
// for(i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }

// **Bronze Medal**

// const numArray = []
// for(i = 0; i < 10; i++){
//     numArray.push(i)
// }
// console.log(numArray)

// for(i = 0; i <= 100; i++){
//     if( i % 2 == 0){
//         console.log(i)
//     }
// }

// const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// const fruitArr = []
// for(i = 0; i < fruit2.length; i++){
//     if(i % 2 == 0){
//         fruitArr.push(fruit2[i])
//     }
// }
// console.log(fruitArr)


// **Silver Medal**

// const peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

// for(i = 0; i < peopleArray.length; i++){
//     console.log(peopleArray[i].name)
// }

// const names = []
// const occupations = []
// for(i = 0; i < peopleArray.length; i++){
//     names.push(peopleArray[i].name)
//     occupations.push(peopleArray[i].occupation)
// }
// console.log(names)
// console.log(occupations)

// const names2 = []
// const jobs = []
// for(i = 0; i < peopleArray.length; i++){
//     if(i % 2 == 0){
//         names2.push(peopleArray[i].name)
//     } else{
//         jobs.push(peopleArray[i].occupation)
//     }
// }
// console.log(names2)
// console.log(jobs)

// **Gold Medal**

// const grid1 = []
// for(i = 0; i < 3; i++){
//     const innerArr = []
//     for(j = 0; j < 3; j++){
//         innerArr.push(0)
//     }
//     grid1.push(innerArr)
// }
// console.log(grid1)

// const grid2 = []
// for(i = 0; i < 3; i++){
//     const innerArr = []
//     for(j = 0; j < 3; j++){
//         innerArr.push(i)
//     }
//     grid2.push(innerArr)
// }
// console.log(grid2)

// const grid3 = []
// for(i = 0; i < 3; i++){
//     const innerArr = []
//     for(j = 0; j < 3; j++){
//         innerArr.push(j)
//     }
//     grid3.push(innerArr)
// }
// console.log(grid3)

// **Bonus**

// const grid4 = [[0, 0, 0], [1, 1, 1], [2, 2, 2]]
// for(i = 0; i < grid4.length; i++){
//     for(j = 0; j < grid4.length; j++){
//         grid4[i][j] = "x"
//     }
// }
// console.log(grid4)
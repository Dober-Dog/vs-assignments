// Turn an array of numbers into a total of all the numbers

// function total(arr){
//     const result = arr.reduce((final, num) => final += num)
//     return result
// }

// console.log(total([1, 2, 3]))


// Turn an array of numbers into a long string of all those numbers

// function stringConcat(arr){
//     result = arr.reduce(function(final, num){
//         final = final.concat(num)
//         return final
//     }, "")
//     return result
// }

// console.log(stringConcat([1, 2, 3]))


// turn an array of voter objects into a count of how many people voted

// function totalVotes(arr){
//     result = arr.reduce(function(final, voter){
//         if(voter.voted){
//             final++
//         }
//         return final
//     }, 0)
//     return result    
// }

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// console.log(totalVotes(voters))


// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

// function shoppingSpree(arr){
//     result = arr.reduce(function(final, item){
//         final += item.price
//         return final
//     }, 0)
//     return result
// }

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ]

// console.log(shoppingSpree(wishlist))


// Given an array of arrays, flatten them into a single array

// function flatten(arr){
//     result = arr.reduce(function(final, list){
//         final = final.concat(list)
//         return final
//     }, [])
//     return result
// }

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]

// console.log(flatten(arrays))


// Given an array of potentioal voters, return an object representing the results of the vote

// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// function voterResults(arr){
//     result = arr.reduce(function(final, voter){
//         if(voter.age <= 25){
//             final.numYoungVoters++
//             if(voter.voted){
//                 final.numYoungVotes++
//             }
//             return final
//         } else if(voter.age <= 35){
//             final.numMidVoters++
//             if(voter.voted){
//                 final.numMidVotes++
//             }
//             return final
//         } else {
//             final.numOldVoters++
//             if(voter.voted){
//                 final.numOldVotes++
//             }
//             return final
//         }
//     }, { numYoungVotes: 0, numYoungVoters: 0, numMidVotes: 0, numMidVoters: 0, numOldVotes: 0, numOldVoters: 0})
//     return result
// }

// console.log(voterResults(voters))
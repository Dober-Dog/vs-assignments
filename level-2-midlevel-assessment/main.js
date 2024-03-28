// Challenge 1: Sorting Array
// take an array of numbers and return new array sorted in ascending order

// function sortNumbers(arr){
//     arr.sort((a, b) => a - b)
//     return arr
// }

// const numbers = [4, 2, 7, 1, 9, 5];
// const sortedNumbers = sortNumbers(numbers);
// console.log(sortedNumbers)


// Challenge 2: Mapping an Array
// take an array of strings and return a new array converted to uppercase

// function convertToUpperCase(words){

//     return words.map(str => str.toUpperCase())
    // const result = words.map(function(word){
    //     const letters = word.split('')
    //     const capitalLetters = letters.map(function(letter){
    //         return letter.toUpperCase()
    //     })
    //     const words = capitalLetters.join('')
    //     return words
    // })
    // return result
//}

// const strings = ['hello', 'world', 'javascript'];
// const uppercaseStrings = convertToUpperCase(strings);
// console.log(uppercaseStrings)

function findEvenNumbers(arr){
    return arr.filter(num => num % 2 === 0)
}

const numbers = [1,2,3,4,5,6,7,8,9,10]  // [2,4,6,8,10]
console.log(findEvenNumbers(numbers))
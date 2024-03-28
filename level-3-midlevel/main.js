// function solution(arr){
//     const posArr = []
//     const negArr = []
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] === -1){
//             negArr.push({value: arr[i], index: i})
//         } else {
//             posArr.push(arr[i])
//         }
//         posArr.sort((a, b) => a-b)
//     }
//     for(const { value, index } of negArr){
//         posArr.splice(index, 0, value)
//     }
//     return posArr
// }


// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
// console.log(solution([100, -1, 50, -1, 75]))




// function countVowels (string){
//     const arr = string.split("")
//     console.log(arr)
//     let vowelCount = 0
//     for( i = 0; i < arr.length; i++){
//         if(arr[i].toLowerCase() === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u"){
//             vowelCount = vowelCount + 1
//         }
//     }
//     console.log(vowelCount)
// }


// countVowels('Apple')
// countVowels('juice')
// countVowels('Hello, world!')
// countVowels('hippopotomonstrosesquippedaliophobia')


// Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.

// Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.

function findSumOfTwo(numbers, target) {
    const solution = []
    for ( let i = 0; i < numbers.length; i++){
        for (let j = i + 1; j < numbers.length; j++){
            // console.log(`${i}, ${j}, ${target}`)
            if(numbers[i] + numbers[j] === target){
                solution.push(numbers[i], numbers[j])
            }
        }
    }
    return solution
}

console.log(findSumOfTwo([2, 4, 7, 11, 15], 9)); // Output: [2, 7]

console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]
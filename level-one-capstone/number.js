function largestNumber(num1, num2, num3){
    // let highNum = num1
    // if(highNum < num2){
    //     highNum = num2
    //     if(highNum < num3){
    //         highNum = num3
    //     }
    // } else if (highNum < num3){
    //     highNum = num3
    // }
    // return highNum
    return Math.max(num1, num2, num3)
}
// Write a function called `largestNumber` that takes 3 numbers and returns the largest number. Test with the following:

console.log(largestNumber(3, 8, 9))
console.log(largestNumber(25,-10, 10))


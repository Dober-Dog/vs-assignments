function palindrome(str){
    const wordArr = str.split('')
    wordArr.reverse()
    const finalWord = wordArr.join('')
    return str === finalWord
}


console.log(palindrome("racecar"))
// Rest function to return array of animals, no matter how many arguments

// function collectAnimals(...animals){
//     const animalArr = [...animals]
//     return animalArr
// }

// console.log(collectAnimals("monkey", "cat", "dog", "zebra"))


//Return food object with array names as properties

// function combineFood(fruit, sweets, vegetables){
//     return {
//         fruit: fruit,
//         sweets: sweets,
//         vegetables: vegetables
//     }
// }

// console.log(combineFood(["apple", "pear"], ["cake", "pie"], ["carrot"]))


//use property names as variables

// function parseSentence(obj){
//     return `We're going to have a good time in ${obj.location} for ${obj.duration}`
// }

// console.log(parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   }))


//ES6 return first item

// function returnFirst(items){
//     const [firstItem] = items
//     return firstItem
// }

// console.log(returnFirst([true, "pink", 42]))


// Write variables to clarify and use template literals

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav, secondFav, thirdFav] = arr
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
// }

// console.log(returnFavorites(favoriteActivities))


// combine arrays into one

// function combineAnimals(arr, ...moreArr){
//     return arr.concat(...moreArr)
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))


// rewrite in ES6

// function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e]
//     return numbers.reduce((acc, number) => acc * number, 1)
// }

// console.log(product(1, 1, 1, 1, 5))


// function unshift(array, ...input) {
//     return [...input].concat(array)
// }

// console.log(unshift([1, 2, 3], "a", "b", "c"))


// simply function

// function populatePeople(names){
//     return names.map(function(name){
//         names = name.split(" ")
//         return {
//             firstName: names[0],
//             lastName: names[1]
//         }
//     })
// }

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
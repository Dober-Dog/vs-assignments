// function filterAnagrams(arr, target) {
//     const results = []
//     const sortedTarget = target.split('').sort().join('')
//     arr.map(word => {
//         const sortedWord = word.split('').sort().join('')
//         if (sortedWord === sortedTarget){
//             results.push(word)
//         }
//     })
//     return results
// }

// const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world']
// const target = 'enlist'

// const anagrams = filterAnagrams(words, target)
// console.log(anagrams)



// function sortByMultipleCriteria(people) {
//     const sortedPeople = people.sort((a, b) => {
//         if (a.age !== b.age) {
//             return a.age - b.age
//         } else {
//             if (a.name < b.name) {
//                 return -1
//             } else if (a.name > b.name) {
//                 return 1
//             } else {
//                 return 0
//             }
//         }
//     });
//     return sortedPeople;
// }

// const people = [
// { name: 'Alice', age: 30 },
// { name: 'Bob', age: 25 },
// { name: 'Charlie', age: 35 },
// { name: 'David', age: 25 },
// ]

// const sortedPeople = sortByMultipleCriteria(people);
// console.log(sortedPeople)

// Write a function called calculateTotalPrice that calculates the total price for each product in an array of objects representing products, where each object has a name (string), price (number), and quantity (number) property. The function should return a new array containing objects with the name and totalPrice properties, where totalPrice is the result of multiplying the price with the quantity for each product.

function calculateTotalPrice(products) {
    result = []
    products.map(obj => {
        const total = obj.price * obj.quantity
        const object = {
            name: obj.name,
            totalPrice: total
        }
        result.push(object)
    })
    return result
}

const products = [
  { name: 'Apple', price: 1.5, quantity: 3 },
  { name: 'Banana', price: 0.75, quantity: 5 },
  { name: 'Orange', price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]
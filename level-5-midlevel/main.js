// function extractUniqueCharacters(strings) {
//     const combinedString = strings.join('');
//     const unique = []
//     const allChars = combinedString.split("")
//     allChars.map(char => {
//         if (!unique.includes(char)) {
//             unique.push(char)
//         }
//     })
//     return unique
    
//     // const uniqueChars = [...new Set(combinedString)];
//     // return uniqueChars;
// }

// const words = ['apple', 'banana', 'cherry'];
// const uniqueChars = extractUniqueCharacters(words);
// console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']



// function sortByProperty(objects, propertyName) {
//     if(propertyName === 'age'){
//         return objects.sort((a, b) => a[propertyName] - b[propertyName])
//     } else if(propertyName === 'name'){
//         return objects.sort((a, b) => {
//             const nameA = a[propertyName].toUpperCase()
//             const nameB = b[propertyName].toUpperCase()
//             if (nameA < nameB) {
//                 return -1
//             }
//             if (nameA > nameB) {
//                 return 1
//             }
//             return 0
//         })
//     }
// }

// const people = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'David', age: 28 },
//   { name: 'Charlie', age: 35 },
//   { name: 'Abby', age: 24 }
// ];

// const sortedByAge = sortByProperty(people, 'age');
// console.log(sortedByAge);


function generateTable(num){
    for( let i = 1; i <= 10; i++){
        const answer = num * i
        console.log(`${num} * ${i} = ${answer}`)
    }
}

generateTable(1)

// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 10 = 50
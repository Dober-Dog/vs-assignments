var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

// function returns list of everyone older than 18, sorted alphabetically by last name, and is embedded in HTML <li> element

// function sortArray(arr){
//     const over18 = arr.reduce(function(final, person){
//         if(person.age > 18){
//             final.push(person)
//         }
//         return final
//     }, [])
//     over18.sort((a, b) => a.lastName.charCodeAt(0) - b.lastName.charCodeAt(0))
//     const result = over18.map(function(person){
//         const li = "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>"
//         return li
//     })
//     return result
// }

// console.log(sortArray(peopleArray))
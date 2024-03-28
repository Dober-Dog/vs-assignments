const people = [ "John", "Adam", "Amber" ]

function peopleElements(arr) {
    const newArr = arr.map(arr => `<h1>${arr}<h1>`)
    return newArr
}

console.log(peopleElements(people))



// Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop()
fruit.shift()
const newOrange = fruit.indexOf("orange")
fruit.push(newOrange)
const vegLength = vegetables.length
vegetables.push(vegLength)
var food = fruit.concat(vegetables)
food.splice(4, 2)
food.reverse()
foodString = food.join(", ")

console.log("Fruit: ", fruit)
console.log("Vegetables: ", vegetables)
console.log(food)
console.log(foodString)
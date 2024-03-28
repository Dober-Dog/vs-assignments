// return sum of two numbers, error if either argument is not number data

// function sum(x, y){
//    try{
//     if(!(typeof x === "number")){
//         throw new Error("Non-Number input")
//     } else if (!(typeof y === "number")){
//         throw new Error("Non-Number input")
//     } else {
//         return x + y
//     }
//    }
//    catch(err){
//     console.log(err)
//    }
// }

// console.log(sum("yellow", 6))


// Login and password check, error if wrong


// const user = {
//     username: "Sam",
//     password: "123abc"
// }

// function login(username, password){
//     try{
//         if (username === user.username){
//             if (password === user.password){
//                 throw "Welcome, " + user.username
//             } else {
//                 throw new Error("Incorrect password")
//             }
//         } else {
//             throw new Error("Unknown user")
//         }
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// console.log(login("Sam", "123abc"))
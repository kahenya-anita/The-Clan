// let x = (4, 5)

// function addTwoNumbers(a, b){
//   a + b
// }
// console.log(addTwoNumbers(x))

// const addTwoNumber = (a,b) => a+ b
// console.log(addTwoNumber(4, 5))

// function message(){
//   console.log("This message is displayed after 3seconds")
// }
// setTimeout(message, 3000)

// const messages = () => {
//   console.log("This message is displayed after 3seconds")
// }
// setTimeout(message, 3000)

// const array1 = [2, 4, 6, 9, 18]
// function loopArray(arr){
//   array1.forEach(item =>{
//     console.log(item)
//   })
// }
// loopArray(array1)

// const arrowFn = (array) => {
//   array1.forEach(item => {
//     console.log(item)
//   })
// }
// arrowFn(array1)

// const exampleObject = {
//   name: "Joan",
//   age: 20
// }
// console.log(exampleObject.name)
// console.log(exampleObject['age'])

const actors = [
  {
    name: "Tom Cruise",
    age: 35,
    gender: "male",
    origin: "USA"
  },
  {
    name: "Johnny Depp",
    age: 47,
    gender: "male",
    origin: "USA"
  },
  {
    name: "Michael B. Jordan",
    age: 34,
    gender: "male",
    origin: "USA"
  },
  {
    name: "Gabriel Union",
    age: 50,
    gender: "female",
    origin: "USA"
  },
  {
    name: "Katherine Kamau",
    age: 35,
    gender: "female",
    origin: "Kenya"
  },
  {
    name: "Lupita Nyongo",
    age: 39,
    gender: "female",
    origin: "Kenya"
  }
]

//FILTER METHOD
//Works by eliminating what we dont want in the new array

  //1.Actor Below 40
const belowForty = actors.filter((actors) => actors.age < 40)
console.log(belowForty)

console.log("############################")
//2. Actors who are Female
const femaleActors = actors.filter((actors) => actors.gender ==="female")
console.log(femaleActors)

console.log("############################")
///MAP 
//Transform items in an array by creating a new array

//1. GET NAMES
const nameOfActors = actors.map((actors) => actors.name)
console.log(nameOfActors)

//2. Name & AGE
const nameAndAge = actors.map((actors) => ({
  name: actors.name,
  age: actors.age
}))
console.log(nameAndAge)

//REDUCE
//Takes all elements in the array and reduce them into a single value
//1. Total Ages
const totalAge = actors.reduce((total, actors) => total + actors.age, 0)
console.log(totalAge)

console.log("############################")

//2.Total no of characters in actors names
const totalCharacters = actors.reduce((total, actors) => total + actors.name.length, 0)
console.log(totalCharacters)

//3. No of actors
const numberOfActors = actors.reduce((total, actor) => total + 1,0)
console.log(numberOfActors)


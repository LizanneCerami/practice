// if ("15" === 15) {
//   console.log(true)
// } else {
//   console.log(false)
// }

// function addNumbers(num1, num2){
//   const total = num1 + num2
//   return total
// }

// function isNumPalidrome(x) {
//   const stringX = x = '';
//   const midPoint = Math.floor(stringX.length / 2);
//   for(let i = 0; i < midPoint; i++) {
//     const start = i;
//     const end = (stringX.length - 1) - i;
//     if(stringX[start] !== stringX[end]) return false
//   }
//   return true
// }

// console.log(122);
// console.log(1221)

// given and array of pets where each element in the array has a pet.name, pet.age, and pet.type, add a new property to each element called woof and set to true if type: 'dog' or false for all others.

// let pets = [
//   { name: "Lucy", age: 6, type: "dog" },
//   { name: "whiskers", age:12, type: "cat"}, 
// ]

// function addWoofToDogsUsingLoop (pets) {
//   for( let i = 0; i <pets.length; i++) {  //looping through the array
//     pets[i].woof = pets[i].type === 'dog'
//   }
//   return pets
// }

// addWoofToDogsUsingLoop(pets)
// console.log(pets)

// function addWoofToPetsUsingMap(pets) {
//   pets = pets.mep (pet => {
//   pet.woof = pet.type === 'dog'
//   })
//   return pets
// }

// given and array of pets where each element in the array has a pet.name, pet.age, and pet.type, add a new property to each element called woof and set to true if type: 'dog' or false for all others.

let thesePets = [
  {name: "Blue", age: 2, type: "dog"},
  {name: "Jelly", age: 5, type: "cat"},
  {name: "Tippy", age: 6, type: "dog"},
  {name: "Skittles", age: 8, type: "lizard"},
]

function addWoofToDogs(thesePets) {
  for(let i=0; i <= thesePets.length; i++) {
  thesePets[i].woof = thesePets[i].type === "dog"
}
return thesePets
}

addWoofToDogs(thesePets)
console.log(thesePets)
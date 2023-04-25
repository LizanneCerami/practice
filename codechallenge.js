// // // // function person(fullName) {
// // // //   const firstName = "liz"
// // // //   const lastName = "cerami"
// // // //   return fullName
// // // // }

// // // // console.log (${firstName} ${lastName})

// // // // should have been:
// // // function


// // // for (let i = 0; i < 10;  i++) {
// // //   console.log("I will never give up")
// // // }


// // // function Dog() {
// // //   return (
// // //     <main>
// // //       <h1> My Dog Lucy</h1>
// // //       <p>Lucy is my favorite puppy in the world.  I love her so much</p>
// // //     </main>
// // //   );
// // // }

// // function formHandler(firstName,lastName, email, phone){
// // const newPerson = {
// //   firstName: "liz",
// //   lastName: "cerami",
// //   email: "lizanne.cerami@gmail.com",
// //   phone: "484-885-0156",
// // }
// // }

// function twoSum1(array, target) {
//   for(let i = 0; i < array.length; i++) {
//     for(let j = i + 1; j < array.length; j++) {
//       if(array[i] + array[j] === target) {
//         return [i,j]
//       }
//     }
//   }
// }

// // the above solution 

// // Challenge: solve Two Sum with a time complexity of On ("O of n").

// // We can interpret that as using only one loop.  How the heck can we do this?
// // Our best bet is to add spatial complexity... in other words, store some data as we solve.

// // We are going to colve again using something called a hash map (object)

// function twoSum2(array,target) {
//   let hashmap = {}
//   for(let i = 0; i < array.length; i++) {
//     const otherNumber = target - array[i]
//     if(hashmap[otherNumber]) {       // does the other number already exist in hashmap?
//       return [hashmap[otherNumber],i] // return that index, i
//     } else {    // if not then let's put it in...
//       hashmap[otherNumber] = i
//     }
//   }
// }


// for (let i = 0; i <= 100; i++) {

//   if( i%3 === 0 )
//   console.log("Fizz")

//   else if( i%5 === 0 )
//   console.log("Buzz")

//   else (i%3 && i%5 === 0)
//   console.log("FizzBuzz")
// }

for (let i = 0; i <= 100; i++) {
  if(i%3 ===  0)
  console.log(`${i} Fizz`)
  else if(i%5 === 0)
  console.log(`${i} Buzz`)
  else (i%3 && i%5 === 0)
  console.log(`${i} FizzBuzz`)
}
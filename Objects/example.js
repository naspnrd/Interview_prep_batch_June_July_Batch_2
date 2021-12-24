let person = {
    firstName: 'Neeraj',
    lastName: 'Chaudhary',
    age: 23,
    profession: 'Software Developer',
    married: false,
    1 : ['jac'],
    0 : ['hi', 'bye']
}
// console.log(person)

// Access properties
 // 1. Bracket Notation [] => [key] => value

//  console.log(person['age'])

// 2. Dot(.) Notation
// console.log(person.firstName)
// console.log(person[0])

// Add Properties

// person.fullName = person.firstName + " " + person.lastName
// // console.log(person)
// person['salary'] = 90000
// person['salary'] = 100000
// console.log(person)

// delete a property => to delete a property we have a operator ie delete operator
// console.log(person)
// delete person[0]
// delete person.married
// console.log(person)

// example
// var compPerson = {
//     firstName: 'Neeraj',
//     lastName: 'Chaudhary',
//     age: 23,
//     insideObj: {
//         married: false,
//         profession: 'Developer',
//         city: 'Mathura',
//         marks: [90,99,90,100],
//         Obj: {
//             company: 'Licious',
//             Office : "Bengaluru"
//         }
//     },
//     children: 'no',
//     links : "www"
// }
// console.log(compPerson.insideObj.Obj.company)
// console.log(compPerson['insideObj']['marks'][2])

// Traversal
// 1. Using a for in loop
// 2. Object.keys method
// 3. Object.values method
// 4. Object.entries method

// 1. Using a for in loop
// for(var key in person)
//     console.log(key + " : " + person[key])

// 2. Object.keys() method => ES6
// returns the all the keys in the form of array
// var keys = Object.keys(person)

// 3. Object.values() method
// console.log(Object.values(person))

// 4. Object.entries method

// console.log(Object.entries(person))

// Object Constructor Example

function Human(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName,
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

var person1 = new Human("Virat", "Kohli");
var person2 = new Human("Neeraj", "Chaudhary")
console.log(person2.firstName)

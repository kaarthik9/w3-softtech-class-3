// let x = 4;
// const y = 5;
// let Balaji = 345;
// let studentName = "Balaji"

// // console.log(studentName)

// let z;
// // console.log(z)

// let w = null; // value of w is empty
// // console.log(w)

// x = 6;

// // console.log(false)

// // console.log('true')

// // 98,56,84,68,90

// let totalMarks = 0;

// totalMarks = 98;

// totalMarks = totalMarks + 56;
// totalMarks = totalMarks + 84;

// totalMarks += 68;
// // totalMarks = tatalMarks + 68;

// totalMarks -= 6;
// // console.log(totalMarks)

// let firstName = 'John';
// let lastName = 'Dutton';

// let fullName = firstName + ' ' + lastName

// // console.log(fullName)

// let phyMarks = 88
// let chemMarks = 78
// let engMarks = 94


// let totalmarks = 0;
// totalMarks += phyMarks;
// totalMarks += chemMarks;
// totalMarks += engMarks;


// // console.log(totalMarks)



// let n = 3**4  

// n-- 
// n++ 

// console.log(n)  


// console.log(5 + '5' + 5)  



// Scopes in JS


// Global Scope
// let x = 5;
// // console.log(x) 
// x = 4;

// {
//   // Block scope or Local Scope
//   const x = 6;
// }

// console.log(x)





// if else statements

let x = 0;


if (x > 0) {

  console.log("positive number")

} else if(x < 0) {

  console.log("negative number")

} else {

  // console.log("it is zero")
  
}

// create a age variable

// age above 18 "valid"
// below 18 "underage invalid"
// age above 65 "not sutablibe"

// let age = 34;

// if (age < 18) {

//   // console.log("Underage. Invalid")

// } else if(age >= 65) {

//   // console.log("Not suitable")

// } else if(isNaN(age)) { // true

//   // console.log("Please enter a number")

// } else {
//   console.log("Valid.")
// }



// Functions

function showText() {

  let message = "Thanks for contacting us. We will get back to you soon. Have a good day!"
  console.log(message)

}

// showText()



function square(n) {

  console.log(n * n)

}

// square(3)

function joinAlert(member) {
  
  console.log(member + " has joined the group!")

}

// joinAlert("Ramu")
// joinAlert("Siva")
// joinAlert("Ravi")


// Create a function
// Take a number as an input 

// multiply by 2 and console log

// add 10 and console log it

// Cube of that number

function homeworkFunc(n) {

  return (n * 2)

  console.log(n + 10)
  console.log(n * n * n)

}

// homeworkFunc(3)



function ageChecker(age) {

  if (age < 18) {

    console.log("Underage. Invalid")
  
  } else if(age >= 65) {
  
    console.log("Not suitable")
  
  } else if(isNaN(age)) { // true
  
    console.log("Please enter a number")
  
  } else {
    console.log("Valid.")
  }

}

// ageChecker(13)
// ageChecker(45)
// ageChecker(67)
// ageChecker('fgssfgsf')




// Addition function

function addTwo(x, y) {

  console.log(x + y)

}

// addTwo(2, 8)


function addFive(a, b, c, d, e) {

  console.log(a + b + c + d + e)

}

// addFive(1, 2, 3, 4 , 5)




// Outputs of a function


function square(n) {

  let squaredValue = n * n

  return squaredValue;
}

// console.log(square(5))



function welcomeFunction(s) {

  return "Welcome to the group, " + s

}

// console.log(welcomeFunction("John"))






// Objects

let ravisFirstName = "Ravi"
let ravisLastName = "Reddy"
let ravisAge = 18

const Ravi = {

  firstName: "Ravi",
  lastName: "Reddy",
  age: 18,
  blood: 'b +ve',

  printName: function() {
    console.log(this.firstName + " " + this.lastName)
  }
}

// Ravi.printName() // Object Methods

Ravi.height = "5.9 ft"



// Strings


let myName = "John sfgsfFFFF Cena"

// console.log(myName.length)

// console.log(myName[myName.length - 1])


// let newString = myName.slice(-9, -5)
// console.log(newString)

// let newName = myName.substring(1)
// console.log(newName)

// let newStr = myName.substr(1, 7)
// console.log(newStr)

let upperCaseString = myName.toUpperCase()
// console.log(upperCaseString)

let lowerCaseString = myName.toLowerCase()
// console.log(lowerCaseString)


let userName = "    Ravi   "

let newUserName = userName.trimEnd()
// console.log(newUserName)


// Template literals


let welcomeMessage = `Welcome to the JS class`


let thanksMessage = `Thanks for your time`

let fullMessage = `${welcomeMessage}. ${thanksMessage}`

// console.log( fullMessage ) 

let firstName = "John"
let lastName = "Cena"

let nameMsg = `My fullname is ${firstName} ${lastName}`
// console.log( nameMsg )




// Arrays

// let f1 = 'banana'
// let f2 = 'apple'
// let f3 = 'pineapple'

// const fruits = ['banana', 'apple', 'pineapple', 'orange']


// fruits[1] = 'grapes'

// fruits.pop()
// fruits.push('strawberry')

// console.log(fruits)


// fruits.shift()
// fruits.unshift('blueberry')

// console.log(fruits)



// Loops


for(let i = 1; i <= 100; i++) {
  if(i % 2 === 1) {
    // console.log(i)
  }
}


const fruits = ['banana', 'apple', 'pineapple', 'orange']

// Looping through an array
for(let i = 0; i < fruits.length; i++) {

  // console.log(fruits[i])

}



// for(let i = 101; i > 100; i++) {

//   console.log(i)

// }


// Nested loops

let s = '';

for(let i = 0; i < 4; i++) {

  for(let j = 0; j <= i; j++) {
    s += '$'
  }
  s += '\n' // new line
}

// console.log(s)




const numbers = [2, 45, 56, 512, 5, 84, 9262, 698, 247, 334, 745, 632, 751, 334, 325, 46, 41, 334, 334, 77]

for(let i = 0; i < numbers.length; i++) {

  if(numbers[i] == 334) {
    // console.log('Exist')
    break;
  }

}


// While loops

let n = 0;

while(n > 5) {

  console.log('Hello')
  n++;
}

// do while

do {
  // console.log('Hello')
  n++;
}
while(n < 5);




// for-in loops

const student16 = {
  fullName: "John Cena",
  age: "24",
  height: "183 cm",
  blood: "b +ve"
}

for(let x in student16) {
  // console.log(`${x}: ${student1[x]}`)
}

for(i in fruits) {
  // console.log(fruits[i])
}


// for of

for(let fruit of fruits) {
  // console.log(fruit)
}

let S = 'I love JavaScript'

for(let l of S) {
  // console.log(l)
}


// Classes

class Student {

  constructor(fullName, age, height, blood) {
    this.fullName = fullName;
    this.age = age;
    this.height = height;
    this.blood = blood;
  }

  printName() {
    console.log("Student's name is " + this.fullName + ", age is " + this.age);
  }

}

let student1 = new Student("John Doe", 21, "173 cm", "b -ve");
// student1.printName()

let student3 = new Student("Ravi", 19, "180 cm", "b +ve");
// student3.printName()





// console.log(student1.fullName)
// const student1 = {
//   fullName: "John Doe",
//   age: "21",
//   height: "173 cm",
//   blood: "b -ve"
// }

const student2 = {
  fullName: "John Doe",
  age: "21",
  height: "173 cm",
  blood: "b -ve",

  printName: function() {
    console.log("student's name is " + this.fullName)
  }
}

// student2.printName()



class Car {
  constructor(name, milage, price) {
    this.name = name;
    this.milage = milage;
    this.price = price;
  }
}

let car1 = new Car("maruti", 30, "8Lakh")
let car2 = new Car("Kia", 20, "19lakh")

// console.log(car1)
// console.log(car2)







// DOM manipulation

let h1 = document.getElementById("heading")
h1.innerHTML = "Welcome!"
// console.log(text)


// let p = document.querySelector(".para")
// console.log(p)


let catImg = document.querySelector("#cat-img")

console.log(catImg.src)


console.log(catImg.style)

catImg.style.border = "5px solid black"
// h1.style.color = "red" 

h1.style.textAlign = "center"

// h1.style.backgroundColor = "black"

catImg.style.padding = "9px"





// Events


const btn = document.querySelector("#btn")
const btn2 = document.querySelector("#btn-2")

// When click event happens
btn.onclick = () => {
  console.log("Clicked!")
  h1.style.color = "red"

  // catImg.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg"
}

btn2.onclick = () => {
  h1.style.color = "blue"
}


// Mouse Over/Out

h1.onmouseover = () => {
  h1.style.color = "#ff0000"
}


h1.onmouseout = () => {
  h1.style.color = "blue"
}






// Counter App

const sumTotal = document.querySelector("#sum-total")
const incrementBtn = document.querySelector("#increment")
const decrementBtn = document.querySelector("#decrement")
const clearBtn = document.querySelector("#clear-count")

let sum = 0;

incrementBtn.onclick = () => {
  sum++;
  sumTotal.innerHTML = sum;
}

decrementBtn.onclick = () => {
  sum--;
  sumTotal.innerHTML = sum;
}

clearBtn.onclick = () => {
  sum = 0;
  sumTotal.innerHTML = sum;
}

// add a button called "clear" 


// hello app

const nameDisplay = document.querySelector('#name-display');
const nameInput = document.querySelector('#input-name');
const nameSubmitBtn = document.querySelector('#name-submit');


nameSubmitBtn.onclick = () => {
  
  let enteredName = nameInput.value

  if(enteredName.trim() === '') {
    nameDisplay.innerHTML = "Enter a name"
  } else {
    nameDisplay.innerHTML = `Welcome, ${enteredName}!`;
  }

  nameInput.value = ''
}



// Ask you for yor birthyear
// show your age


const ageDisplay = document.querySelector('#age-display');
const ageInput = document.querySelector('#age-input');
const ageSubmitBtn = document.querySelector('#age-submit');

ageSubmitBtn.onclick = () => {

  let birthYear = ageInput.value

  if(isNaN(birthYear) || birthYear <= 2005 || birthYear >= 1923) {
    alert('Please enter a valid input')
  } else {
    let d = new Date();
    ageDisplay.innerHTML = d.getFullYear() - birthYear
  }

  ageInput.value = '';
}

// in the year 2025
// Random string
// Random number - 214134235245

// 1923 - 2005
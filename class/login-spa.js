const signUpDiv = document.querySelector('.signup-form')

const signupForm = document.querySelector('#signup-form')
const signupFirst = document.querySelector('#signup-first')
const signupLast = document.querySelector('#signup-last')
const signupPass = document.querySelector('#signup-pass')
const signupConfirmPass = document.querySelector('#confirm-pass')



let first, last, pass;

signupForm.onsubmit = (e) => {
  e.preventDefault();

  first = signupFirst.value
  last = signupLast.value
  pass = signupPass.value
  let confirmPass = signupConfirmPass.value

  if(!first || !last || !pass || !confirmPass) {
    alert("Please enter all required fields")
    return;
  }
  
  if(pass !== confirmPass) {
    alert("Please type same password")
    return;
  }

  signUpDiv.style.display = 'none';
  loginFormDiv.style.display = 'block';
}


// login form

const loginFormDiv = document.querySelector('#login-form-div')
const loginForm = document.querySelector('#login-form')
const loginName = document.querySelector('#login-name')
const loginPass = document.querySelector('#login-pass')
const loginMsg = document.querySelector('#login-msg')


loginForm.onsubmit = (e) => {
  e.preventDefault()

  let loginNameVal = loginName.value
  let loginPassVal = loginPass.value

  if(!loginNameVal || !loginPassVal) {
    alert('Please enter all required fields')
    return 1;
  }
  
  if(loginNameVal === first && loginPassVal === pass) {
    // Show that user is logged in
    console.log("logged in")
    loginFormDiv.style.display = 'none';

    loginMsg.style.display = 'block';


  } else {
    alert('Name or password is wrong!')
  }
}















// function SOMEFUNCTION() {
  // sdvsdvs
  // sfsdfdf

  // error check 
//   if(conditionn) {
//     alert();
//     return 1;
//   }

//   // Error chececk
//   if(condition) {
//     alert();
//     return 1;
//   }
//   // fssfvsf
//   // sfvsfvsfv
//   // svsfvsfvsfv

//   return 0;
// }

// let x = SOMEFUNCTION()
// console.log(x)








// TODO APP

// input
// add button
// list item in ul

todos[{id: Math.round(Math.random()*100000), name: "Buy Carpets"}]

// CRUD - creat, read,  update, delete
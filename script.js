const myInput = document.getElementById("password");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const length2 = document.getElementById("length2");


myInput.onfocus = function(){
    document.getElementById("message").style.display = "block";
}

myInput.onblur = function(){
    document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function(){
    const lowerCaseLetters =  /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }else{
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    const upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)){
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }else{
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    const  numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    if(myInput.value.length >= 8){
        length.classList.remove("invalid");
        length.classList.add("valid");
    }else{
        length.classList.remove("valid");
        length.classList.add("invalid")
    }


    if(myInput.value.length <= 20){
        length2.classList.remove("invalid");
        length2.classList.add("valid");
    }else{
        length2.classList.remove("valid");
        length2.classList.add("invalid")
    }









}



































// const name = document.getElementById("name");
// const password = document.getElementById("password");
// const form = document.getElementById("form");
// // const errorElement= document.getElementById("error");



// form.addEventListener("submit", (e) => {
//     let messages = []
//     if (name.value === "" || name.value == null) {
//         messages.push("Name is required")
//     }
//     if(password.value.length <= 6) {
//         messages.push("Password must be longer than 6 characters");
//     }
//     if(password.value.length >= 20){
//         messages.push("Password must be less than 20 characters");
//     }
//     if(password.value.toLowerCase() === 'password'){
//         messages.push("Password cannot be password ");
//     }
    




//     if(messages.length > 0) {
//         e.preventDefault()
//         errorElement.innerText = messages.join(", ")
//     }
// });
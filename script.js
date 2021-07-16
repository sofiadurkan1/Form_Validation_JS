const myInput = document.getElementById("password");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");

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
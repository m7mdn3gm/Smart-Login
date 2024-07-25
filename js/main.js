const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const alertInput = document.querySelector("#alertInput");
const emailInputSignIn = document.querySelector("#emailInputSignIn");
const passwordInputSignIn = document.querySelector("#passwordInputSignIn");
const alertEmail = document.querySelector("#alertEmail");
const pagePath = document.querySelector('#pagePath');
const welcomeAdmin = document.getElementById('welcomeAdmin');
let users = [];

// ====== First Page ( SignUp ) ======
function addUser() {
  if(validName() && validEmail() && validPassword()) {
    let userData = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    users.push(userData);
    let dataStorage = JSON.parse(localStorage.getItem("users")) || [];
    let checkEmail = dataStorage.filter((el) => el.email == emailInput.value);
   
      if (checkEmail.length === 0) {
          // Add
          localStorage.setItem("users", JSON.stringify(users));
      
          alertInput.innerHTML = "Success";
          alertInput.classList.replace("alert-danger", "alert-success");
          alertInput.classList.replace("text-danger", "text-success");
          alertInput.classList.replace("d-none", "d-block");
          clearData();
        } else {
          // Already Exist
          alertInput.innerHTML = "Already Exist";
          alertInput.classList.replace("alert-success", "alert-danger");
          alertInput.classList.replace("text-success", "text-danger");
          alertInput.classList.replace("d-none", "d-block");
        }
    }
  
  }

// ====== Second Page ( SignIn ) ======
function signIn() {
  if(validEmail2() && validPassword2()) {
    let dataStorage = JSON.parse(localStorage.getItem("users")) || [];
    let checkEmail = dataStorage.filter((el) => el.email == emailInput.value);
    let checkPassword = dataStorage.filter((el) => el.password == passwordInput.value);
    if (checkEmail.length == 0 || checkPassword.length == 0) {
        alertEmail.innerHTML = "Email Not Exist";
        alertEmail.classList.replace("d-none", "d-block");
    }else {
        pagePath.getAttribute('href');
        pagePath.setAttribute('href',"hello.html");

        let dataStorage = JSON.parse(localStorage.getItem("users")) || [];
        let newObject = dataStorage.filter((x)=> x.email == emailInput.value);
        localStorage.setItem("index",JSON.stringify(newObject));
    }

  }
}

// ====== three Page ( Hello Name ) ======
function helloPage() {
    let objectStorage = JSON.parse(localStorage.getItem("index")) || [];
    if (welcomeAdmin != null) {
        welcomeAdmin.innerHTML = `
        <div class="login text-center translate-middle" id="welcome"> 
            💕 Hello ${objectStorage[0].name} 💕
            <p class="fs-6 text-danger mt-2"></p>
        </div>`
    }
}
helloPage() 

// ====== Clear Data ======
function clearData() {
    nameInput.value = '',
    emailInput.value = '',
    passwordInput.value = '';
}

// ====== Validation Name SignUp ======
nameInput.addEventListener("change" , validName);
function validName(){
    let regexName = /^[a-zA-Z]{3,15}$/;
    if(regexName.test(nameInput.value)){
        nameInput.classList.add('is-valid');
        nameInput.classList.remove('is-invalid');
        alertInput.classList.replace("d-block" , "d-none")
        return true;
    }else {
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
        alertInput.innerHTML = "Name Is Not Valid"
        alertInput.classList.replace("d-none" , "d-block")
        return false;
    }
}

// ====== Validation Email SignUp ======
emailInput.addEventListener("change" , validEmail);
function validEmail(){
    let regexEmail = /^[a-z0-9A-Z-\._]{4,20}@[A-Za-z]{3,10}.[a-zA-Z]{3,6}$/;
    if(regexEmail.test(emailInput.value)){
        emailInput.classList.add('is-valid');
        emailInput.classList.remove('is-invalid');
        alertInput.classList.replace("d-block" , "d-none")
        return true;
    }else {
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
        alertInput.innerHTML = "Email Is Not Valid"
        alertInput.classList.replace("d-none" , "d-block")
        return false;
    }
}

// ====== Validation Password SignUp ======
passwordInput.addEventListener("change" , validPassword);
function validPassword(){
    let regexPassword = /^[a-zA-Z0-9@-_$%#@!*.]{8,15}$/;
    if(regexPassword.test(passwordInput.value)){
        passwordInput.classList.add('is-valid');
        passwordInput.classList.remove('is-invalid');
        alertInput.classList.replace("d-block" , "d-none")
        return true;
    }else {
        passwordInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
        alertInput.innerHTML = "Use 8 or more characters with a mix of letters, numbers & symbols"
        alertInput.classList.replace("d-none" , "d-block")
        return false;
    }
}

// ====== Validation Email SignIn ======
emailInput.addEventListener("change" , validEmail);
function validEmail2(){
    let regexEmail = /^[a-z0-9A-Z-\._]{4,20}@[A-Za-z]{3,10}.[a-zA-Z]{3,6}$/;
    if(regexEmail.test(emailInput.value)){
        emailInput.classList.add('is-valid');
        emailInput.classList.remove('is-invalid');
        alertEmail.classList.replace("d-block" , "d-none")
        return true;
    }else {
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
        alertEmail.innerHTML = "Email Is Not Valid"
        alertEmail.classList.replace("d-none" , "d-block")
        return false;
    }
}

// ====== Validation Password SignIn ======
passwordInput.addEventListener("change" , validPassword);
function validPassword2(){
    let regexPassword = /^[a-zA-Z0-9@-_$%#@!*.]{8,15}$/;
    if(regexPassword.test(passwordInput.value)){
        passwordInput.classList.add('is-valid');
        passwordInput.classList.remove('is-invalid');
        alertEmail.classList.replace("d-block" , "d-none")
        return true;
    }else {
        passwordInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
        alertEmail.innerHTML = "Use 8 or more characters with a mix of letters, numbers & symbols"
        alertEmail.classList.replace("d-none" , "d-block")
        return false;
    }
}
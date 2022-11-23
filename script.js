'use strict';

let formRegistration = document.getElementById('registration')


formRegistration.addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = {};
    let form = event.target

    // username
    let username = document.getElementById('usernamefield').value;

    if (username == "" && username.length < 5) {
        errors.username = 'This field can not be empty and must contain at least 5 characters'
    }
// password

let password = document.getElementById('passwordfield').value;
let password2 = document.getElementById('passwordfield2').value;

if (password == "") {
    errors.pasww = "This field can not be empty";
  }
  if (password != password2) {
    errors.pasww2 = "Passwords do not match";
  }

  //chechkox
  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.agree = "You must agree with terms and conditions";
  }

  //radio
  let gender = false;
  form.querySelectorAll('[name="gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please select your gender";
  }

  console.log(errors);



  for (let item in errors) {


    let spanContent = document.getElementById("error_" + item);

    if (spanContent) {
      spanContent.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});

// eye icons
let showPassword = document.getElementById("passwordfield",);
let toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", function () {
  if (showPassword.type == "password") {
    showPassword.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
    showPassword.setAttribute("type", "password");
  }
});

let showPassword2 = document.getElementById("passwordfield2");
let toggleIcon2 = document.getElementById("toggleIcon2");

toggleIcon.addEventListener("click", function () {
  if (showPassword2.type == "password") {
    showPassword2.setAttribute("type", "text");
    toggleIcon2.classList.remove("fa-eye");
    toggleIcon2.classList.add("fa-eye-slash");
  } else {
    toggleIcon2.classList.remove("fa-eye-slash");
    toggleIcon2.classList.add("fa-eye");
    showPassword2.setAttribute("type", "password");
  }
});
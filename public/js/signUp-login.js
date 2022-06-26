const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const box = document.querySelector(".box");

sign_up_btn.addEventListener("click", () => {
  box.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  box.classList.remove("sign-up-mode");
});

// loader
$(window).on("load", function (event) {
  $("body").removeClass("preloading");
  $(".loaderbox").delay(1000).fadeOut("slow");
});


// $(".btn-login").onclick = function () {
//   alert("1")
//   if ($(".userName").value.length == 0) {
//     $(".text-danger").innerText = "Nhap user name";
//   }
// };


var btnLogin = document.querySelector(".btn-login");
var btnSignUp = document.querySelector(".btn-signUp");
var textDanger = document.querySelector(".text-danger");
var userName = document.querySelector(".userName");
var userPassword = document.querySelector(".userPassword");
var signUpUserName = document.querySelector(".signUp-userName");
var signUpEmail = document.querySelector(".signUp-email");
var signUpPassword = document.querySelector(".signUp-password")
btnLogin.onclick = function () {
   if (userName.value.length == 0) {
     alert("Please enter Username!");
   }
   if (userPassword.value.length == 0) {
     alert("Please enter Password!");
   }
}

btnSignUp.onclick = function () {
  if (signUpUserName.value.length == 0) {
    alert("Please enter Username!");
  }
  if (signUpEmail.value.length == 0) {
    alert("Please enter email!");
  }
  if (signUpPassword.value.length == 0) {
    alert("Please enter Password!");
  }
}
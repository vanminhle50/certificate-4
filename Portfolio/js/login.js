const loginText = document.querySelector(".titleText .login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");

const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
signupBtn.onclick = () => {
    loginText.style.marginLeft = "-50%";
    loginForm.style.display = "none";
    signupForm.style.display = "block";
};
loginBtn.onclick = () => {
    loginText.style.marginLeft = "0%";
    loginForm.style.display = "block";
    signupForm.style.display = "none";
};
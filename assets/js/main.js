
const loginBtn = document.querySelector(`#login`);
const signup = document.querySelector(`#signup`);
const loginForm = document.querySelector(`.login`);
const signupForm = document.querySelector(`.signup`);
const loginText = document.querySelector(`.login-text`);
const signupText = document.querySelector(`.signup-text`);
const links__up = document.querySelector(`.links__up`);

loginBtn.addEventListener("change", () => {
    if (signupForm.style.marginRight = "50%"){
        signupForm.style.marginRight = "0%";
        loginForm.style.marginRight = "0%";
        loginText.style.marginRight = "0%";
        return
    }
    signupForm.style.marginRight = "50%";
    loginForm.style.marginRight = "0%";
});
signup.addEventListener("change", () => {
    loginForm.style.marginRight = "-50%";
    loginText.style.marginRight = "-50%";
    signupForm.style.marginRight = "0%";
});
links__up.addEventListener("click", (e) => {
    e.preventDefault();
    signup.click();
});


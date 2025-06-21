const emailEl = document.querySelector("#email");
const errorEl = document.querySelector(".error");
const submitEl = document.querySelector("#submit");
const formEl = document.querySelector("#form");

formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!emailEl.value.trim() || !isValidEmail(emailEl.value)) {
        errorEl.innerHTML = "Please enter a valid email address";
        emailEl.style.border = "2px solid red";
    } else {
        errorEl.innerHTML = "";
        emailEl.style.border = "1px solid hsl(223, 100%, 88%)";
        formEl.reset();
    }

});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

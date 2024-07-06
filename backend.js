const mail = document.getElementById("email");
const warning = document.querySelector("small");
const submit_btn = document.getElementById("s-btn");


function validateEmail(email) {
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    return emailRegex.test(email);
}

submit_btn.addEventListener("click", e=> {
    if(!validateEmail(mail.value)) {
        warning.style.display = "block";
        mail.style.border = "2px solid var(--Light-Red)";

        e.preventDefault();
    } else {
        warning.style.display = "none";
    }
})
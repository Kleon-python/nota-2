function entra() {
    let emailInput = document.getElementById('emailInput').value;
    let passwordInput = document.getElementById('passwordInput').value;
    let emailChecked = false;
    let passChecked = false;

    if (emailInput === "federico155@gmail.com" || emailInput === "kleonarapaj66@gmail.com") {
        emailChecked = true;
    }

    if (passwordInput === "$federico188" || passwordInput === "$kleon188") {
        passChecked = true;
    }

    if (emailChecked && passChecked) {
        window.open("nota.html", "_blank");
    }
}

function passTogleFunc () {
    let passToggle = document.getElementById('passTogle');
    let passwordInput = document.getElementById('passwordInput');

    if (passwordInput.type == "password") {
        passToggle.textContent = "Nascondi Password";
        passwordInput.type = "text";
    } else if (passwordInput.type == "text") {
        passToggle.textContent = "Mostra Password";
        passwordInput.type = "password";
    }
}


const savBtn = document.getElementById('aluns');

const checks = document.getElementsByClassName('inputAll');

savBtn.onclick = function () {

    for (const checkbox of checks) {

        checkbox.checked = !checkbox.checked;
    }
};

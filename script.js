document.getElementById("length").addEventListener("input", function () {
    document.getElementById("length-val").textContent = this.value;
});

function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-+=<>?/[]{}";

    let allowedChars = lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    document.getElementById("password").value = password;
    updateStrength(password);
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

function updateStrength(password) {
    const strengthBar = document.getElementById("strength-bar");
    let strength = 0;

    if (password.length >= 12) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[!@#$%^&*]/.test(password)) strength += 1;

    switch (strength) {
        case 0:
        case 1:
            strengthBar.style.background = "red";
            strengthBar.style.width = "25%";
            break;
        case 2:
            strengthBar.style.background = "orange";
            strengthBar.style.width = "50%";
            break;
        case 3:
            strengthBar.style.background = "yellow";
            strengthBar.style.width = "75%";
            break;
        case 4:
            strengthBar.style.background = "green";
            strengthBar.style.width = "100%";
            break;
    }
}

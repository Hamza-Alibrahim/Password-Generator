let input = document.getElementById("input"),
    copy = document.querySelector(".input img"),
    generate = document.querySelector(".generate-button"),
    length = 12,
    allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%^&*()_+~|}{[]<>/=-"
function creatPassword() {
    let password = "";
    while (password.length < 12) password += allChars[Math.floor(Math.random() * allChars.length)];
    input.value = password;
};
function copyPassword() {
    input.select();
    document.execCommand("copy");
};